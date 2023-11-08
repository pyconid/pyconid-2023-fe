import { getEnv } from "~/libs/env"

const DEFAULT_CONFIG = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
}

const BASE_API = "https://www.google.com/recaptcha/api/siteverify"

const { CAPTCHA_KEY_SECRET } = getEnv()

export const siteService = {
  verify(response: string) {
    return fetch(
      `${BASE_API}?secret=${CAPTCHA_KEY_SECRET}&response=${response}`,
      DEFAULT_CONFIG,
    )
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json()
          if (!data.success) {
            throw new Error("Invalid Captcha")
          }
          return data
        }
      })
      .then((data) => ({ data, error: null }))
      .catch((err) => ({ data: null, error: err.message }))
  },
}
