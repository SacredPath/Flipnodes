'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowLeft, Cookie, Settings, Shield, Eye, Database } from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function CookiesPage() {
  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Cookie className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Cookie Policy</h1>
                <p className="text-gray-600">Last updated: December 1, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Remembering your preferences and settings</li>
                <li>Analyzing how you use our website</li>
                <li>Providing personalized content and advertisements</li>
                <li>Improving our services and user experience</li>
                <li>Ensuring security and preventing fraud</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Authentication cookies to keep you logged in</li>
                <li>Security cookies to protect against fraud</li>
                <li>Session cookies to maintain your session</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Google Analytics cookies to track website usage</li>
                <li>Performance monitoring cookies</li>
                <li>Error tracking cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Language preference cookies</li>
                <li>Theme and display preference cookies</li>
                <li>Form data cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies are used to track visitors across websites to display relevant advertisements.
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Advertising network cookies</li>
                <li>Social media cookies</li>
                <li>Retargeting cookies</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that place cookies on your device. These services include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Google Ads:</strong> For advertising and remarketing</li>
                <li><strong>Facebook Pixel:</strong> For social media advertising</li>
                <li><strong>LinkedIn Insight:</strong> For professional networking advertising</li>
                <li><strong>Stripe:</strong> For payment processing</li>
              </ul>
              <p className="text-gray-700">
                These third-party services have their own privacy policies and cookie policies. We encourage you to review their policies for more information.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Long Do Cookies Last?</h2>
              <p className="text-gray-700 mb-4">
                Cookies have different lifespans:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li><strong>Session Cookies:</strong> These cookies are deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> These cookies remain on your device for a set period or until you delete them</li>
                <li><strong>First-Party Cookies:</strong> Set by our website and typically last for 1-2 years</li>
                <li><strong>Third-Party Cookies:</strong> Set by third-party services and may have different expiration periods</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 mb-4">
                You have several options for managing cookies:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
              <p className="text-gray-700 mb-4">
                Most browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Block all cookies</li>
                <li>Block third-party cookies</li>
                <li>Delete existing cookies</li>
                <li>Set preferences for specific websites</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookie Consent</h3>
              <p className="text-gray-700 mb-4">
                When you first visit our website, you'll see a cookie consent banner that allows you to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences</li>
                <li>Learn more about our cookie policy</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Opt-Out Tools</h3>
              <p className="text-gray-700 mb-4">
                You can also use opt-out tools provided by third-party services:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Google Analytics Opt-out Browser Add-on</li>
                <li>Digital Advertising Alliance (DAA) Opt-out Tool</li>
                <li>Network Advertising Initiative (NAI) Opt-out Tool</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact of Disabling Cookies</h2>
              <p className="text-gray-700 mb-4">
                If you choose to disable cookies, some features of our website may not function properly:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>You may need to log in repeatedly</li>
                <li>Your preferences may not be saved</li>
                <li>Some features may not work as expected</li>
                <li>Website performance may be affected</li>
                <li>Personalized content may not be available</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Posting the updated policy on our website</li>
                <li>Updating the "Last updated" date</li>
                <li>Sending you an email notification (if required by law)</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacy@fliproutes.com</p>
                  <p><strong>Phone:</strong> +1 (415) 555-0123</p>
                  <p><strong>Address:</strong> 123 Market Street, Suite 100, San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Manage Your Cookie Preferences
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We respect your privacy and give you control over how we use cookies on our website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/privacy">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                View Privacy Policy
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 