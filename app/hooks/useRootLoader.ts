import type { SerializeFrom } from "@remix-run/node"
import { useRouteLoaderData } from "@remix-run/react"
import type { loader } from "~/root"

export function useRootLoader() {
  const rootLoaderData = useRouteLoaderData<typeof loader>(
    "root",
  ) as SerializeFrom<typeof loader>

  return rootLoaderData
}
