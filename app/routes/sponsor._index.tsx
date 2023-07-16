import type { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Sponsors" }]
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
    </>
  )
}
