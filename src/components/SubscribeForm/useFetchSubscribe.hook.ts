import { useState } from 'react'
import fetcher from '@/lib/fetcher'

interface UseFetchSubscribeProps {
  email: string
}

const useFetchSubscribe = ({ email }: UseFetchSubscribeProps) => {
  const RATE_LIMIT = 5000
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState({ success: false })
  const [lastRequestTime, setLastRequestTime] = useState(0)

  const onFetchSubscribe = async () => {
    const now = Date.now()

    if (now - lastRequestTime < RATE_LIMIT) {
      setError('Too many signups, please try again in a little while')
      return
    }

    setIsLoading(true)

    try {
      const responseData = await fetcher('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email })
      })
      setData(responseData)
      setLastRequestTime(now)
    } catch (error) {
      const errorMessage = error instanceof Error
        ? error.message
        : 'Network error'
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const reset = () => {
    setIsLoading(false)
    setError('')
    setData({ success: false })
  }

  return {
    isLoading,
    error,
    data,
    onFetchSubscribe,
    reset
  }
}

export default useFetchSubscribe
