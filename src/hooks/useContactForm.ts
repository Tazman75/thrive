import { useState } from 'react'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  interest: string
  message: string
  source?: string
}

interface UseContactFormReturn {
  status: 'idle' | 'submitting' | 'success' | 'error'
  errorMessage: string
  submitForm: (data: ContactFormData) => Promise<void>
  reset: () => void
}

const API_URL = import.meta.env.PROD ? '/api/contact' : 'http://localhost:3001/api/contact'

export function useContactForm(): UseContactFormReturn {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function submitForm(data: ContactFormData) {
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')

      // GA4 conversion event
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'form_submission', {
          event_category: 'contact',
          event_label: data.interest || 'general',
          source: data.source || 'direct',
        })
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  function reset() {
    setStatus('idle')
    setErrorMessage('')
  }

  return { status, errorMessage, submitForm, reset }
}
