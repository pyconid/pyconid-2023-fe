import type { envSchema } from "~/schemas"
import type { z } from "zod"

export function getEnv(): z.infer<typeof envSchema> {
  return {
    API_SERVICE_URL: process.env.API_SERVICE_URL || "",
  }
}
