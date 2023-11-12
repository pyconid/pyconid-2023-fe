import { json } from "@remix-run/node"
import type { V2_MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { prisma } from "~/db.server"

import { Layout } from "~/components"
import { SpeakerCard } from "~/components/speakers"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Speakers" }]
}

export async function loader() {
  const speakers = await prisma.speaker.findMany({
    select: {
      id: true,
      title: true,
      talks_type: true,
      user: {
        select: {
          firstName: true,
          lastName: true,
          avatar: true,
        },
      },
    },
  });
  const keynoteTalks = speakers.filter((speaker) => {
    return speaker.talks_type === 'Keynote Talks'
  })
  return json({
    speakers: speakers.filter((speaker => {
      return speaker.talks_type != 'Keynote Talks'
    })), keynoteTalks
  })
}

export default function Route() {
  const { speakers, keynoteTalks } = useLoaderData<typeof loader>()

  return (
    <Layout>
      <div className="pb-10 pt-5 text-center lg:py-20">
        <h1 className="mb-6 font-brand text-5xl font-semibold text-primary lg:text-6xl">
          Speakers
        </h1>
        <p className="mx-auto w-full text-xl tracking-tight lg:w-[600px] lg:text-3xl">
          Meet the pycon speakers who are speaking at this event
        </p>
      </div>
      <h1 className="mb-12 font-brand text-5xl font-semibold text-primary lg:text-6xl text-center">
        Keynote Speakers
      </h1>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mt-2 grid gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {keynoteTalks.map((keynoteTalk, i) => (
            <SpeakerCard key={keynoteTalk.id} firstName={String(keynoteTalk.user?.firstName)} lastName={String(keynoteTalk.user?.lastName)} index={i} avatar={String(keynoteTalk.user?.avatar)}>
              {keynoteTalk.title}
            </SpeakerCard>
          ))}
        </div>
      </div>
      <h1 className="mb-12 font-brand text-5xl font-semibold text-primary lg:text-6xl text-center">
        Speakers
      </h1>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mt-2 grid gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          {speakers.map((speaker, i) => (
            <SpeakerCard key={speaker.id} firstName={String(speaker.user?.firstName)} lastName={String(speaker.user?.lastName)} index={i} avatar={String(speaker.user?.avatar)}>
              {speaker.title}
            </SpeakerCard>
          ))}
        </div>
      </div>
    </Layout>
  )
}
