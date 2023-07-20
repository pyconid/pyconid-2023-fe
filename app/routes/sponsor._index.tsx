import type { V2_MetaFunction } from "@remix-run/node"

import { cn } from "~/libs"
import { Button, Layout } from "~/components"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Sponsor" }]
}

export default function Index() {
  return (
    <Layout>
      <div className="flex h-full min-h-[300px] w-full items-center justify-center bg-primary-100 md:h-[600px]">
        <div className="mx-auto my-10 max-w-6xl px-4 text-center">
          <p className="mb-1 text-base font-semibold md:text-4xl">
            We are open for PyCon ID 2023 Sponsorship
          </p>
          <p className="text-3xl font-semibold text-primary md:text-6xl">
            Look at our Sponsorship Propectus
          </p>
          <Button asChild size="lg" className="mt-10 md:mt-28">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1Xcn9GyAFnlVk7Yhxu1Xx77V2T2u4LLMj/view?usp=sharing"
            >
              Sponsorship Prospectus
            </a>
          </Button>
        </div>
      </div>
      <article
        className={cn(
          "prose prose-lg mx-auto mt-20 w-full max-w-6xl px-4",
          "prose prose-h3:mb-16 prose-h3:text-center prose-h3:text-3xl md:prose-h3:text-4xl",
          "prose prose-h4:mb-5 prose-h4:mt-12 prose-h4:text-2xl md:prose-h4:text-3xl",
          "prose-p:text-base prose-p:leading-normal prose-p:tracking-wide md:prose-p:text-xl",
          "md:prose-lg",
        )}
      >
        <h3>
          Sponsorship <span className="text-primary">Prospect</span> and{" "}
          <span className="text-primary">Benefit</span>
        </h3>
        <p>
          What better place to find Python developers than a gathering of 250 of
          them? If you’re hiring, PyCon is the place to be. The conference has
          long been a great way to find the talented developers so many
          companies are searching for, so much that we added on-site Job Fair to
          make it even easier.
        </p>
        <h4>Recruiting</h4>
        <p>
          What better place to find Python developers than a gathering of 250 of
          them? If you’re hiring, PyCon is the place to be. The conference has
          long been a great way to find the talented developers so many
          companies are searching for, so much that we added on-site Job Fair to
          make it even easier.
        </p>
        <h4>Branding</h4>
        <p>
          It is an opportunity to appeal that your company is
          technology-oriented organization. The posting of the logo will be
          recorded by movie and will be broadcasted on the web-media afterwards,
          leading to branding of the company and products. Continuous exposure
          of names and logos of companies, products, and services can generate
          many merits even after this conference, such as appeal to
          participants, topicality and exciting experience.
        </p>
        <h4>Marketing</h4>
        <p>
          It's a great chance to advertise your products and introduce detailed
          usages directly to Python engineers and Python users. Specifically, it
          is possible to have more interaction to participants by having a booth
          and directly explaining, having a talk session, and by distributing
          leaflets and goods.
        </p>
        <h4>Audience</h4>
        <p>
          PyCon’s ever diversifying audience puts your organization in front of
          a wide variety of people. From beginners to experts, PyCon draws
          attendees from those with zero experience all the way through a
          significant group of the contributors to the language itself. We also
          see people of all levels from many industries. From developers to
          managers, executives to owners, startups to big businesses, PyCon
          draws attendees from all sorts of places. Some organizations send
          entire teams, and in the case of many startups, the entire company may
          be there.
        </p>
        <h4>CSR</h4>
        <p>
          Sponsoring can show your gratitude for Python community. It's one of
          CSR activity that supports technology companies and engineers
          community.
        </p>
        <h4>Flexibility</h4>
        <p>
          If you want to help PyCon, we want to help you construct a sponsorship
          package that fits your needs. If a small booth would work better than
          a large one, perhaps we can swap it in exchange for another benefit
          that works better for your organization. For some organizations, a
          booth is not practical at all, but adding another conference pass may
          work better.
        </p>
      </article>
    </Layout>
  )
}
