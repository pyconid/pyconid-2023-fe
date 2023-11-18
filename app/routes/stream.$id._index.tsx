import {
  json,
  redirect,
  type LoaderArgs,
  type V2_MetaFunction,
} from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"
import { prisma } from "~/db.server"
import { models } from "~/models"
import { authenticator } from "~/services/auth.server"
import slugify from "slugify"

import { getAvatarInitials } from "~/libs/getAvatarInitials"
import { Layout } from "~/components"
import { PodiumCategories, PodiumSection } from "~/components/schedule/card"

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PyCon ID 2023 - Bandung.py Streaming" },
    {
      name: "description",
      content: "Bandung.py Streaming.",
    },
  ]
}

export async function loader({ request, params }: LoaderArgs) {
  const session = await authenticator.isAuthenticated(request)
  if (!session) return redirect("/login")

  const user = await models.user.query.getByToken({ token: session.token })

  if (!user?.participantTypeId) {
    return redirect("/tickets")
  }

  const { id } = params

  const schedule = await prisma.schedule.findUnique({
    where: { id },
    select: {
      day: true,
      start: true,
      end: true,
      sessionName: true,
      roomName: true,
      variant: true,
      speaker: {
        select: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              avatar: true,
            },
          },
          title: true,
          audience_level: true,
          topic_tags: true,
          language: true,
          description: true,
        },
      },
      streamingLink: true,
    },
  })

  return json({ schedule })
}

function getTopicTags(tags?: string | null) {
  return tags ? tags.split(",").map((a) => slugify(a, "_")) : []
}

export default function Index() {
  const { schedule } = useLoaderData<typeof loader>()

  return (
    <Layout>
      <div className="h-full w-full">
        <div className="border-b-10 mb-5 h-full w-full border border-b-4 border-primary">
          <div className="mb-10 h-full w-full">
            <iframe
              id="stream"
              title="streamyard"
              src={`${schedule?.streamingLink}?embed=true`}
              allowFullScreen
              className="border-primary-200 mx-auto aspect-video w-full border border-solid"
            />
          </div>
          <div className="mx-auto w-full max-w-6xl p-3 md:flex">
            <div className="w-full pb-6 pl-3 pr-3 md:w-[80%] md:pb-10 md:pl-10 md:pr-10">
              <h1 className="text-4xl font-bold">
                {schedule?.speaker
                  ? schedule.speaker.title
                  : schedule?.sessionName}
              </h1>
              {schedule?.speaker ? (
                <Link
                  to={`/profile/${schedule?.speaker?.user?.id}`}
                  className="group !mt-8 flex items-center gap-2"
                >
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={schedule?.speaker?.user?.avatar ?? ""} />
                    <AvatarFallback>
                      {getAvatarInitials(
                        schedule?.speaker?.user?.firstName,
                        schedule?.speaker?.user?.lastName,
                      )}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xl group-hover:underline">{`${schedule?.speaker?.user?.firstName} ${schedule?.speaker?.user?.lastName}`}</span>
                </Link>
              ) : null}
              <div className="!mt-8 space-y-3">
                <PodiumSection
                  podiumName={String(schedule?.roomName)}
                  tags={
                    schedule?.speaker
                      ? [
                          schedule?.speaker?.language ?? "",
                          schedule?.speaker?.audience_level ?? "",
                        ]
                      : []
                  }
                />
                {schedule?.speaker ? (
                  <PodiumCategories
                    categories={getTopicTags(schedule?.speaker?.topic_tags)}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="prose mx-auto flex w-full max-w-6xl p-3 md:p-10">
          <div className="w-full md:w-[60%]">
            <div className="w-full">
              <h1>Topic</h1>
              <p>{schedule?.speaker?.description ?? "-"}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
