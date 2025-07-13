import { NextResponse } from 'next/server'

// In a real app, this would come from a database
// For now, we'll use a simple in-memory store that can be updated by admin
let shipments = [
  {
    id: 'FLIP123456789',
    status: 'in_transit',
    origin: 'Shanghai, China',
    destination: 'Los Angeles, USA',
    carrier: 'Maersk',
    eta: '2024-12-15',
    currentLocation: 'Pacific Ocean',
    progress: 65,
    events: [
      {
        timestamp: '2024-12-10T10:30:00Z',
        location: 'Shanghai Port',
        status: 'Departed from origin',
        description: 'Shipment departed from Shanghai Port'
      },
      {
        timestamp: '2024-12-08T14:20:00Z',
        location: 'Shanghai Port',
        status: 'Loaded onto vessel',
        description: 'Container loaded onto vessel Maersk Sealand'
      },
      {
        timestamp: '2024-12-07T09:15:00Z',
        location: 'Shanghai Port',
        status: 'Arrived at port',
        description: 'Container arrived at Shanghai Port'
      }
    ]
  },
  {
    id: 'FLIP987654321',
    status: 'delivered',
    origin: 'Rotterdam, Netherlands',
    destination: 'New York, USA',
    carrier: 'MSC',
    eta: '2024-12-10',
    currentLocation: 'Delivered',
    progress: 100,
    events: [
      {
        timestamp: '2024-12-10T16:45:00Z',
        location: 'New York, USA',
        status: 'Delivered',
        description: 'Shipment delivered to recipient'
      },
      {
        timestamp: '2024-12-09T11:30:00Z',
        location: 'New York Port',
        status: 'Out for delivery',
        description: 'Shipment out for final delivery'
      },
      {
        timestamp: '2024-12-08T08:20:00Z',
        location: 'New York Port',
        status: 'Arrived at destination',
        description: 'Container arrived at New York Port'
      }
    ]
  },
  {
    id: 'FLIP456789123',
    status: 'at_port',
    origin: 'Hamburg, Germany',
    destination: 'Miami, USA',
    carrier: 'Hapag-Lloyd',
    eta: '2024-12-20',
    currentLocation: 'Hamburg Port',
    progress: 25,
    events: [
      {
        timestamp: '2024-12-12T13:45:00Z',
        location: 'Hamburg Port',
        status: 'At port',
        description: 'Container waiting for vessel departure'
      },
      {
        timestamp: '2024-12-11T10:30:00Z',
        location: 'Hamburg Port',
        status: 'Arrived at port',
        description: 'Container arrived at Hamburg Port'
      }
    ]
  },
  {
    id: 'Flip859657',
    status: 'in_transit',
    origin: 'Singapore, Singapore',
    destination: 'Seattle, USA',
    carrier: 'CMA CGM',
    eta: '2024-12-18',
    currentLocation: 'South China Sea',
    progress: 45,
    events: [
      {
        timestamp: '2024-12-12T08:15:00Z',
        location: 'Singapore Port',
        status: 'Departed from origin',
        description: 'Shipment departed from Singapore Port'
      },
      {
        timestamp: '2024-12-11T16:30:00Z',
        location: 'Singapore Port',
        status: 'Loaded onto vessel',
        description: 'Container loaded onto vessel CMA CGM Marco Polo'
      },
      {
        timestamp: '2024-12-10T12:45:00Z',
        location: 'Singapore Port',
        status: 'Arrived at port',
        description: 'Container arrived at Singapore Port'
      }
    ]
  },
  {
    id: 'FLIP789456123',
    status: 'pending',
    origin: 'Dubai, UAE',
    destination: 'Vancouver, Canada',
    carrier: 'Evergreen',
    eta: '2024-12-25',
    currentLocation: 'Dubai Port',
    progress: 10,
    events: [
      {
        timestamp: '2024-12-13T09:20:00Z',
        location: 'Dubai Port',
        status: 'Arrived at port',
        description: 'Container arrived at Dubai Port'
      }
    ]
  }
]

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const shipment = shipments.find(s => s.id === params.id)
    
    if (!shipment) {
      return NextResponse.json(
        { error: 'Shipment not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(shipment)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Export shipments for admin use
export { shipments } 