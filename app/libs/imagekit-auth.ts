const IMAGEKIT_AUTH_ENDPOINT = "/api/imagekit/auth"

export async function imageKitAuth() {
  try {
    const response = await fetch(IMAGEKIT_AUTH_ENDPOINT)

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`,
      )
    }
    const data = await response.json()
    const { signature, expire, token } = data
    return { signature, expire, token }
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`)
  }
}
