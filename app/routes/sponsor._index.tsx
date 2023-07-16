import type { V2_MetaFunction } from "@remix-run/node"

import { Layout } from "~/components"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Sponsors" }]
}

export default function Index() {
  return (
    <Layout>
      <section className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <figure>
              <h2 className="text-4xl font-semibold text-gray-800">Sponsor</h2>
              <p className="text-gray-800">
                We are open for PyCon ID 2023 Sponsorship Look at our{" "}
                <a
                  className="text-blue-400"
                  href="https://drive.google.com/file/d/1Xcn9GyAFnlVk7Yhxu1Xx77V2T2u4LLMj/view?usp=sharing"
                >
                  Sponsorship Prospectus
                </a>
              </p>
              <br />
              <h3 className="text-2xl font-semibold text-gray-800">
                Sponsorship Prospect and Benefits
              </h3>
              <p>
                What better place to find Python developers than a gathering of
                250 of them? If you’re hiring, PyCon is the place to be. The
                conference has long been a great way to find the talented
                developers so many companies are searching for, so much that we
                added on-site Job Fair to make it even easier.
              </p>
              <ul>
                <li>
                  Branding, it is an opportunity to appeal that your company is
                  technology-oriented organization. The posting of the logo will
                  be recorded by movie and will be broadcasted on the web-media
                  afterwards, leading to branding of the company and products.
                  Continuous exposure of names and logos of companies, products,
                  and services can generate many merits even after this
                  conference, such as appeal to participants, topicality and
                  exciting experience.
                </li>
                <li>
                  Marketing, it's a great chance to advertise your products and
                  introduce detailed usages directly to Python engineers and
                  Python users. Specifically, it is possible to have more
                  interaction to participants by having a booth and directly
                  explaining, having a talk session, and by distributing
                  leaflets and goods.
                </li>
                <li>
                  Audience, PyCon's ever diversifying audience puts your
                  organization in front of a wide variety of people. From
                  beginners to experts, PyCon draws attendees from those with
                  zero experience all the way through a significant group of the
                  contributors to the language itself. We also see people of all
                  levels from many industries. From developers to managers,
                  executives to owners, startups to big businesses, PyCon draws
                  attendees from all sorts of places. Some organizations send
                  entire teams, and in the case of many startups, the entire
                  company may be there.
                </li>
                <li>
                  CSR, sponsoring can show your gratitude for Python community.
                  It's one of CSR activity that supports technology companies
                  and engineers community.
                </li>
                <li>
                  Flexibility, if you want to help PyCon, we want to help you
                  construct a sponsorship package that fits your needs. If a
                  small booth would work better than a large one, perhaps we can
                  swap it in exchange for another benefit that works better for
                  your organization. For some organizations, a booth is not
                  practical at all, but adding another conference pass may work
                  better.
                </li>
              </ul>
            </figure>
          </div>
        </div>
      </section>
    </Layout>
  )
}
