import { useRouteLoaderData } from "@remix-run/react"
import type { UserSession } from "~/services/auth.server"

export type RootLoaderData = {
  userSession: UserSession | undefined
  userProfile:
    | {
        email?: string
        avatar?: string
        firstName?: string
        lastName?: string
        displayName?: string
      }
    | undefined
}

export function useRootLoader() {
  const data = useRouteLoaderData("root") as RootLoaderData
  return {
    userSession: data?.userSession,
    userProfile: data?.userProfile,
  }
}
