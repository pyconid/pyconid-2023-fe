import { V2_MetaFunction } from "@remix-run/node"
import { Link } from "@remix-run/react"

import { Layout } from "~/components"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PyCon ID 2023" },
    {
      property: "og:image",
      content: "https://vercel-og-image-amber.vercel.app/api/pycon-id-tailwind"
    },
    {
      name: "description",
      content: "Python Conference Indonesia is an annual conference where Python enthusiasts shere their knowledge with the others, especially in Indonesia regional.",
    },
  ]
}

export default function Index() {
  return (
    <Layout>
      <div className="h-full w-full bg-primary-100 lg:h-[600px]">
        <section className="container mx-auto px-2 pb-4 font-semibold text-primary lg:px-0 lg:py-0">
          <div className="item-center mt-0 sm:flex sm:px-10 lg:flex">
            <div className="w-full p-5 lg:w-1/2 lg:p-0">
              <div className="lg:mt-24 lg:max-w-2xl lg:pl-10 xl:pl-0">
                <p className="text-sm font-normal sm:text-lg md:text-xs lg:text-lg">
                  PYCON ID 2023
                </p>
                <h1 className="mt-2 text-xl font-medium text-black sm:text-4xl md:text-xl lg:mt-4 lg:text-3xl xl:text-4xl ">
                  We are waiting to see you again!
                </h1>
                <h1 className="mt-2 space-x-3 text-3xl sm:text-4xl md:text-2xl lg:mt-4 lg:text-4xl xl:text-6xl">
                  Nov. 18th - 19th, 2023
                </h1>
                <h1 className="mt-2 space-x-3 text-3xl sm:text-4xl md:text-2xl lg:mt-4 lg:text-4xl xl:text-6xl">
                  Bandung Indonesia
                </h1>
                <p className="mb-8 mt-2 flex h-[30px] items-center text-xl text-black sm:text-sm md:text-sm lg:mt-4">
                  <img
                    className="mr-2 w-[30px] sm:w-[20px] md:w-[20px]"
                    src="/Pin_alt_fill.svg"
                    alt="maps"
                  />
                  <span className="font-normal  2xl:text-2xl">Venue, TBA</span>
                </p>
                <Link to="/">
                  <span className=" z-10 w-auto transform cursor-not-allowed rounded-full bg-cyan-500 px-10 py-3 text-sm uppercase  tracking-wider text-white transition-colors duration-300 focus:bg-blue-50 focus:outline-none sm:text-xs md:text-xs lg:w-auto lg:text-sm  xl:text-sm">
                    Buy Ticket{" "}
                    <span className="text-sm sm:text-xs md:text-xs lg:text-sm xl:text-sm">
                      (soon)
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="ml-24 hidden h-[650px] w-full items-center justify-center sm:hidden sm:h-[300px] md:flex lg:mt-0 lg:flex lg:w-1/2 lg:max-w-2xl ">
              <img
                src="/logo-party.png"
                className=" sm:w-[350px] lg:my-auto lg:w-[650px]"
                alt="logo-party.png"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="container mt-10 flex h-[300px] flex-col  items-center justify-center text-center lg:h-[350px]">
        <h1 className="text-4xl font-semibold lg:text-5xl">
          What is <span className="text-primary">Pycon ID?</span>
        </h1>
        <p className="mt-3 text-sm text-gray-500 lg:text-xl">
          Python Conference Indonesia or Pycon ID is annual conference where
          Python enthusiasts shere their
        </p>
        <p className="mt-0 text-sm text-gray-500 lg:mt-3 lg:text-xl">
          knowledge with the others, especially in Indonesia regional
        </p>
      </div>
    </Layout>
  )
}
