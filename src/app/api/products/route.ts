import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { featuredProducts } from '@/lib/data'

// Singleton Prisma instance
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
export const prisma = globalForPrisma.prisma ?? new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const sort = searchParams.get('sort')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')

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

    // If db is empty, fall back to static data + seed
    if (products.length === 0) {
      for (const p of featuredProducts) {
        await prisma.product.create({
          data: { name: p.name, description: p.description, price: p.price, image: p.image, category: p.category, rating: p.rating, featured: true }
        })
      }
      products = await prisma.product.findMany({ orderBy })
    }

    return NextResponse.json(products)
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to fetch', details: error.message }, { status: 500 })
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
