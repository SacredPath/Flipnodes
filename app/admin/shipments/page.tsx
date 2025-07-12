'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Plus, 
  Search, 
  Filter,
  Download,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ShipmentsTable } from '@/components/admin/ShipmentsTable'

export default function AdminShipmentsPage() {
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
      updated_at: '2024-01-12T10:00:00Z',
      estimated_delivery: '2024-01-15T10:00:00Z',
      carrier: 'Ocean Freight',
      weight: 500,
      dimensions: {
        length: 20,
        width: 10,
        height: 8
      },
      customer_id: 'user123'
    },
    {
      id: '2',
      tracking_number: 'FLIP987654321',
      status: 'delivered',
      origin: 'Amsterdam, Netherlands',
      destination: 'New York, NY',
      created_at: '2024-01-05T10:00:00Z',
      updated_at: '2024-01-10T10:00:00Z',
      estimated_delivery: '2024-01-10T10:00:00Z',
      actual_delivery: '2024-01-10T10:00:00Z',
      carrier: 'Air Freight',
      weight: 250,
      dimensions: {
        length: 15,
        width: 8,
        height: 6
      },
      customer_id: 'user456'
    },
    {
      id: '3',
      tracking_number: 'FLIP456789123',
      status: 'pending',
      origin: 'Chicago, IL',
      destination: 'Miami, FL',
      created_at: '2024-01-12T10:00:00Z',
      updated_at: '2024-01-12T10:00:00Z',
      estimated_delivery: '2024-01-20T10:00:00Z',
      carrier: 'Trucking',
      weight: 100,
      dimensions: {
        length: 12,
        width: 6,
        height: 4
      },
      customer_id: 'user789'
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
          <h1 className="text-3xl font-bold text-gray-900">All Shipments</h1>
          <p className="text-gray-600">Manage and monitor all shipments across the platform.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Link href="/admin/shipments/new">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Shipment
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Shipments</p>
              <p className="text-2xl font-bold text-gray-900">{shipments.length}</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <Plus className="w-6 h-6" />
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">In Transit</p>
              <p className="text-2xl font-bold text-gray-900">
                {shipments.filter(s => s.status === 'in_transit').length}
              </p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <Eye className="w-6 h-6" />
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Delivered</p>
              <p className="text-2xl font-bold text-gray-900">
                {shipments.filter(s => s.status === 'delivered').length}
              </p>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <Eye className="w-6 h-6" />
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">
                {shipments.filter(s => s.status === 'pending').length}
              </p>
            </div>
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <Eye className="w-6 h-6" />
            </div>
          </div>
        </Card>
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
          </div>
        </div>
      </Card>

      {/* Shipments Table */}
      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Shipments ({filteredShipments.length})
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
              window.location.href = `/admin/shipments/${shipment.id}`
            }}
            onEdit={(shipment) => {
              window.location.href = `/admin/shipments/${shipment.id}/edit`
            }}
            onDelete={(shipmentId) => {
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