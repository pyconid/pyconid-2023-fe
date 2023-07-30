import type { V2_MetaFunction } from "@remix-run/node"

import { cn } from "~/libs"
import { Button, Layout } from "~/components"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PyCon ID 2023" },
    {
      property: "og:image",
      content: "https://vercel-og-image-amber.vercel.app/api/pycon-id-tailwind",
    },
    {
      name: "description",
      content:
        "Python Conference Indonesia is an annual conference where Python enthusiasts shere their knowledge with the others, especially in Indonesia regional.",
    },
  ]
}

const Heading = ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className="mt-2 space-x-3 text-3xl font-extrabold md:text-2xl lg:mt-4 lg:text-4xl xl:text-4xl 2xl:text-6xl">
    {children}
  </h1>
)

export default function Index() {
  return (
    <Layout>
      <div className="flex w-full items-center bg-primary-100 pb-12 pt-6 lg:min-h-[600px] lg:pt-0">
        <section className="mx-auto flex max-w-screen-2xl flex-col justify-between px-4 font-semibold text-primary md:flex-row md:items-center lg:px-6">
          <div className="w-full md:w-1/2">
            <div className="mb-4 lg:mb-16 flex flex-col gap-2">
              <p className="text-lg font-normal lg:text-2xl">PYCON ID 2023</p>
              <p className="text-xl font-normal text-black lg:mt-4 lg:text-2xl xl:text-4xl">
                We are waiting to see you again!
              </p>
              <Heading>18th - 19th Nov, 2023</Heading>
              <Heading>Bandung, Indonesia</Heading>
              <p className="flex items-center text-xl font-normal text-black md:text-xl lg:mt-4 lg:text-3xl">
                <img
                  className="mr-2 w-[30px] sm:w-[20px] md:w-[20px] lg:w-[30px]"
                  src="/Pin_alt_fill.svg"
                  alt="maps"
                />
                <span>Venue, TBA</span>
              </p>
            </div>
            <Button className="font-bold" size="lg" disabled>
              Buy Ticket (Soon)
            </Button>
          </div>
          <div className="w-full self-center md:w-1/2 xl:ml-24">
            <img src="/logo-party.png" alt="logo-party.png" />
          </div>
        </section>
      </div>
      <article
        className={cn(
          "mx-auto mb-6 mt-16 max-w-4xl px-4 lg:mb-12 lg:mt-32",
          "prose lg:prose-xl",
          "prose-h1:text-center lg:prose-h1:text-6xl",
        )}
      >
        <h1>
          What is <span className="text-primary">Pycon ID?</span>
        </h1>
        <p className="md:text-center">
          Python Conference Indonesia or PyCon ID is annual conference where
          Python enthusiasts share their knowledge with the others, especially
          in Indonesia regional.
        </p>
      </article>
    </Layout>
  )
}
