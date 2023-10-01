import { json, type LoaderArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { models } from "~/models"
import { authenticator } from "~/services/auth.server"

import { Layout } from "~/components"
import { UserCard } from "~/components/user/card"

export async function loader({ request }: LoaderArgs) {
  const session = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  })

  if (!session) return json({ connections: [] })

  const user = await models.user.query.getByToken({ token: session.token })
  const connections = await models.userConnection.query.getConnectionByUserId({
    id: user?.id as string,
  })

  return json({ connections: connections?.connecting })
}

export default function Route() {
  const { connections } = useLoaderData<typeof loader>()

  return (
    <Layout>
      <div className="mx-auto mb-16 mt-10 w-full max-w-3xl px-6">
        <h1 className="text-center font-brand text-4xl font-bold text-primary md:text-5xl">
          Connections
        </h1>
      </div>
      <div className="mx-auto mb-20 max-w-7xl px-6 md:px-6">
        {connections && connections.length ? (
          <div className="mt-2 grid gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
            {connections.map((data, i) => (
              <UserCard key={data.id} data={data} index={i} />
            ))}
          </div>
        ) : (
          <div className="mb-32 mt-11 flex w-full flex-col items-center">
            <img
              className="h-52"
              src="/pycon-auth.svg"
              alt="Signin Illustration"
            />
            <p className="mt-5 text-center text-3xl text-muted-foreground">
              You have no connections
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}
