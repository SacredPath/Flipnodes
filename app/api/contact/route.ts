import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';
import { contactFormSchema, sanitizeInput } from '@/lib/security';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate input
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json({ 
        error: 'Invalid input data', 
        details: validationResult.error.errors 
      }, { status: 400 });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      company: body.company ? sanitizeInput(body.company) : null,
      phone: body.phone ? sanitizeInput(body.phone) : null,
      subject: sanitizeInput(body.subject),
      message: sanitizeInput(body.message)
    };

    // Save to Supabase
    const { data: contactData, error: contactError } = await supabase
      .from('contact_forms')
      .insert([
        {
          name: sanitizedData.name,
          email: sanitizedData.email,
          company: sanitizedData.company,
          phone: sanitizedData.phone,
          subject: sanitizedData.subject,
          message: sanitizedData.message,
          status: 'new'
        }
      ])
      .select();

    if (contactError) {
      console.error('Supabase error:', contactError);
      return NextResponse.json({ error: 'Failed to save contact form.' }, { status: 500 });
    }

    // Send email (if Resend is configured)
    if (process.env.RESEND_API_KEY) {
      try {
        const data = await resend.emails.send({
          from: 'Contact Form <noreply@flipnodes.com>',
          to: process.env.CONTACT_EMAIL || 'your@email.com',
          subject: `New Contact Form Submission from ${sanitizedData.name}`,
          replyTo: sanitizedData.email,
          text: `Name: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\nCompany: ${sanitizedData.company || 'N/A'}\nPhone: ${sanitizedData.phone || 'N/A'}\nSubject: ${sanitizedData.subject}\nMessage: ${sanitizedData.message}`,
        });

        if (data.error) {
          console.error('Resend error:', data.error);
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json({ success: true, id: contactData?.[0]?.id });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
} 