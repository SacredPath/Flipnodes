'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Plus, 
  Search, 
  Filter,
  Download,
  MoreHorizontal
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ShipmentsTable } from '@/components/admin/ShipmentsTable'

export default function ShipmentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  // Mock data - replace with actual API call
  const shipments = [
    {
      id: '1',
      tracking_number: 'FLIP123456789',
      status: 'in_transit',
      origin: 'Shanghai, China',
      destination: 'Los Angeles, CA',
      created_at: '2024-01-10T10:00:00Z',
      carrier: 'Ocean Freight',
      estimated_delivery: '2024-01-15T10:00:00Z'
    },
    {
      id: '2',
      tracking_number: 'FLIP987654321',
      status: 'delivered',
      origin: 'Amsterdam, Netherlands',
      destination: 'New York, NY',
      created_at: '2024-01-05T10:00:00Z',
      carrier: 'Air Freight',
      estimated_delivery: '2024-01-10T10:00:00Z',
      actual_delivery: '2024-01-10T10:00:00Z'
    },
    {
      id: '3',
      tracking_number: 'FLIP456789123',
      status: 'pending',
      origin: 'Chicago, IL',
      destination: 'Miami, FL',
      created_at: '2024-01-12T10:00:00Z',
      carrier: 'Trucking',
      estimated_delivery: '2024-01-20T10:00:00Z'
    }
  ]

  const filteredShipments = shipments.filter(shipment => {
    const matchesSearch = shipment.tracking_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shipment.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shipment.destination.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || shipment.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Shipments</h1>
          <p className="text-gray-600">Manage and track all your shipments in one place.</p>
        </div>
        <Link href="/dashboard/shipments/new">
          <Button className="flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            New Shipment
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col md:flex-row gap-4 p-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search shipments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex gap-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in_transit">In Transit</option>
              <option value="delivered">Delivered</option>
              <option value="failed">Failed</option>
            </select>
            
            <Button variant="outline" className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
            
            <Button variant="outline" className="flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </Card>

      {/* Shipments Table */}
      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              All Shipments ({filteredShipments.length})
            </h2>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <ShipmentsTable 
            shipments={filteredShipments}
            onView={(shipment) => {
              // Navigate to shipment detail
              window.location.href = `/dashboard/shipments/${shipment.id}`
            }}
            onEdit={(shipment) => {
              // Navigate to edit shipment
              window.location.href = `/dashboard/shipments/${shipment.id}/edit`
            }}
            onDelete={(shipmentId) => {
              // Handle delete
              if (confirm('Are you sure you want to delete this shipment?')) {
                console.log('Delete shipment:', shipmentId)
              }
            }}
          />
        </div>
      </Card>
    </div>
  )
} 