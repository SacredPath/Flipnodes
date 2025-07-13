import { z } from 'zod'

// Input validation schemas
export const emailSchema = z.string().email('Invalid email address')
export const passwordSchema = z.string().min(8, 'Password must be at least 8 characters')
export const nameSchema = z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long')
export const companySchema = z.string().max(200, 'Company name too long').optional()

// Contact form validation
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  company: companySchema,
  phone: z.string().max(20, 'Phone number too long').optional(),
  subject: z.string().min(1, 'Subject is required').max(200, 'Subject too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message too long')
})

// Quote request validation
export const quoteRequestSchema = z.object({
  service_type: z.enum(['trucking', 'air_freight', 'ocean_freight', 'customs', 'warehousing']),
  name: nameSchema,
  email: emailSchema,
  company: companySchema,
  phone: z.string().max(20, 'Phone number too long').optional(),
  origin: z.string().min(1, 'Origin is required').max(200, 'Origin too long'),
  destination: z.string().min(1, 'Destination is required').max(200, 'Destination too long'),
  cargo_type: z.string().max(100, 'Cargo type too long').optional(),
  weight: z.string().max(20, 'Weight too long').optional(),
  dimensions: z.string().max(100, 'Dimensions too long').optional(),
  volume: z.string().max(20, 'Volume too long').optional(),
  value: z.string().max(20, 'Value too long').optional(),
  container_type: z.string().max(50, 'Container type too long').optional(),
  special_requirements: z.string().max(500, 'Requirements too long').optional()
})

// Demo request validation
export const demoRequestSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  company: z.string().min(1, 'Company is required').max(200, 'Company name too long'),
  phone: z.string().max(20, 'Phone number too long').optional(),
  company_size: z.string().min(1, 'Company size is required'),
  use_case: z.string().min(1, 'Use case is required'),
  preferred_time: z.string().min(1, 'Preferred time is required'),
  additional_info: z.string().max(1000, 'Additional info too long').optional()
})

// Input sanitization
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
}

// Rate limiting helper
export function createRateLimiter(maxRequests: number, windowMs: number) {
  const store = new Map<string, { count: number; resetTime: number }>()
  
  return function checkRateLimit(identifier: string): boolean {
    const now = Date.now()
    const record = store.get(identifier)
    
    if (!record || now > record.resetTime) {
      store.set(identifier, { count: 1, resetTime: now + windowMs })
      return true
    }
    
    if (record.count >= maxRequests) {
      return false
    }
    
    record.count++
    return true
  }
}

// CSRF token generation and validation
export function generateCSRFToken(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function validateCSRFToken(token: string, expectedToken: string): boolean {
  return token === expectedToken
}

// Password strength validation
export function validatePasswordStrength(password: string): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long')
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number')
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

// SQL injection prevention (basic)
export function sanitizeSQLInput(input: string): string {
  return input.replace(/['";\\]/g, '')
}

// XSS prevention
export function escapeHtml(text: string): string {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
} 