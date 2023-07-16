import type { V2_MetaFunction } from "@remix-run/node"

import { Layout } from "~/components"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Call For Paper" }]
}

export default function Index() {
  return (
    <Layout>
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
    </Layout>
  )
}
