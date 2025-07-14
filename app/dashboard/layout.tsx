import Link from 'next/link'
import { 
  Home, 
  Package, 
  Settings, 
  LogOut, 
  User,
  BarChart3,
  Truck
} from 'lucide-react'
import DashboardFooter from '@/components/ui/DashboardFooter'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <Link href="/dashboard" className="text-2xl font-bold text-blue-600">
              FlipRoutes
            </Link>
          </div>
          
          <nav className="mt-8">
            <div className="px-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Main
              </div>
              <div className="space-y-2">
                <Link 
                  href="/dashboard" 
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  <Home className="w-5 h-5 mr-3" />
                  Dashboard
                </Link>
                <Link 
                  href="/dashboard/shipments" 
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  <Package className="w-5 h-5 mr-3" />
                  Shipments
                </Link>
                <Link 
                  href="/dashboard/analytics" 
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  <BarChart3 className="w-5 h-5 mr-3" />
                  Analytics
                </Link>
                <Link 
                  href="/dashboard/tracking" 
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  <Truck className="w-5 h-5 mr-3" />
                  Live Tracking
                </Link>
              </div>
            </div>
            
            <div className="px-4 mt-8">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Account
              </div>
              <div className="space-y-2">
                <Link 
                  href="/dashboard/settings" 
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  <Settings className="w-5 h-5 mr-3" />
                  Settings
                </Link>
                <Link 
                  href="/dashboard/profile" 
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  <User className="w-5 h-5 mr-3" />
                  Profile
                </Link>
                <button 
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors w-full text-left"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Sign Out
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <main className="p-8">
            {children}
          </main>
          <DashboardFooter />
        </div>
      </div>
    </div>
  )
} 