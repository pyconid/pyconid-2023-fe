import type { V2_MetaFunction } from "@remix-run/node"

import { Button, Layout } from "~/components"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PyCon ID 2023 - Call for Proposal" },
    {
      property: "og:image",
      content: "https://vercel-og-image-amber.vercel.app/api/pycon-id-tailwind",
    },
    {
      name: "description",
      content: "Let's talk at PyCon ID 2023. We are open for talks submission.",
    },
  ]
}

export default function Index() {
  return (
    <Layout>
      <div className="flex min-h-[300px] w-full items-center bg-primary-100 lg:min-h-[430px] 2xl:min-h-[550px] lg:px-5">
        <div className="mx-auto my-10 flex w-full max-w-7xl flex-col items-center justify-between md:flex-col 2xl:flex-row lg:flex-row">
          <div className="px-4 w-full lg:space-y-8 sm:px-8">
            <p className="mb-6 text-4xl font-bold md:text-6xl sm:text-5xl">
              Call For Proposals
            </p>
            <p className="text-xl text-primary md:text-4xl lg:text-4xl sm:text-3xl">
              Lets's talk at Pycon ID 2023. We are open for talks submission.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-10 md:mt-28 md:w-auto lg:mt-8 "
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://papercall.io/pyconid2023"
              >
                Submit you proposal here
              </a>
            </Button>



          </div>
          <div className="p-6">
            <img src="cfp_hero.svg" alt="Call For Proposal Hero Illustration" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
