import type { V2_MetaFunction } from "@remix-run/node"
import { Link } from "@remix-run/react"

import { Layout } from "~/components"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PyCon ID 2023" },
    {
      name: "description",
      content: "Python Conference Indonesia 2023 in Bandung.",
    },
  ]
}

export default function Index() {
  return (
    <Layout>
      <div className="w-full bg-blue-100 h-[300px] lg:h-[600px]">
        <section className="container mx-auto px-2 lg:px-0 py-0 font-semibold text-[#42449C]">
          <div className="item-center mt-0 lg:flex">
            <div className="w-full lg:w-1/2 p-5 lg:p-0">
              <div className="lg:mt-24 lg:max-w-2xl">
                <p className="text-sm lg:text-lg font-normal ">PYCON ID 2023</p>
                <h1 className="lg:mt-4 mt-2 lg:text-4xl text-xl font-medium text-black">
                  We are waiting to see you again!
                </h1>
                <h1 className="lg:mt-4 mt-2 space-x-3 text-3xl lg:text-6xl">
                  Nov. 18th - 19th, 2023
                </h1>
                <h1 className="lg:mt-4 mt-2 space-x-3 text-3xl lg:text-6xl">Bandung Indonesia</h1>
                <p className="lg:mt-4 mt-2 mb-8 flex items-center text-xl text-black">
                  <img className="mr-2" src="/Pin_alt_fill.svg" alt="maps" />
                  <span className="font-normal">Venue, TBA</span>
                </p>
                <Link to="/" >
                <span className="w-auto transform rounded-full  bg-[#42449C] px-10 py-3 text-sm uppercase tracking-wider text-white transition-colors duration-300 hover:bg-blue-700 focus:bg-blue-50 focus:outline-none lg:w-auto">
                  Buy Ticket
                </span>
                </Link>
          
              </div>
            </div>
            <div className="ml-24 hidden w-full items-center justify-center lg:mt-0 lg:flex  lg:w-1/2 lg:max-w-2xl">
              <img
                className="h-full w-full lg:max-w-7xl "
                src="/logo-party.png"
                alt="logo-party.svg"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="flex items-center justify-center container h-[300px]  mt-10 lg:h-[350px] flex-col text-center">
        <h1 className="text-4xl lg:text-5xl font-semibold">What is <span className="text-[#42449C]">Pycon ID?</span></h1>
        <p className="text-sm lg:text-xl mt-3 text-gray-500">Python Conference Indonesia or Pycon ID is annual conference where Python enthusiasts shere their</p>
        <p className="text-sm lg:text-xl mt-0 lg:mt-3 text-gray-500">knowledge with the others, especially in Indonesia regional</p>
    </div>
    </Layout>
  )
}
