import type { LoaderArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import { models } from "~/models"

import { UserProfile } from "~/components/user/profile"

export async function loader({ params }: LoaderArgs) {
  if (!params.id) return

  const profile = await models.user.query.getPublicProfile({
    id: params.id,
  })

  if (!profile) return json(null)

  return json(profile)
}

export default function Route() {
  return <UserProfile />
}
