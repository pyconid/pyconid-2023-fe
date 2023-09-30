import { json, redirect, type LoaderArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { models } from "~/models"
import { authenticator } from "~/services/auth.server"
import { format, parseISO } from "date-fns"
import QRCode from "react-qr-code"

import { currencyFormatter } from "~/libs"

export async function loader({ request, params }: LoaderArgs) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  })

  const ticket = await models.ticketTransaction.query.getById({
    id: params.ticketId as string,
  })

  if (!ticket) {
    return redirect("/account/ticket")
  }

  return json(ticket)
}

export default function Route() {
  const data = useLoaderData<typeof loader>()

  if (!data) return null

  return (
    <div className="mx-auto mb-20 mt-16 w-full max-w-6xl px-6">
      <div className="flex justify-between">
        <p>
          <span className="text-muted-foreground">Order ID:</span>{" "}
          {data.transactionId}
        </p>
        <div className="flex flex-col items-end gap-3">
          <img className="h-20" src="/pycon-logo.svg" alt="PyconId Logo" />
          <p>18 - 19 November 2023</p>
        </div>
      </div>
      <div className="mt-20 flex justify-between">
        <div className="flex flex-col justify-between pr-12">
          <div>
            <h1 className="font-bold">Python Conference Indonesia 2023 </h1>
            <h2>{data.ticket?.name}</h2>
            <p className="max-w-[55ch]">
              Paskal Hyper Square, Jl. Pasir Kaliki No.25-27, Ciroyom, Kec.
              Andir, Kota Bandung, Jawa Barat 40181
            </p>
          </div>
          <div>
            <p className="text-4xl text-primary">
              {currencyFormatter.format(data.ticket?.price as number)}
              <span className="text-lg text-muted-foreground">
                {" "}
                (*Tax not included)
              </span>
            </p>
            <p className="mt-4 text-lg">
              Order Date:{" "}
              {format(parseISO(data.createdAt as string), "dd MMM yy HH:MM")}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 border-l border-slate-600 pl-12">
          <p>
            <span className="text-muted-foreground">Ticket ID:</span> {data.id}
          </p>
          <QRCode value={data.id} />
        </div>
      </div>
      <img className="mt-12 w-full" src="/invoice-banner.svg" alt="" />
      <div className="mt-10">
        <h3 className="text-lg font-bold">Order Detail</h3>
        <div className="mt-4 grid grid-cols-2 gap-6">
          <p>Name</p>
          <p>{`${data.user?.firstName} ${data.user?.lastName}`}</p>
          <p>Email</p>
          <p>{data.user?.email}</p>
          <p>Phone number</p>
          <p>{data.user?.phone}</p>
        </div>
      </div>
    </div>
  )
}
