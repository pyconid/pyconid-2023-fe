import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"
import { models } from "~/models"
import { authenticator } from "~/services/auth.server"
import { format, parseISO } from "date-fns"
import QRCode from "react-qr-code"

import { Button, Layout } from "~/components"
import { Badge } from "~/components/ui/badge"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"

export const meta: V2_MetaFunction = () => {
  return [{ title: "My Ticket - PyCon ID 2023" }]
}

export async function loader({ request }: LoaderArgs) {
  const session = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  })

  if (!session) return

  const transactions = await models.user.query.getTicketTransactions({
    token: session.token,
  })

  const completedTicketId = transactions?.ticketTransactions.find(
    (ticket) => ticket.status === "completed",
  )?.id

  return { transactions, completedTicketId }
}

export default function Route() {
  const data = useLoaderData<typeof loader>()

  if (!data.transactions) return

  const {
    transactions: { ticketTransactions },
    completedTicketId,
  } = data

  return (
    <Layout>
      <div className="mx-auto mb-16 mt-10 w-full max-w-3xl px-6">
        <h1 className="text-center font-brand text-2xl font-bold text-primary md:text-5xl">
          My Ticket
        </h1>
        <div className="mb-20 mt-8">
          {completedTicketId ? (
            <div className="mx-auto max-w-[300px]">
              <div className="relative mx-auto aspect-square max-w-[300px]">
                <div className="-z-10 flex h-full items-center justify-center overflow-hidden rounded-xl border-4 border-primary bg-white p-6">
                  <QRCode
                    size={240}
                    bgColor="transparent"
                    value={completedTicketId}
                  />
                </div>
                <div className="absolute -left-2 top-2 -z-20 h-full w-full rounded-xl bg-primary" />
              </div>
              <Button className="mt-8">
                <Link
                  target="_blank"
                  to={`/account/ticket/${completedTicketId}/invoice`}
                >
                  View Invoice
                </Link>
              </Button>
            </div>
          ) : (
            <p>You have no ticket</p>
          )}
        </div>
        <h2 className="mb-2 w-full text-2xl font-bold tracking-tight text-black">
          Ticket Transactions
        </h2>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[200px]">Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Ticket Type</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ticketTransactions.map((trx) => (
              <TableRow key={trx.id}>
                <TableCell className="font-medium">
                  {trx.transactionId}
                </TableCell>
                <TableCell>
                  {format(parseISO(trx.createdAt as string), "dd MMM yy HH:MM")}
                </TableCell>
                <TableCell>{trx.ticket?.name}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      trx.status === "canceled" ? "destructive" : "default"
                    }
                  >
                    {trx.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Layout>
  )
}
