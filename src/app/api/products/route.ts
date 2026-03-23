import { NextResponse, NextRequest } from 'next/server'
import { featuredProducts } from '@/lib/data'

// Static data only (Prisma removed)
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

  const fallback = applyFilters(
    featuredProducts.map((p, i) => ({ ...p, id: String(p.id ?? i + 1), featured: true, createdAt: new Date().toISOString() })),
    category, sort
  )
  
  // Apply price range filter to static data
  let products = fallback
  if (minPrice || maxPrice) {
    products = products.filter(p => {
      const price = p.price
      if (minPrice && price < parseFloat(minPrice)) return false
      if (maxPrice && price > parseFloat(maxPrice)) return false
      return true
    })
  }

  return NextResponse.json(products)
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ error: 'Database unconfigured. Database features temporarily disabled.' }, { status: 501 })
}
