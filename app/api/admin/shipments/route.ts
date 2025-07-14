import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await supabase.from('shipments').select('*')
    if (error) throw error
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { id, ...fields } = body
    if (!id) {
      return NextResponse.json(
        { error: 'Missing required shipment id' },
        { status: 400 }
      )
    }
    // Upsert shipment (insert or update)
    const { data, error } = await supabase.from('shipments').upsert([{ id, ...fields }], { onConflict: 'id' }).select().single()
    if (error) throw error
    return NextResponse.json({ success: true, shipment: data })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { id, ...updates } = body
    if (!id) {
      return NextResponse.json(
        { error: 'Shipment ID is required' },
        { status: 400 }
      )
    }
    const { data, error } = await supabase.from('shipments').update(updates).eq('id', id).select().single()
    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Shipment not found' },
          { status: 404 }
        )
      }
      throw error
    }
    return NextResponse.json({ success: true, shipment: data })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (!id) {
      return NextResponse.json(
        { error: 'Shipment ID is required' },
        { status: 400 }
      )
    }
    const { error } = await supabase.from('shipments').delete().eq('id', id)
    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Shipment not found' },
          { status: 404 }
        )
      }
      throw error
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 