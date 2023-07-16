import type { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Call For Paper" }]
}

export default function Index() {
  return (
    <>
      <nav className="relative mx-auto max-w-screen-xl items-center px-4 pt-5 sm:px-8 md:flex md:space-x-6">
        <div className="flex justify-between">
          <a href="../">
            <img src="/logo.png" width={120} height={50} alt="Float UI logo" />
          </a>
          <button className="text-gray-500 outline-none md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`absolute inset-x-0 mt-12 flex-1 justify-between border-b bg-white px-4 md:static md:mt-0 md:flex md:border-none md:text-sm md:font-medium`}
        >
          <div className="items-center space-y-5 md:ml-12 md:flex md:space-x-6 md:space-y-0">
            <li className="text-gray-500 hover:text-indigo-600" key="a">
              <a href="/code-of-conduct">Code of Conduct</a>
            </li>
            <li className="text-gray-500 hover:text-indigo-600" key="b">
              <a href="/cfp">Call for Paper</a>
            </li>
            <li className="text-gray-500 hover:text-indigo-600" key="c">
              <a href="/sponsors">Sponsors</a>
            </li>
          </div>
        </ul>
      </nav>
      <section className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <figure>
              <p className="text-xl font-semibold text-gray-800 sm:text-2xl">
                Call For Paper
              </p>
            </figure>
            <p>
              Let's talk at PyCon ID 2023 <br />
              We are open for talks submission <br />
              Submit your proposal{" "}
              <a
                href="https://www.papercall.io/pyconid2023"
                className="text-blue-400"
              >
                here
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
