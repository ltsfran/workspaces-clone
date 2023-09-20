'use client'
import { useState } from 'react'
import useFetchSubscribe from './useFetchSubscribe.hook'

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const {
    isLoading,
    error,
    data: { success },
    onFetchSubscribe,
    reset
  } = useFetchSubscribe({ email })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await onFetchSubscribe()
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleReset = () => {
    reset()
    setEmail('')
  }

  return (
    <>
      {!success && error === '' && (
        <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2.5">
          <input
            type="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={handleEmailChange}
            className="bg-white px-3 py-2 text-sm rounded border border-gray-300 box-border shadow-sm min-w-[100px] max-w-[300px] w-full"
          />
          <button
            type="submit"
            className="bg-black text-white text-sm px-4 py-2 rounded-md border border-black w-min whitespace-nowrap min-w-[154px] text-center"
            disabled={isLoading}
          >
            {isLoading ? 'Please wait...' : 'Subscribe for free'}
          </button>
        </form>
      )}
      {success && (
        <div className="flex flex-wrap w-full justify-center">
          <p className="text-center mb-6 text-sm w-full">Workspace inspiration landing in your inbox soon! ✨</p>
          <button className="text-[#6b7280] py-1 px-2" onClick={handleReset}>← Back</button>
        </div>
      )}
      {error !== '' && (
        <div className="flex flex-wrap w-full justify-center">
          <p className="text-center mb-6 text-sm w-full text-[#b91c1c]">{error}</p>
          <button className="text-[#6b7280] py-1 px-2" onClick={handleReset}>← Back</button>
        </div>
      )}
    </>
  )
}

export default SubscribeForm
