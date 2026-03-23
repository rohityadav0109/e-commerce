import { NextResponse } from 'next/server'
import { prisma } from '../products/route'
import { featuredProducts } from '@/lib/data'

export async function GET() {
  try {
    await prisma.product.deleteMany()
    for (const p of featuredProducts) {
      await prisma.product.create({ 
        data: {
           name: p.name,
           description: p.description,
           price: p.price,
           category: p.category,
           image: p.image,
           rating: p.rating,
           featured: true
        } 
      })
    }
    return NextResponse.json({ success: true, message: "Database dynamically seeded." })
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to seed database via API', details: error.message }, { status: 500 })
  }
}
