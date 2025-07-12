'use client'

import { 
  Package, 
  Truck, 
  CheckCircle, 
  Clock,
  AlertCircle,
  MapPin
} from 'lucide-react'

interface TrackingEvent {
  id: string
  shipment_id: string
  event_type: 'pickup' | 'in_transit' | 'delivered' | 'failed' | 'out_for_delivery'
  location: string
  timestamp: string
  description: string
}

interface ShipmentTimelineProps {
  events: TrackingEvent[]
}

export function ShipmentTimeline({ events }: ShipmentTimelineProps) {
  const getEventIcon = (eventType: string) => {
    switch (eventType) {
      case 'pickup':
        return <Package className="w-5 h-5 text-blue-600" />
      case 'in_transit':
        return <Truck className="w-5 h-5 text-blue-600" />
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'failed':
        return <AlertCircle className="w-5 h-5 text-red-600" />
      case 'out_for_delivery':
        return <Truck className="w-5 h-5 text-orange-600" />
      default:
        return <Clock className="w-5 h-5 text-gray-600" />
    }
  }

  const getEventColor = (eventType: string) => {
    switch (eventType) {
      case 'pickup':
        return 'bg-blue-100 border-blue-200'
      case 'in_transit':
        return 'bg-blue-100 border-blue-200'
      case 'delivered':
        return 'bg-green-100 border-green-200'
      case 'failed':
        return 'bg-red-100 border-red-200'
      case 'out_for_delivery':
        return 'bg-orange-100 border-orange-200'
      default:
        return 'bg-gray-100 border-gray-200'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getEventTitle = (eventType: string) => {
    switch (eventType) {
      case 'pickup':
        return 'Picked Up'
      case 'in_transit':
        return 'In Transit'
      case 'delivered':
        return 'Delivered'
      case 'failed':
        return 'Delivery Failed'
      case 'out_for_delivery':
        return 'Out for Delivery'
      default:
        return 'Event'
    }
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Tracking Timeline</h3>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={event.id} className="relative flex items-start space-x-4">
              {/* Timeline dot */}
              <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 ${getEventColor(event.event_type)}`}>
                {getEventIcon(event.event_type)}
              </div>
              
              {/* Event content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900">
                    {getEventTitle(event.event_type)}
                  </h4>
                  <time className="text-xs text-gray-500">
                    {formatDate(event.timestamp)}
                  </time>
                </div>
                
                <div className="mt-1 flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <p className="text-sm text-gray-600">{event.location}</p>
                </div>
                
                <p className="mt-2 text-sm text-gray-700">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {events.length === 0 && (
        <div className="text-center py-8">
          <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No tracking events</h3>
          <p className="text-gray-600">Tracking information will appear here once your shipment is in transit.</p>
        </div>
      )}
    </div>
  )
} 