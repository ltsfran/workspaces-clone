const setHeaders = (init: RequestInit = {}) => {
  const headers = {
    ...init.headers,
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }

  return { ...init, headers }
}

export default async function fetcher (
  input: RequestInfo,
  init?: RequestInit
) {
  const updatedInit = setHeaders(init)
  const res = await fetch(input, updatedInit)

  if (!res.ok) {
    throw new Error('Network response was not ok.')
  }

  return await res.json()
}
