import type { User } from "@prisma/client"

import { isValidUrl } from "./isUrl"

type SanitizeSocialsArgs = Pick<
  User,
  "website" | "linkedin" | "facebook" | "github" | "twitter" | "instagram"
>

type SanitizeSocialArgsReturn = {
  [K in keyof SanitizeSocialsArgs]: {
    username: string | null
    url: string | null
  }
}

type Entries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

const socialsBaseURLMap = {
  website: "https://",
  linkedin: "https://linkedin.com/in/",
  facebook: "https://facebook.com/",
  github: "https://github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://instagram.com/",
} as const

const joinSocialsWithBaseUrl = (
  key: keyof SanitizeSocialsArgs,
  username: string,
) => {
  return `${socialsBaseURLMap[key]}${username}`
}

export function sanitizeSocials(socials: SanitizeSocialsArgs) {
  const entries = Object.entries(socials) as Entries<SanitizeSocialsArgs>
  const sanitizedEntries = entries.map(([key, val]) => {
    // Early return when value is null
    if (!val) return [key, val]

    // Handle URLs
    if (isValidUrl(val)) {
      let username: string = ""
      const splitted = val.split("/")

      if (key === "linkedin") {
        username = splitted[4]
      } else if (key === "website") {
        username = splitted[2]
      } else {
        username = splitted[3]
      }

      return [key, { username, url: joinSocialsWithBaseUrl(key, username) }]
    }

    // Handle non http / https
    if (val.split("/").length > 1) {
      let username: string = val
      const splitted = val.split("/")

      if (key === "linkedin") {
        username = splitted[2]
      } else if (key !== "website") {
        username = splitted[1]
      }

      return [key, { username, url: joinSocialsWithBaseUrl(key, username) }]
    }

    // Handle non URLs
    return [key, { username: val, url: joinSocialsWithBaseUrl(key, val) }]
  })

  const sanitized = Object.fromEntries(
    sanitizedEntries,
  ) as SanitizeSocialArgsReturn

  return sanitized
}
