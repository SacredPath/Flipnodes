'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="FlipRoutes"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 py-2"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Solutions
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg border rounded-lg py-2">
                  <Link href="/air-freight" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Air Freight</Link>
                  <Link href="/ocean-freight" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Ocean Freight</Link>
                  <Link href="/trucking" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Trucking</Link>
                  <Link href="/warehousing" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Warehousing</Link>
                  <Link href="/customs" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Customs Clearance</Link>
                </div>
              )}
            </div>
            
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 py-2"
                onMouseEnter={() => setActiveDropdown('platform')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Platform
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'platform' && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg border rounded-lg py-2">
                  <Link href="/tracking" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Shipment Tracking</Link>
                  <Link href="/analytics" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Analytics & Insights</Link>
                  <Link href="/api" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">API & Integrations</Link>
                  <Link href="/mobile" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Mobile App</Link>
                </div>
              )}
            </div>
            
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/careers" className="text-gray-700 hover:text-blue-600">Careers</Link>
            <Link href="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
            <Link href="/login">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="border-b border-gray-200 pb-2 mb-2">
                <div className="text-sm font-medium text-gray-500 px-3 py-2">Solutions</div>
                <Link href="/air-freight" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Air Freight</Link>
                <Link href="/ocean-freight" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Ocean Freight</Link>
                <Link href="/trucking" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Trucking</Link>
                <Link href="/warehousing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Warehousing</Link>
                <Link href="/customs" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Customs Clearance</Link>
              </div>
              <div className="border-b border-gray-200 pb-2 mb-2">
                <div className="text-sm font-medium text-gray-500 px-3 py-2">Platform</div>
                <Link href="/tracking" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Shipment Tracking</Link>
                <Link href="/analytics" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Analytics & Insights</Link>
                <Link href="/api" className="block px-3 py-2 text-gray-700 hover:text-blue-600">API & Integrations</Link>
                <Link href="/mobile" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Mobile App</Link>
              </div>
              <Link href="/pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Pricing</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
              <Link href="/careers" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Careers</Link>
              <Link href="/login" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Login</Link>
              <Link href="/login" className="block px-3 py-2">
                <Button size="sm" className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 