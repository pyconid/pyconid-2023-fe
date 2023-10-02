import { json, redirect } from "@remix-run/node"
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { models } from "~/models"
import { authenticator } from "~/services/auth.server"
import { parseISO } from "date-fns"
import { formatInTimeZone } from "date-fns-tz"
import QRCode from "react-qr-code"

import { currencyFormatter } from "~/libs"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Invoice - PyCon ID 2023" }]
}

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
      <div className="mt-20 flex flex-col-reverse justify-between sm:flex-row">
        <div className="flex flex-col justify-between pr-12">
          <div className="mt-16">
            <h1 className="font-bold">Python Conference Indonesia 2023 </h1>
            <h2>{data.ticket?.name}</h2>
            <p className="max-w-[55ch]">
              Paskal Hyper Square, Jl. Pasir Kaliki No.25-27, Ciroyom, Kec.
              Andir, Kota Bandung, Jawa Barat 40181
            </p>
          </div>
          <div>
            <p className="mt-8 text-4xl text-primary">
              {currencyFormatter.format(data.totalPrice as number)}
              <span className="text-lg text-muted-foreground" />
            </p>
            <p className="mt-4 text-lg">
              Order Date:{" "}
              {formatInTimeZone(
                parseISO(data.createdAt as string),
                "UTC",
                "dd MMM yy HH:MM",
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 border-slate-600 sm:border-l sm:pl-12">
          <p>
            <span className="text-muted-foreground">Ticket ID:</span> {data.id}
          </p>
          <QRCode value={data.id} />
        </div>
      </div>
      <img className="mt-8 w-full sm:mt-12" src="/invoice-banner.jpg" alt="" />
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
      <div className="prose mt-10">
        <h3>Ticket Exchange Guidelines for a Great Time:</h3>
        <ol>
          <li>
            Make sure you've got your ticket and your E-ticket with the groovy
            QR code.
          </li>
          <li>
            If you're joining us in person, head on over to the venue and hit up
            our awesome registration desk.
          </li>
          <li>
            Show off that E-ticket with the cool QR code and give it a scan.
          </li>
          <li>
            Once you've scanned it, you'll score yourself an ID card, just like
            a backstage pass!
          </li>
          <li>
            With that ID card, you're all set to dive into the PyCon ID 2023
            event and have a blast!
          </li>
        </ol>
        <h3>Exciting Updates:</h3>
        <ol>
          <li>
            Don't forget to showcase that groovy QR code on your E-ticket,
            whether it's in print or digital form!
          </li>
          <li>
            As for our online attendees, you can jump right into the action by
            logging in at pycon.id. Let's have some fun!
          </li>
        </ol>
      </div>
    </div>
  )
}
