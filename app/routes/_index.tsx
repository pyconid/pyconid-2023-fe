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
  <h1
    className={cn(
      "mt-2 font-brand text-2xl font-bold text-primary md:mt-0",
      "md:text-3xl",
      "lg:mt-4 lg:text-4xl",
      "xl:text-5xl",
      "2xl:text-6xl",
    )}
  >
    {children}
  </h1>
)

export default function Index() {
  return (
    <Layout>
      <div className="flex w-full items-center bg-primary-100 pb-12 pt-6 lg:min-h-[600px] lg:pt-0">
        <section className="mx-auto flex w-full max-w-screen-2xl flex-col justify-between gap-4 px-8 sm:flex-row sm:items-center lg:w-auto lg:gap-0 lg:px-12">
          <div className="w-full md:w-1/2">
            <div className="mb-8 flex flex-col gap-1 md:gap-3 lg:mb-16">
              <p className="text-sm text-primary md:text-lg xl:text-xl">
                PYCON ID 2023
              </p>
              <p className="text-base md:text-xl xl:text-3xl">
                We are waiting to see you again!
              </p>
              <Heading>Nov. 18th - 19th, 2023</Heading>
              <Heading>Bandung, Indonesia</Heading>
              <p className="sm:text-md mt-3 flex items-center text-sm font-normal text-black md:mt-5 md:text-base lg:text-xl xl:text-2xl">
                <img
                  className="mr-2 w-[20px] sm:w-[24px] xl:w-[32px]"
                  src="/Pin_alt_fill.svg"
                  alt="maps"
                />
                <span>Venue, <a href="https://goo.gl/maps/ZdesfzswxdeJfiSm7" target="_blank">Binus @Bandung</a></span>
              </p>
            </div>
            <Button className="font-bold" size="lg" disabled>
              Buy Ticket (Soon)
            </Button>
          </div>
          <div className="ml-0 w-full self-start md:w-1/2 xl:ml-12">
            <img src="/logo-party.png" alt="logo-party.png" />
          </div>
        </section>
      </div>
      <article
        className={cn(
          "mx-auto mb-6 mt-16 max-w-4xl px-8 lg:mb-12 lg:mt-32",
          "prose lg:prose-xl",
          "prose-h1:text-center prose-h1:font-brand prose-h1:text-4xl lg:prose-h1:text-5xl",
        )}
      >
        <h1>
          What is <span className="text-primary">Pycon ID?</span>
        </h1>
        <p className="text-center">
          Python Conference Indonesia or PyCon ID is annual conference where
          Python enthusiasts share their knowledge with the others, especially
          in Indonesia regional.
        </p>
      </article>
    </Layout>
  )
}
