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
  return await res.json()
}
