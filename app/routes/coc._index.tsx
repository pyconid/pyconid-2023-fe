import type { V2_MetaFunction } from "@remix-run/node"

import { Layout } from "~/components"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Code of Conduct" }]
}

export default function Index() {
  return (
    <Layout>
      <article className="prose prose-slate mx-auto max-w-3xl py-10 dark:prose-invert lg:prose-xl">
        <h2>Code of Conduct</h2>
        <p>
          A code of conduct is a set of rules outlining the norms, rules, and
          responsibilities of, and or proper practices for an individual. By
          attending PyCon ID 2021, you agree with the Code of Conduct.
        </p>
        <br />
        <h3 className="text-2xl font-semibold text-gray-800">
          The Short Version
        </h3>
        <ul>
          <li>
            PyCon ID is a community conference intended for collaboration in the
            developer community.
          </li>
          <li>
            We value the participation of each member of the Python community
            and want all attendees to have an enjoyable and fulfilling
            experience. Accordingly, all attendees are expected to show respect
            and courtesy to other attendees throughout the conference and at all
            conference events, whether officially sponsored by Python ID or not.
          </li>
          <li>
            To make clear what is expected, all delegates/attendees, speakers,
            exhibitors, organizers and volunteers at any PyCon event are
            required to conform to the following Code of Conduct. Organizers
            will enforce this code throughout the event.
          </li>
        </ul>
        <br />
        <h3 className="text-2xl font-semibold text-gray-800">
          The Long Version
        </h3>
        <ul>
          <li>
            Harassment includes offensive verbal comments related to gender,
            gender identity and expression, sexual orientation, disability,
            physical appearance, body size, race, religion, status, sexual
            images in public spaces, deliberate intimidation, stalking,
            following, harassing photography or recording, sustained disruption
            of talks or other events, inappropriate physical contact, and
            unwelcome sexual attention.
          </li>
          <li>
            Spamming message such as making promotion, giving rude comments, or
            anything else that can cause any uncomfortable feeling to other
            participants is also prohibited. Please introduce yourself and be
            kind when trying to have conversation with other participants. If
            you are not one of our sponsor member, make sure you have their
            consent before giving promotion or something like that.
          </li>
          <li>
            Participants who are asked to stop any harassing behavior are
            expected to comply immediately.
          </li>
          <li>
            Be careful in the words that you choose. Remember that sexist,
            racist, and other exclusionary jokes can be offensive to those
            around you. Excessive swearing and offensive jokes are not
            appropriate for PyCon.
          </li>
          <li>
            Exhibitors in the expo hall, sponsor or vendor booths, or similar
            activities are also subject to the anti-harassment policy. In
            particular, exhibitors should not use sexualized images, activities,
            or other material. Booth staff (including volunteers) should not use
            sexualized clothing/uniforms/costumes, or otherwise create a
            sexualized environment.
          </li>
          <li>
            If a participant engages in harassing behavior, the conference
            organizers may take any action they deem appropriate, including
            warning the offender or expulsion from the conference with no
            refund. If you are being harassed, notice that someone else is being
            harassed, or have any other concerns, please contact a member of
            conference staff immediately.
          </li>
          <li>
            Conference staff can be identified by t-shirts/special badges/head
            sets.
          </li>
          <li>
            Conference staff will be happy to help participants contact
            hotel/venue security or local law enforcement, provide escorts, or
            otherwise assist those experiencing harassment to feel safe for the
            duration of the conference. We value your attendance.
          </li>
          <li>
            We expect participants to follow these rules at all conference
            venues and conference-related social events.
          </li>
        </ul>
        <br />
        <p className="text-gray-800">
          This Code of Conduct is based on the PyCon US 2015 CoC, and is
          licensed under a Creative Commons Attribution 3.0 Unported License.
        </p>
      </article>
    </Layout>
  )
}
