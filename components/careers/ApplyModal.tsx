import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { supabase } from '@/lib/supabase'

interface ApplyModalProps {
  open: boolean
  onClose: () => void
  job: {
    id: string | number
    title: string
  } | null
}

export default function ApplyModal({ open, onClose, job }: ApplyModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null as File | null,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  if (!open || !job) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, resume: e.target.files?.[0] || null }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError(null)
    try {
      // Insert application into Supabase
      const { error: dbError } = await supabase.from('job_applications').insert([
        {
          job_id: job.id,
          job_title: job.title,
          name: form.name,
          email: form.email,
          phone: form.phone,
          cover_letter: form.coverLetter,
          resume_url: null // File upload can be added later
        }
      ])
      if (dbError) throw dbError
      setStatus('success')
    } catch (err: any) {
      setError('Failed to submit application. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
        <h2 className="text-2xl font-bold mb-2">Apply for {job.title}</h2>
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input name="name" type="text" required className="w-full border rounded px-3 py-2" value={form.name} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input name="email" type="email" required className="w-full border rounded px-3 py-2" value={form.email} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input name="phone" type="tel" className="w-full border rounded px-3 py-2" value={form.phone} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Cover Letter</label>
            <textarea name="coverLetter" required rows={4} className="w-full border rounded px-3 py-2" value={form.coverLetter} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Resume (PDF, DOCX)</label>
            <input name="resume" type="file" accept=".pdf,.doc,.docx" className="w-full" onChange={handleFileChange} />
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {status === 'success' && <div className="text-green-600 text-sm">Application submitted! We'll be in touch soon.</div>}
          <div className="flex gap-4 mt-6">
            <Button type="submit" className="w-full" disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting...' : 'Submit Application'}
            </Button>
            <Button type="button" variant="outline" className="w-full" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 