const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export const api = {
  get: async (path: string) => {
    const response = await fetch(`${BASE_URL}${path}`)

    return await response.json()
  },

  post: (path: string, body: unknown) => {
    fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(body)
    }).then(res => res.json())
  }
}