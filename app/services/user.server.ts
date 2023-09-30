import type { User } from "@prisma/client"
import { models } from "~/models"

import { getEnv } from "~/libs/env"

const DEFAULT_CONFIG = {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
}

const { API_SERVICE_URL } = getEnv()

export const userService = {
  async login({ email, password }: Pick<User, "email" | "password">) {
    return fetch(`${API_SERVICE_URL}auth/signin`, {
      ...DEFAULT_CONFIG,
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        switch (res.status) {
          case 401:
            throw new Error("Wrong email or password")
          case 404:
            throw new Error("User not found")
          default:
            throw new Error("Something's wrong")
        }
      })
      .then((data) => ({ data, error: null }))
      .catch((err) => ({ data: null, error: err.message }))
  },
  async register(
    payload: Pick<User, "firstName" | "lastName" | "email" | "password">,
  ) {
    return fetch(`${API_SERVICE_URL}auth/signup`, {
      ...DEFAULT_CONFIG,
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw res
        return res.json()
      })
      .then(async (data) => {
        const user = data.data
        await models.user.mutation.createDefaultPublicFields(user.id)
        await models.user.mutation.createDefaultCompliance(user.id)
        return { data, error: null }
      })
      .catch(async (err) => {
        console.log({ err })
        return { data: null, error: err }
      })
  },
  async verify(token: string) {
    return fetch(`${API_SERVICE_URL}auth/verify/${token}`)
      .then((res) => {
        if (res.ok) return res.json()
        switch (res.status) {
          case 400:
            throw new Error("User is already verified")
          case 404:
            throw new Error("Invalid Token")
          default:
            throw new Error("Something's wrong")
        }
      })
      .then((data) => ({ data, error: null }))
      .catch(async (err) => ({ data: null, error: err.message }))
  },
}
