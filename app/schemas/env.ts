import { z } from "zod"

export const envSchema = z.object({
  API_SERVICE_URL: z.string().optional(),
  COUNTRY_STATE_API_KEY: z.string(),
  IMAGEKIT_PUBLIC_API_KEY: z.string(),
  IMAGEKIT_PRIVATE_API_KEY: z.string(),
})
