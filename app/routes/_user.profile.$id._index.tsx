import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node"
import { json } from "@remix-run/node"
import { models } from "~/models"
import { authenticator } from "~/services/auth.server"
import { notFound } from "remix-utils"

import { UserProfile } from "~/components/user/profile"

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [{ title: `Profile not found` }]
  }
  const { profile } = data
  const name = profile.displayName ?? `${profile.firstName} ${profile.lastName}`
  return [{ title: `${name} - PyCon ID 2023` }]
}

export async function action({ params, request }: ActionArgs) {
  const userSession = await authenticator.isAuthenticated(request)
  const profileId = params.id
  const formData = await request.formData()

  const { _action } = Object.fromEntries(formData)

  if (!userSession) return

  const user = await models.user.query.getByToken({
    token: userSession.token,
  })

  if (!user?.id || !profileId) return

  if (_action === "connect") {
    return await models.userConnection.mutation.connect({
      id: user.id,
      userId: profileId,
    })
  } else {
    return await models.userConnection.mutation.disconnect({
      id: user.id,
      userId: profileId,
    })
  }
}

export async function loader({ params, request }: LoaderArgs) {
  const profile = await models.user.query.getPublicProfile({
    id: params.id,
  })

  const userSession = await authenticator.isAuthenticated(request)

  let isConnected = false
  let shouldShowConnection = false

  if (userSession) {
    const user = await models.user.query.getByToken({
      token: userSession.token,
    })

    const connection = await models.userConnection.query.getConnectionByUserId({
      id: user?.id as string,
    })

    // Hide connect button on own profile
    shouldShowConnection = user?.id !== params.id

    isConnected = Boolean(
      connection?.connecting.find(({ id }) => params.id === id),
    )
  }

  if (!profile) throw notFound("Not Found")
  return json({ profile, shouldShowConnection, isConnected })
}

export default function Route() {
  return <UserProfile />
}
