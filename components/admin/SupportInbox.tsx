import { formatDateTime } from '@/lib/helpers'
import { MessageCircle, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { ReactNode } from 'react'

interface SupportTicket {
  id: string
  customerName: string
  email: string
  subject: string
  message: string
  status: 'open' | 'in_progress' | 'resolved' | 'closed'
  priority: 'low' | 'medium' | 'high'
  createdAt: string
  updatedAt: string
}

interface SupportInboxProps {
  tickets: SupportTicket[]
  onViewTicket: (ticket: SupportTicket) => void
  onUpdateStatus: (ticketId: string, status: SupportTicket['status']) => void
}

export function SupportInbox({ tickets, onViewTicket, onUpdateStatus }: SupportInboxProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-100'
      case 'medium':
        return 'text-yellow-600 bg-yellow-100'
      case 'low':
        return 'text-green-600 bg-green-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <Clock className="w-4 h-4 text-blue-500" />
      case 'in_progress':
        return <MessageCircle className="w-4 h-4 text-yellow-500" />
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'closed':
        return <AlertCircle className="w-4 h-4 text-gray-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Support Inbox</h2>
        <div className="text-sm text-gray-500">
          {tickets.filter(t => t.status === 'open').length} open tickets
        </div>
      </div>

      <div className="space-y-3">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onViewTicket(ticket)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  {getStatusIcon(ticket.status)}
                  <h3 className="font-medium text-gray-900">{ticket.subject}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                    {ticket.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {ticket.message}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{ticket.customerName} • {ticket.email}</span>
                  <span>{formatDateTime(ticket.createdAt)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 