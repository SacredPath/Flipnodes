import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { quoteRequestSchema, sanitizeInput } from '@/lib/security';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate input
    const validationResult = quoteRequestSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json({ 
        error: 'Invalid input data', 
        details: validationResult.error.errors 
      }, { status: 400 });
    }

    // Sanitize inputs
    const sanitizedData = {
      service_type: body.service_type,
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      company: body.company ? sanitizeInput(body.company) : null,
      phone: body.phone ? sanitizeInput(body.phone) : null,
      origin: sanitizeInput(body.origin),
      destination: sanitizeInput(body.destination),
      cargo_type: body.cargo_type ? sanitizeInput(body.cargo_type) : null,
      weight: body.weight ? sanitizeInput(body.weight) : null,
      dimensions: body.dimensions ? sanitizeInput(body.dimensions) : null,
      volume: body.volume ? sanitizeInput(body.volume) : null,
      value: body.value ? sanitizeInput(body.value) : null,
      container_type: body.container_type ? sanitizeInput(body.container_type) : null,
      special_requirements: body.special_requirements ? sanitizeInput(body.special_requirements) : null
    };

    // Save to Supabase
    const { data: quoteData, error: quoteError } = await supabase
      .from('quote_requests')
      .insert([
        {
          service_type: sanitizedData.service_type,
          name: sanitizedData.name,
          email: sanitizedData.email,
          company: sanitizedData.company,
          phone: sanitizedData.phone,
          origin: sanitizedData.origin,
          destination: sanitizedData.destination,
          cargo_type: sanitizedData.cargo_type,
          weight: sanitizedData.weight,
          dimensions: sanitizedData.dimensions,
          volume: sanitizedData.volume,
          value: sanitizedData.value,
          container_type: sanitizedData.container_type,
          special_requirements: sanitizedData.special_requirements,
          status: 'pending'
        }
      ])
      .select();

    if (quoteError) {
      console.error('Supabase error:', quoteError);
      return NextResponse.json({ error: 'Failed to save quote request.' }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      id: quoteData?.[0]?.id,
      message: 'Quote request submitted successfully. We\'ll contact you within the specified timeframe.'
    });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
} 