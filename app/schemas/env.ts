import { z } from "zod"

export const envSchema = z.object({
  API_SERVICE_URL: z.string().optional(),
})
