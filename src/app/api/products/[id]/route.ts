import { NextResponse, NextRequest } from 'next/server'
import { featuredProducts } from '@/lib/data'

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const product = featuredProducts.find(p => String(p.id) === id)
    if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(product)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  return NextResponse.json({ error: 'Database unconfigured. Database features temporarily disabled.' }, { status: 501 })
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  return NextResponse.json({ error: 'Database unconfigured. Database features temporarily disabled.' }, { status: 501 })
}
