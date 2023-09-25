import { useRouteLoaderData } from "@remix-run/react"
import type { UserSession } from "~/services/auth.server"

export type RootLoaderData = {
  userSession: UserSession | undefined
}

export function useRootLoader() {
  const data = useRouteLoaderData("root") as RootLoaderData
  return {
    userSession: data?.userSession,
  }
}
