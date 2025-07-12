import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateTime(date: string | Date): string {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatTrackingNumber(trackingNumber: string): string {
  // Format tracking number with spaces for better readability
  return trackingNumber.replace(/(.{4})/g, '$1 ').trim()
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'in_transit':
      return 'bg-blue-100 text-blue-800'
    case 'delivered':
      return 'bg-green-100 text-green-800'
    case 'failed':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export function getStatusIcon(status: string): string {
  switch (status) {
    case 'pending':
      return '⏳'
    case 'in_transit':
      return '🚚'
    case 'delivered':
      return '✅'
    case 'failed':
      return '❌'
    default:
      return '📦'
  }
}

export function calculateETA(createdAt: string, estimatedDays: number = 5): Date {
  const created = new Date(createdAt)
  const eta = new Date(created)
  eta.setDate(eta.getDate() + estimatedDays)
  return eta
}

export function validateTrackingNumber(trackingNumber: string): boolean {
  // Basic validation for tracking numbers (alphanumeric, 8-20 characters)
  const trackingRegex = /^[A-Z0-9]{8,20}$/
  return trackingRegex.test(trackingNumber.toUpperCase())
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
} 