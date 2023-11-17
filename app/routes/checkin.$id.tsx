import { useId } from "react"
import { json, redirect } from "@remix-run/node"
import type { ActionArgs, LoaderArgs } from "@remix-run/node"
import {
  Form,
  isRouteErrorResponse,
  useActionData,
  useLoaderData,
  useNavigation,
  useRouteError,
} from "@remix-run/react"
import { useForm } from "@conform-to/react"
import { getFieldsetConstraint, parse } from "@conform-to/zod"
import { prisma } from "~/db.server"
import { models } from "~/models"
import { userCheckinSchema } from "~/schemas"
import QRCode from "react-qr-code"

import { getAvatarInitials } from "~/libs/getAvatarInitials"
import { Button } from "~/components"
import { TextInput } from "~/components/shared"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Skeleton } from "~/components/ui/skeleton"

export async function action({ request, params }: ActionArgs) {
  const clonedRequest = request.clone()
  const formData = await clonedRequest.formData()
  const submission = parse(formData, { schema: userCheckinSchema })

  if (!submission.value || submission.intent !== "submit") {
    return json({ ...submission, user: null, status: null })
  }

  const user = await models.user.query.getByEmail({
    email: submission.value.email,
  })

  if (!user) {
    return json({
      ...submission,
      error: {
        email: ["Profile not found"],
      },
      user: null,
    })
  }

  if (user.participantType && params.id) {
    await prisma.checkinLog.upsert({
      where: {
        userId_checkinId: {
          checkinId: params.id,
          userId: user.id,
        },
      },
      create: {
        checkinId: params.id,
        userId: user.id,
      },
      update: {
        updatedAt: new Date(),
      },
    })
  }

  return json({ ...submission, user })
}

export async function loader({ params }: LoaderArgs) {
  const checkin = await prisma.checkin.findUnique({
    where: { id: params.id },
    select: { name: true },
  })

  if (!checkin) {
    return redirect("/")
  }

  return json({
    name: checkin.name,
  })
}

export default function CheckinPage() {
  const id = useId()
  const submission = useActionData<typeof action>()
  const navigation = useNavigation()
  const data = useLoaderData<typeof loader>()

  const isSubmitting = navigation.state !== "idle"

  const [form, { email }] = useForm({
    id,
    lastSubmission: submission,
    constraint: getFieldsetConstraint(userCheckinSchema),
    onValidate({ formData }) {
      return parse(formData, { schema: userCheckinSchema })
    },
  })

  if (!data) return null

  return (
    <>
      <div className="mx-auto flex h-screen max-w-5xl items-center justify-center gap-6 px-4 print:hidden">
        <div className="max-w-3xl flex-1">
          <h1 className="text-4xl font-bold text-primary">
            Participant Check In {data.name}
          </h1>
          <Form method="POST" className="mt-8 space-y-4" {...form.props}>
            <TextInput
              field={email}
              type="email"
              label="Email"
              placeholder="Enter your email address"
            />
            <Button className="rounded-lg lg:!h-12" size="lg">
              Check In
            </Button>
          </Form>
        </div>
        <div className="h-[400px] flex-1">
          {isSubmitting ? (
            <Skeleton className="h-[400px] w-full rounded-xl" />
          ) : submission?.user ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4">
              <Avatar className="h-32 w-32">
                <AvatarImage src={submission.user.avatar ?? ""} />
                <AvatarFallback>
                  {getAvatarInitials(
                    submission.user.firstName,
                    submission.user.lastName,
                  )}
                </AvatarFallback>
              </Avatar>
              <span className="text-xl font-bold">
                {submission.user.firstName} {submission.user.lastName}
              </span>
              {submission.user.participantType ? (
                <>
                  <span>{submission.user.participantType?.name}</span>
                  <span>
                    T-Shirt Size: <b>{submission.user.tShirtSize}</b>
                  </span>
                  <Button onClick={() => window.print()}>Print QR</Button>
                </>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
      <div className="hidden print:block">
        {submission?.user?.participantType ? (
          <div className="flex h-full flex-col items-center justify-between text-center">
            <h1 className="text-[9px] font-bold">
              {submission.user.displayName ??
                `${submission.user.firstName} ${submission.user.lastName}`}
            </h1>
            <span className="mb-2 text-[9px]">
              {submission.user.participantType?.name}
            </span>
            <QRCode
              size={105}
              bgColor="transparent"
              value={`https://pycon.id/profile/${submission.user.id}`}
            />
          </div>
        ) : null}
      </div>
    </>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return "Error"
  }

  return "Unknown"
}
