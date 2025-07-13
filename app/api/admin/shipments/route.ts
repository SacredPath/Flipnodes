import { NextResponse } from 'next/server'
import { shipments } from '../../tracking/[id]/route'

export async function GET() {
  try {
    return NextResponse.json(shipments)
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
    const { id, status, origin, destination, carrier, eta, currentLocation, progress, events } = body

    // Validate required fields
    if (!id || !status || !origin || !destination || !carrier || !eta) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if shipment already exists
    const existingIndex = shipments.findIndex(s => s.id === id)
    
    if (existingIndex >= 0) {
      // Update existing shipment
      shipments[existingIndex] = {
        id,
        status,
        origin,
        destination,
        carrier,
        eta,
        currentLocation: currentLocation || 'Unknown',
        progress: progress || 0,
        events: events || []
      }
    } else {
      // Add new shipment
      shipments.push({
        id,
        status,
        origin,
        destination,
        carrier,
        eta,
        currentLocation: currentLocation || 'Unknown',
        progress: progress || 0,
        events: events || []
      })
    }

    return NextResponse.json({ success: true, shipment: shipments.find(s => s.id === id) })
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

    const shipmentIndex = shipments.findIndex(s => s.id === id)
    
    if (shipmentIndex === -1) {
      return NextResponse.json(
        { error: 'Shipment not found' },
        { status: 404 }
      )
    }

    // Update shipment
    shipments[shipmentIndex] = { ...shipments[shipmentIndex], ...updates }

    return NextResponse.json({ success: true, shipment: shipments[shipmentIndex] })
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

    const shipmentIndex = shipments.findIndex(s => s.id === id)
    
    if (shipmentIndex === -1) {
      return NextResponse.json(
        { error: 'Shipment not found' },
        { status: 404 }
      )
    }

    // Remove shipment
    shipments.splice(shipmentIndex, 1)

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 