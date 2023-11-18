import { json, type V2_MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { prisma } from "~/db.server"

import { sanitizeSocials } from "~/libs/sanitize-socials"
import { Layout } from "~/components"
import { ChairmanCard } from "~/components/organizer/chairman"
import { CommiteeCard } from "~/components/organizer/commitee"
import { VolunteerCard } from "~/components/organizer/volunteer"

export async function loader() {
  const comitee = await prisma.participantType.findMany({
    where: {
      symbol: {
        in: ["LEAD_ORGANIZER", "COMMITEE", "BINUS_BANDUNG_VOLUNTEER"],
      },
    },
  })
  if (comitee) {
    const organizer = await prisma.user
      .findMany({
        select: {
          id: true,
          firstName: true,
          lastName: true,
          participantType: true,
          twitter: true,
          github: true,
          avatar: true,
          bio: true,
          role: true,
        },
        where: {
          participantTypeId: {
            in: comitee.map((data) => data.id),
          },
        },
      })
      .then((response) =>
        response.map((res) => ({
          ...res,
          ...sanitizeSocials({
            github: res.github,
            twitter: res.twitter,
            facebook: "",
            instagram: "",
            linkedin: "",
            website: "",
          }),
        })),
      )
    const binusVolunteer = organizer.filter((data) => {
      return data.participantType?.symbol === "BINUS_BANDUNG_VOLUNTEER"
    })
    const comiteView = organizer.filter((data) => {
      return data.participantType?.symbol === "COMMITEE"
    })
    const leadOrganizer = organizer.filter((data) => {
      return data.participantType?.symbol === "LEAD_ORGANIZER"
    })
    return json({
      leadOrganizer: leadOrganizer,
      comite: comiteView,
      binusVolunteer: binusVolunteer,
    })
  }

  return json({
    leadOrganizer: [],
    comite: [],
    binusVolunteer: [],
  })
}

export const meta: V2_MetaFunction = () => {
  return [{ title: "Organizer" }]
}
export default function Index() {
  const { leadOrganizer, comite, binusVolunteer } =
    useLoaderData<typeof loader>()

  return (
    <Layout>
      <div className="pb-10 pt-5 text-center font-brand text-primary lg:py-20">
        <h1 className="mb-6  text-5xl font-semibold  lg:text-6xl">Organizer</h1>
        <p className="mx-auto w-full text-xl tracking-tight lg:w-[600px] lg:text-3xl">
          Here are the person who make Pycon ID 2023 possible
        </p>
      </div>
      <div className="mb-12 flex items-end justify-center">
        <h1 className="font-brand text-4xl font-semibold text-primary lg:text-5xl">
          Lead Organizer
        </h1>
        <img src="/yellow-pycon-org.svg" alt="" />
      </div>
      <div className="mx-auto flex max-w-7xl px-4 md:px-6">
        {leadOrganizer.map((data) => {
          return (
            <ChairmanCard
              id="1"
              firstName={data.firstName}
              lastName={String(data.lastName)}
              avatar={data.avatar ?? ""}
              key={data.id}
            >
              <div className="max-w-2xl">
                <p>{data.bio}</p>
                <div className="mt-4 flex justify-center gap-3 lg:justify-start">
                  {data.github ? (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={String(data.github.url)}
                    >
                      <img src="icons/github.svg" alt="Github" />
                    </a>
                  ) : null}
                  {data.twitter ? (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={String(data.twitter.url)}
                    >
                      <img src="icons/x.svg" alt="X" />
                    </a>
                  ) : null}
                </div>
              </div>
            </ChairmanCard>
          )
        })}
      </div>

      <div className="mb-12 flex items-end justify-center">
        <img src="/blue-pycon-org.svg" alt="blue-pycon" />
        <h1 className="font-brand text-4xl font-semibold text-primary lg:text-5xl">
          Commite
        </h1>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 md:px-6 lg:grid-cols-4">
        {comite.map((data, i) => {
          return (
            <CommiteeCard
              id={"1"}
              key={data.id}
              index={i}
              github={data.github}
              twitter={data.twitter}
              avatar={data.avatar ?? ""}
              firstName={data.firstName}
              lastName={String(data.lastName)}
            />
          )
        })}
      </div>
      <div className="mb-16 flex items-end justify-center">
        <h1 className="font-brand text-4xl font-semibold text-primary lg:text-5xl">
          Binus Volunteer
        </h1>
        <img src="/red-pycon-org.svg" alt="" />
      </div>
      <div className="w--full mx-auto mb-16 flex flex-col gap-4 p-10 md:w-fit md:p-0 md:px-6  lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-4 lg:gap-4 lg:px-4">
        {binusVolunteer.map((data, i) => {
          return (
            <VolunteerCard
              key={data.id}
              id="1"
              avatar={String(data.avatar)}
              firstName={data.firstName}
              lastName={String(data.lastName)}
              github={data.github}
              twitter={data.twitter}
            />
          )
        })}
      </div>
    </Layout>
  )
}
