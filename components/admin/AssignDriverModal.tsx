import { useState, ReactNode } from 'react'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { User, Truck, MapPin } from 'lucide-react'

interface Driver {
  id: string
  name: string
  email: string
  phone: string
  vehicle: string
  currentLocation: string
  status: 'available' | 'busy' | 'offline'
}

interface AssignDriverModalProps {
  isOpen: boolean
  onClose: () => void
  shipmentId: string
  drivers: Driver[]
  onAssign: (shipmentId: string, driverId: string) => void
}

export function AssignDriverModal({
  isOpen,
  onClose,
  shipmentId,
  drivers,
  onAssign
}: AssignDriverModalProps) {
  const [selectedDriver, setSelectedDriver] = useState<string>('')

  const handleAssign = () => {
    if (selectedDriver) {
      onAssign(shipmentId, selectedDriver)
      setSelectedDriver('')
      onClose()
    }
  }

  const availableDrivers = drivers.filter(driver => driver.status === 'available')

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Assign Driver"
      size="lg"
    >
      <div className="space-y-4">
        <div className="text-sm text-gray-600 mb-4">
          Select a driver to assign to this shipment. Only available drivers are shown.
        </div>

        {availableDrivers.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Truck className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No available drivers at the moment.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {availableDrivers.map((driver) => (
              <div
                key={driver.id}
                className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedDriver === driver.id
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedDriver(driver.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900">{driver.name}</h3>
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        Available
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{driver.email}</p>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Truck className="w-3 h-3 mr-1" />
                      <span>{driver.vehicle}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{driver.currentLocation}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleAssign}
            disabled={!selectedDriver}
          >
            Assign Driver
          </Button>
        </div>
      </div>
    </Modal>
  )
} 