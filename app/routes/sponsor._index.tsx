import type { V2_MetaFunction } from "@remix-run/node"

import { cn } from "~/libs"
import { Button, Layout } from "~/components"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Sponsor" }]
}

const colorMap = {
  red: {
    card: "border-primary-red",
    shadow: "bg-primary-red",
  },
  purple: {
    card: "border-primary-purple",
    shadow: "bg-primary-purple",
  },
  black: {
    card: "border-primary-black",
    shadow: "bg-primary-black",
  },
  orange: {
    card: "border-primary-orange",
    shadow: "bg-primary-orange",
  },
} as const

const SPONSORSHIP_BORDER_COLORS = Object.keys(colorMap) as Array<
  keyof typeof colorMap
>

const benefits = [
  {
    title: "Recruiting",
    description:
      "What better place to find Python developers than a gathering of 250 of them? If you’re hiring, PyCon is the place to be. The conference has long been a great way to find the talented developers so many companies are searching for, so much that we added on-site Job Fair to make it even easier.",
  },
  {
    title: "Branding",
    description:
      "It is an opportunity to appeal that your company is technology-oriented organization. The posting of the logo will be recorded by movie and will be broadcasted on the web-media afterwards, leading to branding of the company and products. Continuous exposure of names and logos of companies, products, and services can generate many merits even after this conference, such as appeal to participants, topicality and exciting experience.",
  },
  {
    title: "Marketing",
    description:
      "It's a great chance to advertise your products and introduce detailed usages directly to Python engineers and Python users. Specifically, it is possible to have more interaction to participants by having a booth and directly explaining, having a talk session, and by distributing leaflets and goods.",
  },
  {
    title: "Audience",
    description:
      "PyCon’s ever diversifying audience puts your organization in front of a wide variety of people. From beginners to experts, PyCon draws attendees from those with zero experience all the way through a significant group of the contributors to the language itself. We also see people of all levels from many industries. From developers to managers, executives to owners, startups to big businesses, PyCon draws attendees from all sorts of places. Some organizations send entire teams, and in the case of many startups, the entire company may be there.",
  },
]

type SponsorshipCardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string
  color?: keyof typeof colorMap
}

function SponsorshipCard({
  title,
  color = "red",
  children,
  className,
}: SponsorshipCardProps) {
  return (
    <div className="relative">
      <div
        className={cn(
          "relative -z-10 h-full rounded-xl border-2 bg-white p-6",
          colorMap[color].card,
          className,
        )}
      >
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
      <div
        className={cn(
          "absolute -left-2 top-2 -z-20 h-full w-full rounded-xl",
          colorMap[color].shadow,
        )}
      />
    </div>
  )
}

export default function Index() {
  return (
    <Layout>
      <div className="flex min-h-[300px] w-full items-center bg-primary-100 md:h-[600px]">
        <div className="mx-auto my-10 flex w-full max-w-7xl items-center justify-between">
          <div className="px-4">
            <p className="mb-6 text-4xl md:text-6xl">
              We are open for
              <span className="mt-3 block font-bold">
                PyCon ID 2023 Sponsorship
              </span>
            </p>
            <p className="text-xl text-primary md:text-4xl">
              Look at our Sponsorship Propectus
            </p>
            <Button
              asChild
              size="lg"
              className="mt-10 w-full md:mt-28 md:w-auto"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1Xcn9GyAFnlVk7Yhxu1Xx77V2T2u4LLMj/view?usp=sharing"
              >
                Sponsorship Prospectus
              </a>
            </Button>
          </div>
          <div className="hidden md:block">
            <img
              src="sponsorship_hero.svg"
              alt="Sponsorship Hero Illustration"
            />
          </div>
        </div>
      </div>
      <article
        className={cn(
          "prose prose-lg mx-auto mt-20 w-full max-w-7xl px-6 md:px-4",
          "prose-h3:mb-16 prose-h3:text-center prose-h3:text-4xl prose-h3:font-normal md:prose-h3:text-5xl md:prose-h3:leading-normal",
          "prose-h4:mb-5 prose-h4:mt-0 prose-h4:text-2xl md:prose-h4:text-3xl",
          "prose-p:text-justify prose-p:text-base prose-p:leading-normal prose-p:tracking-wide md:prose-p:text-base",
          "md:prose-lg",
        )}
      >
        <h3>
          Sponsorship <br /> <span className="text-primary">Prospect</span> and{" "}
          <span className="text-primary">Benefit</span>
        </h3>
        <p className="mx-auto max-w-2xl">
          What better place to find Python developers than a gathering of 250 of
          them? If you’re hiring, PyCon is the place to be. The conference has
          long been a great way to find the talented developers so many
          companies are searching for, so much that we added on-site Job Fair to
          make it even easier.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((benefit, i) => (
            <SponsorshipCard
              key={`benefit-${i}`}
              title={benefit.title}
              color={
                SPONSORSHIP_BORDER_COLORS[i % SPONSORSHIP_BORDER_COLORS.length]
              }
            >
              {benefit.description}
            </SponsorshipCard>
          ))}
        </div>
      </article>
    </Layout>
  )
}
