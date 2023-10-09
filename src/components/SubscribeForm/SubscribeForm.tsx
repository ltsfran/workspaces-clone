'use client'
import useSubscribe from './useSubscribe.hook'

const SubscribeForm: React.FC = () => {
  const {
    showForm,
    onFormSubmit,
    email,
    onEmailChange,
    isPending,
    isSuccess,
    isError,
    errorMessage,
    reset
  } = useSubscribe()

  return (
    <>
      {showForm && (
        <form
          onSubmit={onFormSubmit}
          className="flex justify-center items-center gap-2.5"
        >
          <input
            type="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={onEmailChange}
            className="bg-white px-3 py-2 text-sm rounded border border-gray-300 box-border shadow-sm min-w-[100px] max-w-[300px] w-full"
          />
          <button
            type="submit"
            className="bg-black text-white text-sm px-4 py-2 rounded-md border border-black w-min whitespace-nowrap min-w-[154px] text-center"
            disabled={isPending}
          >
            {isPending ? 'Please wait...' : 'Subscribe for free'}
          </button>
        </form>
      )}
      {!showForm && (
        <div className="flex flex-wrap w-full justify-center">
          {isSuccess && <p className="text-center mb-6 text-sm w-full">Workspace inspiration landing in your inbox soon! ✨</p>}
          {isError && <p className="text-center mb-6 text-sm w-full text-[#b91c1c]">{errorMessage}</p>}
          <button className="text-[#6b7280] py-1 px-2" onClick={reset}>← Back</button>
        </div>
      )}
    </>
  )
}

export default SubscribeForm
