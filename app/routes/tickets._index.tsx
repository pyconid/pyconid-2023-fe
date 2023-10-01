import { json } from "@remix-run/node"
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"
import { prisma } from "~/db.server"
import { models } from "~/models"
import { authenticator } from "~/services/auth.server"

import { getEnv } from "~/libs/env"
import { Button, Layout } from "~/components"
import { TicketCard } from "~/components/ticket/card"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Buy Tickets - PyCon ID 2023" }]
}

export async function loader({ request }: LoaderArgs) {
  let userId = null

  const { TICKET_SERVICE_URL } = getEnv()

  const tickets = await prisma.ticket.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      description: true,
      earlyBird: true,
      features: {
        select: {
          id: true,
          feature: true,
        },
      },
    },
    orderBy: { createdAt: "asc" },
  })

  const userSession = await authenticator.isAuthenticated(request)

  if (userSession) {
    const userProfile = await models.user.query.getByToken({
      token: userSession.token,
    })
    userId = userProfile?.id
  }

  const earlyBirdsTicket = tickets.filter((ticket) => ticket.earlyBird)
  const nonEarlyBirdsTicket = tickets.filter((ticket) => !ticket.earlyBird)

  return json({
    nonEarlyBirdsTicket,
    earlyBirdsTicket,
    userId,
    ENV: { TICKET_SERVICE_URL },
  })
}

export default function Route() {
  const { earlyBirdsTicket, nonEarlyBirdsTicket, userId, ENV } =
    useLoaderData<typeof loader>()

  return (
    <Layout>
      <div className="relative z-[3] mt-20 bg-white px-4 pt-5 text-center">
        <h1 className="mb-6 font-brand text-5xl font-semibold text-primary lg:text-6xl">
          Tickets
        </h1>
        <p className="mx-auto w-full text-xl tracking-tight text-primary lg:w-[420px] lg:text-2xl">
          Secure your spot! Explore and select your preferred ticket category
          now!
        </p>
      </div>
      <div className="relative mx-auto mt-10 max-w-screen-2xl px-4 md:px-6 lg:mt-20">
        <p className="mx-auto max-w-[640px] text-center text-lg lg:text-2xl">
          PyCon Indonesia 2023 tickets are sold in the following types. Tickets
          are required to participate in the online conference.
        </p>
        <div className="my-20 flex flex-col items-center">
          <div className="mb-6 flex flex-wrap justify-center gap-10">
            {earlyBirdsTicket.map((ticket, i) => (
              <TicketCard key={ticket.id} data={ticket} index={i} />
            ))}
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-10">
            {nonEarlyBirdsTicket.map((ticket, i) => (
              <TicketCard
                key={ticket.id}
                data={ticket}
                index={i + earlyBirdsTicket.length}
              />
            ))}
          </div>
          <Button size="lg" className="mt-20 w-full max-w-md text-lg" asChild>
            {userId ? (
              <a
                href={`${ENV.TICKET_SERVICE_URL}${userId}`}
                target="_blank"
                rel="noreferrer"
              >
                Buy Ticket
              </a>
            ) : (
              <Link to="/login">Buy Ticket</Link>
            )}
          </Button>
        </div>
      </div>
    </Layout>
  )
}
