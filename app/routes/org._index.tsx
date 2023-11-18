import { json, type V2_MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import { Layout } from "~/components"
import { ChairmanCard } from "~/components/organizer/chairman"
import { CommiteeCard } from "~/components/organizer/commitee"
import { VolunteerCard } from "~/components/organizer/volunteer"
import { prisma } from "~/db.server"


export async function loader() {
  const comitee = await prisma.participantType.findMany({
    where: {
      symbol: {
        in: ['LEAD_ORGANIZER', 'COMMITEE', 'BINUS_BANDUNG_VOLUNTEER']
      }
    }
  })
  if (comitee) {
    const organizer = await prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        participantType: true,
        twitter: true,
        github: true,
      }, where: {
        participantTypeId: {

          in: comitee.map(data => data.id)
        }
      }
    });
    const leadOrganizer = organizer.filter((data) => {
      return data.participantType?.symbol === "LEAD_ORGANIZER"
    })
    return json({
      leadOrganizer: leadOrganizer,
      organizer: organizer
    })
  }

  return json({
    leadOrganizer: [],
    organizer: []
  })
}

export const meta: V2_MetaFunction = () => {
  return [{ title: "Organizer" }]
}
export default function Index() {
  const { organizer, leadOrganizer } = useLoaderData<typeof loader>()
  console.log(leadOrganizer)


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
            <ChairmanCard id="1" firstName="Dima" lastName="Maharika D">
              <div className="max-w-2xl">
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. Loves rabbits, cars,
                  drones, and gadgets such as Raspberry Pi as well. Currently taking
                  special.
                </p>
                <div className="mt-4 flex justify-center gap-3 lg:justify-start">
                  <img src="icons/github.svg" />
                  <img src="icons/x.svg" />
                </div>
              </div>
            </ChairmanCard>
          )
        })}

      </div>

      <div className="mb-12 flex items-end justify-center">
        <img src="/blue-pycon-org.svg" />
        <h1 className="font-brand text-4xl font-semibold text-primary lg:text-5xl">
          Commite
        </h1>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 md:px-6 lg:grid-cols-4">
        <CommiteeCard
          id="1"
          firstName="Kim"
          lastName="Mingyu"
          role="web team"
        />
      </div>
      <div className="mb-12 flex items-end justify-center">
        <h1 className="font-brand text-4xl font-semibold text-primary lg:text-5xl">
          Binus Volunteer
        </h1>
        <img src="/red-pycon-org.svg" alt="" />
      </div>
      <div className="mx-auto mb-16 flex w-fit flex-col gap-4 md:px-6  lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-4 lg:gap-4 lg:px-4">
        <VolunteerCard id="1" firstName="Rudy" lastName="Tabutty" />
      </div>
    </Layout>
  )
}
