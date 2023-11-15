import { json } from "@remix-run/node"
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import type { Prisma } from "@prisma/client"
import { prisma } from "~/db.server"
import { models } from "~/models"
import { authenticator } from "~/services/auth.server"
import slugify from "slugify"

import { Layout } from "~/components"
import { ScheduleTabs, ScheduleTabsProvider } from "~/components/schedule"
import { ScheduleCard } from "~/components/schedule/card"
import { Header } from "~/components/schedule/header"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Schedule" }]
}

type Schedule = Prisma.ScheduleGetPayload<{
  select: {
    id: true
    day: true
    start: true
    end: true
    sessionName: true
    roomName: true
    variant: true
    streamingLink: boolean
    speaker: {
      select: {
        user: {
          select: {
            firstName: true
            lastName: true
          }
        }
        title: true
        audience_level: true
        topic_tags: true
        language: true
      }
    }
  }
}>

const getParallelSession = (session: number) => `Parallel Session ${session}`
const parallelFilterFn = (session: number) => (d: Schedule) =>
  d.sessionName === getParallelSession(session)

export async function loader({ request }: LoaderArgs) {
  const session = await authenticator.isAuthenticated(request)

  let isParticipant = false

  if (session) {
    const user = await models.user.query.getByToken({ token: session.token })
    isParticipant = user?.participantTypeId !== null
  }

  const schedule = await prisma.schedule.findMany({
    select: {
      id: true,
      day: true,
      start: true,
      end: true,
      sessionName: true,
      roomName: true,
      variant: true,
      streamingLink: isParticipant,
      speaker: {
        select: {
          user: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
          title: true,
          audience_level: true,
          topic_tags: true,
          language: true,
        },
      },
    },
  })

  const openingKeynote1 = schedule.slice(0, 2)

  const parallel1 = schedule.filter(parallelFilterFn(1))
  const parallel2 = schedule.filter(parallelFilterFn(2))
  const parallel3 = schedule.filter(parallelFilterFn(3))
  const parallel4 = schedule.filter(parallelFilterFn(4))
  const parallel5 = schedule.filter(parallelFilterFn(5))
  const parallel6 = schedule.filter(parallelFilterFn(6))
  const parallel7 = schedule.filter(parallelFilterFn(7))
  const parallel8 = schedule.filter(parallelFilterFn(8))

  return json({
    schedule,
    openingKeynote1,
    parallel1,
    parallel2,
    parallel3,
    parallel4,
    parallel5,
    parallel6,
    parallel7,
    parallel8,
  })
}

const tabs = [
  { id: "day1", title: "Day 1" },
  { id: "day2", title: "Day 2" },
]
export default function Route() {
  const {
    openingKeynote1,
    parallel1,
    parallel2,
    parallel3,
    parallel4,
    parallel5,
    parallel6,
    parallel7,
    parallel8,
  } = useLoaderData<typeof loader>()

  return (
    <Layout>
      <div className="relative z-[3] mt-20 bg-white px-4 pt-5 text-center">
        <h1 className="mb-6 font-brand text-5xl font-semibold text-primary lg:text-6xl">
          Schedule
        </h1>
        <p className="mx-auto w-full text-xl tracking-tight [text-wrap:balance] lg:w-[420px] lg:text-2xl">
          Explore the schedule for PyCon ID 2023
        </p>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pb-32 md:px-6">
        <ScheduleTabsProvider defaultActive="day1">
          <ScheduleTabs tabs={tabs} />
          <Header title="Day 1" />
          <Header
            variant="main"
            title="Opening & Keynote Session 1"
            date="18 November 2023"
            start="09:30"
            end="11:00"
          />
          <ScheduleTabs.Content contentFor="day1" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              {openingKeynote1.map(
                ({ start, end, id, sessionName, speaker, streamingLink }) => (
                  <ScheduleCard
                    key={id}
                    type="keynote"
                    title={sessionName ?? ""}
                    description={
                      speaker
                        ? `${constructFullName(
                            speaker.user?.firstName,
                            speaker.user?.lastName,
                          )}- ${speaker.title}`
                        : ""
                    }
                    time={`${start} - ${end}`}
                    url={""}
                  />
                ),
              )}
            </div>
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Parallel Session 1"
            date="18 November 2023"
            start="11:10"
            end="11:50"
          />
          <ScheduleTabs.Content className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ParallelSession data={parallel1} />
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Lunch Break"
            date="18 November 2023"
            start="11:50"
            end="13:00"
          />
          <ScheduleTabs.Content contentFor="day1" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Lunch Break"
                description=""
                time="11:50 - 13:00"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Parallel Session 2"
            date="18 November 2023"
            start="13:10"
            end="13:50"
          />
          <ScheduleTabs.Content className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ParallelSession data={parallel2} />
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Parallel Session 3"
            date="18 November 2023"
            start="14:00"
            end="14:40"
          />
          <ScheduleTabs.Content className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ParallelSession data={parallel3} />
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Afternoon Break"
            date="18 November 2023"
            start="14:40"
            end="15:20"
          />
          <ScheduleTabs.Content contentFor="day1" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Afternoon Break"
                description=""
                time="14:40 - 15:20"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Parallel Session 4"
            date="18 November 2023"
            start="15:20"
            end="16:00"
          />
          <ScheduleTabs.Content className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ParallelSession data={parallel4} />
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Parallel Session 5"
            date="18 November 2023"
            start="16:10"
            end="16:50"
          />
          <ScheduleTabs.Content className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ParallelSession data={parallel5} />
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Lightning Talks Day 1"
            date="18 November 2023"
            start="17:00"
            end="17:20"
          />
          <ScheduleTabs.Content contentFor="day1" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Lightning Talks Day 1"
                description=""
                time="17:00 - 17:20"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Closing Day 1"
            date="18 November 2023"
            start="17:20"
            end="17:40"
          />
          <ScheduleTabs.Content contentFor="day1" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Closing Session"
                description=""
                time="17:20 - 17:40"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header title="Day 2" />
          <Header
            variant="main"
            title="Opening & Keynote Session 2"
            date="19 November 2023"
            start="09:30"
            end="11:00"
          />
          <ScheduleTabs.Content contentFor="day2">
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Opening Session"
                description=""
                time="09:30 - 10:00"
                url="/"
              />
              <ScheduleCard
                type="keynote"
                title="Keynote Session 2 - Menjadi Penyelam Handal"
                description="Giovanni Sakti"
                time="10:00 - 11:00"
                tags={["All", "ID"]}
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Parallel Session 6"
            date="19 November 2023"
            start="11:10"
            end="11:50"
          />
          <ScheduleTabs.Content className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ParallelSession data={parallel6} />
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Lunch Break"
            date="19 November 2023"
            start="11:50"
            end="13:00"
          />
          <ScheduleTabs.Content contentFor="day2" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Lunch Break"
                description=""
                time="11:50 - 12:50"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Keynote Session 3"
            date="19 November 2023"
            start="13:00"
            end="14:00"
          />
          <ScheduleTabs.Content contentFor="day2" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Keynote Session 3 - Python and LLMs: Shaping the future of AI"
                description="Erwin Huizenga"
                time="13:00 - 14:00"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Parallel Session 7"
            date="19 November 2023"
            start="14:10"
            end="14:50"
          />
          <ScheduleTabs.Content className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ParallelSession data={parallel7} />
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Afternoon Break"
            date="19 November 2023"
            start="14:50"
            end="15:20"
          />
          <ScheduleTabs.Content contentFor="day2" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Afternoon Break"
                description=""
                time="14:50 - 15:20"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Parallel Session 8"
            date="19 November 2023"
            start="15:20"
            end="16:00"
          />
          <ScheduleTabs.Content className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ParallelSession data={parallel8} />
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Lightning Talks Day 2"
            date="19 November 2023"
            start="16:10"
            end="16:40"
          />
          <ScheduleTabs.Content contentFor="day2" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Lightning Talks Day 2"
                description=""
                time="16:10 - 16:40"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Closing Day 2"
            date="19 November 2023"
            start="16:40"
            end="17:00"
          />
          <ScheduleTabs.Content contentFor="day2" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Closing Session"
                description=""
                time="16:40 - 17:00"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
        </ScheduleTabsProvider>
      </div>
    </Layout>
  )
}

function ParallelSession({ data }: { data: Schedule[] }) {
  return data.map((p) => {
    const { speaker } = p

    if (!speaker) return null

    return (
      <ScheduleCard
        key={p.id}
        type="podium"
        podiumName={String(p.roomName)}
        title={String(speaker.title)}
        description={constructFullName(
          speaker?.user?.firstName,
          speaker?.user?.lastName,
        )}
        categories={getTopicTags(speaker?.topic_tags)}
        tags={[String(speaker.audience_level), String(speaker.language)]}
        url="/"
      />
    )
  })
}

function constructFullName(
  firstName?: string | null,
  lastName?: string | null,
) {
  if (firstName && lastName) {
    return firstName + " " + lastName
  }
  return firstName ? firstName : lastName ? lastName : ""
}

function getTopicTags(tags?: string | null) {
  return tags ? tags.split(",").map((a) => slugify(a, "_")) : []
}
