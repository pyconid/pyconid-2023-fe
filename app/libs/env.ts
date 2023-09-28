import type { envSchema } from "~/schemas"
import type { z } from "zod"

export function getEnv(): z.infer<typeof envSchema> {
  return {
    API_SERVICE_URL: process.env.API_SERVICE_URL || "",
    COUNTRY_STATE_API_KEY: process.env.COUNTRY_STATE_API_KEY || "",
    IMAGEKIT_PUBLIC_API_KEY: process.env.IMAGEKIT_PUBLIC_API_KEY || "",
    IMAGEKIT_PRIVATE_API_KEY: process.env.IMAGEKIT_PRIVATE_API_KEY || "",
  }
}
