import type { LoaderArgs } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { models } from "~/models"
import { authenticator } from "~/services/auth.server"

import { Layout } from "~/components"

export async function loader({ request }: LoaderArgs) {
  const session = await authenticator.isAuthenticated(request)
  if (!session) return redirect("/login")

  const user = await models.user.query.getByToken({ token: session.token })

  if (!user?.participantTypeId) {
    return redirect("/tickets")
  }

  return {}
}

export default function StreamPage() {
  return (
    <Layout>
      <div className="flex h-[680px] w-full items-center justify-center">
        <h1 className="font-brand text-7xl font-bold text-primary">
          Coming Soon!
        </h1>
      </div>
    </Layout>
  )
}
