export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">FlipRoutes</h1>
        <p className="text-gray-600 mb-8">Global Logistics Platform</p>
        <div className="space-x-4">
          <a href="/track" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Track Shipment
          </a>
          <a href="/login" className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
            Login
          </a>
        </div>
      </div>
    </div>
  )
} 