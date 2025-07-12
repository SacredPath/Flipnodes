'use client'

import { MapPin, Navigation } from 'lucide-react'

interface TrackingMapProps {
  origin: string
  destination: string
  currentLocation?: string
  className?: string
}

export function TrackingMap({ origin, destination, currentLocation, className = '' }: TrackingMapProps) {
  return (
    <div className={`bg-gray-100 rounded-lg border border-gray-200 ${className}`}>
      <div className="p-6 h-full flex flex-col">
        {/* Map Header */}
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-gray-900">Live Tracking Map</h4>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Real-time GPS</span>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="flex-1 bg-white rounded-lg border border-gray-200 relative overflow-hidden">
          {/* Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>
          
          {/* Route Line */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="relative">
                {/* Route line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-300 transform -translate-y-1/2"></div>
                
                {/* Origin */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                  <div className="mt-2 text-xs text-gray-600 text-center w-20">
                    {origin.split(',')[0]}
                  </div>
                </div>
                
                {/* Current Location (if available) */}
                {currentLocation && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    <div className="mt-2 text-xs text-gray-600 text-center w-24">
                      {currentLocation}
                    </div>
                  </div>
                )}
                
                {/* Destination */}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
                  <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                  <div className="mt-2 text-xs text-gray-600 text-center w-20">
                    {destination.split(',')[0]}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Controls */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Navigation className="w-4 h-4 text-gray-600" />
            </button>
            <button className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <MapPin className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          
          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3">
            <div className="flex items-center space-x-3 text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Origin</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Current</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-600">Destination</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Info */}
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Shipment Status</p>
              <p className="text-xs text-gray-600">
                {currentLocation ? `Currently at: ${currentLocation}` : 'Location tracking enabled'}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-600">Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 