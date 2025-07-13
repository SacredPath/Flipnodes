'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, Clock, DollarSign, MapPin, Users, Globe, Shield, Zap, BarChart3, FileText, Truck, Package, Star, ChevronRight, Phone, Mail, MessageSquare, BookOpen, Calendar, User, Tag } from 'lucide-react'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'logistics', name: 'Logistics' },
    { id: 'technology', name: 'Technology' },
    { id: 'industry', name: 'Industry Insights' },
    { id: 'company', name: 'Company News' }
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Global Logistics: Trends to Watch in 2024',
      excerpt: 'Explore the key trends shaping the logistics industry in 2024, from AI adoption to sustainability initiatives.',
      author: 'Sarah Johnson',
      date: '2024-12-01',
      category: 'industry',
      readTime: '5 min read',
      image: '/blog/logistics-trends.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'How AI is Transforming Supply Chain Management',
      excerpt: 'Discover how artificial intelligence is revolutionizing supply chain operations and decision-making processes.',
      author: 'Michael Chen',
      date: '2024-11-25',
      category: 'technology',
      readTime: '7 min read',
      image: '/blog/ai-supply-chain.jpg'
    },
    {
      id: 3,
      title: 'Sustainability in Logistics: Best Practices for 2024',
      excerpt: 'Learn about sustainable logistics practices and how companies are reducing their environmental impact.',
      author: 'Emily Rodriguez',
      date: '2024-11-20',
      category: 'logistics',
      readTime: '6 min read',
      image: '/blog/sustainability.jpg'
    },
    {
      id: 4,
      title: 'The Rise of E-commerce and Its Impact on Global Shipping',
      excerpt: 'How the e-commerce boom is changing global shipping patterns and logistics requirements.',
      author: 'David Kim',
      date: '2024-11-15',
      category: 'industry',
      readTime: '4 min read',
      image: '/blog/ecommerce-shipping.jpg'
    },
    {
      id: 5,
      title: 'Customs Clearance: A Complete Guide for Importers',
      excerpt: 'Everything you need to know about customs clearance processes and documentation requirements.',
      author: 'Lisa Wang',
      date: '2024-11-10',
      category: 'logistics',
      readTime: '8 min read',
      image: '/blog/customs-guide.jpg'
    },
    {
      id: 6,
      title: 'FlipRoutes Launches New Analytics Dashboard',
      excerpt: 'Announcing our latest feature: advanced analytics and reporting capabilities for better insights.',
      author: 'FlipRoutes Team',
      date: '2024-11-05',
      category: 'company',
      readTime: '3 min read',
      image: '/blog/analytics-dashboard.jpg'
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 right-0 w-full h-full">
          <Image
            src="/hero-section.png"
            alt="Blog"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <BookOpen className="w-4 h-4 mr-2" />
              Insights & Updates
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Stay informed with the latest insights, industry trends, and company updates 
              from the FlipRoutes team and logistics experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#featured">
                <Button size="lg" className="flex items-center text-lg px-8 py-4">
                  Read Latest Posts
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="flex items-center text-lg px-8 py-4">
                  <Mail className="w-5 h-5 mr-2" />
                  Subscribe
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section id="featured" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Post</h2>
                <p className="text-gray-600">Our latest insights and analysis</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="h-64 lg:h-full bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Featured post image</p>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(c => c.id === featuredPost.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-700 mb-6 text-lg">{featuredPost.excerpt}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{featuredPost.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                      <Button>
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest Posts</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Insights, updates, and analysis from our team
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border">
                <div className="h-48 bg-gray-200 rounded-t-xl flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 text-sm">Post image</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{post.date}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.filter(post => !post.featured).length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-600">Try selecting a different category or check back later for new posts.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-700 mb-8">
              Subscribe to our newsletter and get the latest insights delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button>
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore our resources and discover how FlipRoutes can transform your logistics operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Contact Us
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 