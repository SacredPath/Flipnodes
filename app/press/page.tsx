'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, Clock, DollarSign, MapPin, Users, Globe, Shield, Zap, BarChart3, FileText, Truck, Package, Star, ChevronRight, Phone, Mail, MessageSquare, Newspaper, Download, Calendar, ExternalLink } from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function PressPage() {
  const pressReleases = [
    {
      title: 'FlipRoutes Raises $50M Series B Funding to Expand Global Operations',
      date: '2024-12-01',
      summary: 'Company secures major investment to accelerate international expansion and product development',
      category: 'Funding'
    },
    {
      title: 'FlipRoutes Launches Revolutionary AI-Powered Logistics Platform',
      date: '2024-11-15',
      summary: 'New platform uses artificial intelligence to optimize shipping routes and reduce costs',
      category: 'Product Launch'
    },
    {
      title: 'FlipRoutes Partners with Major Global Carriers',
      date: '2024-10-20',
      summary: 'Strategic partnerships expand service network to over 50 countries worldwide',
      category: 'Partnership'
    },
    {
      title: 'FlipRoutes Named Top Logistics Technology Company',
      date: '2024-09-30',
      summary: 'Industry recognition for innovation and customer satisfaction excellence',
      category: 'Awards'
    }
  ]

  const mediaKit = {
    logo: '/logo.svg',
    factSheet: 'FlipRoutes_Fact_Sheet_2024.pdf',
    pressKit: 'FlipRoutes_Press_Kit_2024.zip',
    images: [
      'team-photo.jpg',
      'office-exterior.jpg',
      'product-screenshots.jpg'
    ]
  }

  const newsArticles = [
    {
      title: 'How FlipRoutes is Revolutionizing Global Logistics',
      source: 'TechCrunch',
      date: '2024-11-20',
      url: '#',
      excerpt: 'A deep dive into how FlipRoutes is using technology to transform the logistics industry...'
    },
    {
      title: 'The Future of Supply Chain Management',
      source: 'Forbes',
      date: '2024-11-10',
      url: '#',
      excerpt: 'FlipRoutes CEO discusses the future of logistics and supply chain technology...'
    },
    {
      title: 'Startup Spotlight: FlipRoutes',
      source: 'VentureBeat',
      date: '2024-10-25',
      url: '#',
      excerpt: 'An in-depth look at FlipRoutes\' journey from startup to industry leader...'
    }
  ]

  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 right-0 w-full h-full">
          <Image
            src="/hero-section.png"
            alt="Press & Media"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Newspaper className="w-4 h-4 mr-2" />
              Press & Media
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest news, press releases, and media resources from FlipRoutes. 
              Find everything you need for your coverage of our company and products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#press-releases">
                <Button size="lg" className="flex items-center text-lg px-8 py-4">
                  View Press Releases
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="#media-kit">
                <Button size="lg" variant="outline" className="flex items-center text-lg px-8 py-4">
                  <Download className="w-5 h-5 mr-2" />
                  Download Media Kit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section id="press-releases" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Press Releases</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Latest announcements and news from FlipRoutes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {release.category}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{release.date}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{release.title}</h3>
                <p className="text-gray-700 mb-6">{release.summary}</p>
                
                <Button variant="outline" className="flex items-center">
                  Read Full Release
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section id="media-kit" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Media Kit</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Download our media resources for your coverage
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Company Fact Sheet</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive overview of FlipRoutes including company information, 
                  key statistics, and leadership team.
                </p>
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Fact Sheet
                </Button>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Download className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Complete Press Kit</h3>
                <p className="text-gray-600 mb-6">
                  Everything you need including logos, images, bios, and press materials 
                  in one comprehensive package.
                </p>
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Press Kit
                </Button>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-center mb-8">Brand Assets</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Image
                      src="/logo.svg"
                      alt="Logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <h4 className="font-semibold mb-2">Company Logo</h4>
                  <p className="text-sm text-gray-600 mb-4">High-resolution logo files</p>
                  <Button size="sm" variant="outline">Download</Button>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-gray-400" />
                  </div>
                  <h4 className="font-semibold mb-2">Team Photos</h4>
                  <p className="text-sm text-gray-600 mb-4">Executive team photos</p>
                  <Button size="sm" variant="outline">Download</Button>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-gray-400" />
                  </div>
                  <h4 className="font-semibold mb-2">Office Photos</h4>
                  <p className="text-sm text-gray-600 mb-4">Office and facility images</p>
                  <Button size="sm" variant="outline">Download</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Coverage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">News Coverage</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Recent media coverage and articles featuring FlipRoutes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {newsArticles.map((article, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.source}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{article.date}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{article.title}</h3>
                <p className="text-gray-700 mb-6">{article.excerpt}</p>
                
                <Button variant="outline" className="flex items-center">
                  Read Article
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Press */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Press</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              For press inquiries, interview requests, or additional information, 
              please contact our press team.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Press Inquiries</h3>
                <p className="text-gray-600 mb-6">
                  For general press inquiries and media requests
                </p>
                <div className="text-blue-600 font-medium">press@fliproutes.com</div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Media Relations</h3>
                <p className="text-gray-600 mb-6">
                  For interviews and speaking opportunities
                </p>
                <div className="text-blue-600 font-medium">+1 (415) 555-0123</div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Press Guidelines</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <div className="font-medium">Response Time</div>
                    <div className="text-sm text-gray-600">Within 24 hours</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <div className="font-medium">Interview Requests</div>
                    <div className="text-sm text-gray-600">Subject to availability</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <div className="font-medium">Photo Credits</div>
                    <div className="text-sm text-gray-600">Required for all images</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our press releases and stay informed about FlipRoutes news
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Contact Press
              </Button>
            </Link>
            <Link href="#media-kit">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                Download Media Kit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 