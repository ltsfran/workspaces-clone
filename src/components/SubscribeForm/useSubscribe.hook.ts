import { useState } from 'react'
import fetcher from '@/lib/fetcher'

const useSubscribe = () => {
  const RATE_LIMIT = 5000

  const [showForm, setShowForm] = useState(true)
  const [email, setEmail] = useState('')

  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const [lastRequestTime, setLastRequestTime] = useState(0)

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('pending')

    try {
      const now = Date.now()

      if (now - lastRequestTime < RATE_LIMIT) {
        throw new Error('Too many signups, please try again in a little while')
      }

      await fetcher('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email })
      })

      setErrorMessage('')
      setLastRequestTime(now)
      setStatus('success')
    } catch (error) {
      const message = error instanceof Error
        ? error.message
        : 'Network error'
      setErrorMessage(message)
      setStatus('error')
    } finally {
      setShowForm(false)
    }
  }

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const reset = () => {
    setStatus('idle')
    setEmail('')
    setErrorMessage('')
    setShowForm(true)
  }

  return {
    showForm,
    email,
    isPending: status === 'pending',
    isSuccess: status === 'success',
    isError: status === 'error',
    errorMessage,
    onFormSubmit,
    onEmailChange,
    reset
  }
}

export default useSubscribe
