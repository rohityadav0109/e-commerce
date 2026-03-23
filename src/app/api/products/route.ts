import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { featuredProducts } from '@/lib/data'

// Singleton Prisma instance
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
export const prisma = globalForPrisma.prisma ?? new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Fallback filter/sort for static data
function applyFilters(products: any[], category: string | null, sort: string | null) {
  let result = category ? products.filter(p => p.category === category) : [...products]
  if (sort === 'price_asc') result.sort((a, b) => a.price - b.price)
  else if (sort === 'price_desc') result.sort((a, b) => b.price - a.price)
  return result
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const sort = searchParams.get('sort')
  const minPrice = searchParams.get('minPrice')
  const maxPrice = searchParams.get('maxPrice')

  try {
    const where: any = {}
    if (category) where.category = category
    if (minPrice || maxPrice) {
      where.price = {}
      if (minPrice) where.price.gte = parseFloat(minPrice)
      if (maxPrice) where.price.lte = parseFloat(maxPrice)
    }

    let orderBy: any = { createdAt: 'desc' }
    if (sort === 'price_asc') orderBy = { price: 'asc' }
    if (sort === 'price_desc') orderBy = { price: 'desc' }

    let products = await prisma.product.findMany({ where, orderBy })

    // If db is empty, seed then return
    if (products.length === 0) {
      for (const p of featuredProducts) {
        await prisma.product.create({
          data: { name: p.name, description: p.description, price: p.price, image: p.image, category: p.category, rating: p.rating, featured: true }
        })
      }
      products = await prisma.product.findMany({ orderBy })
    }

    return NextResponse.json(products)
  } catch {
    // Fallback to static data when DB unavailable (e.g. Vercel free tier / SQLite)
    const fallback = applyFilters(
      featuredProducts.map((p, i) => ({ ...p, id: String(p.id ?? i + 1), featured: true, createdAt: new Date().toISOString() })),
      category, sort
    )
    return NextResponse.json(fallback)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        price: parseFloat(body.price),
        image: body.image,
        category: body.category,
        rating: parseFloat(body.rating ?? '4.0'),
        featured: body.featured ?? false,
      }
    })
    return NextResponse.json(product, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to create', details: error.message }, { status: 500 })
  }
}
