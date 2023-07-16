import type { V2_MetaFunction } from "@remix-run/node"

import { Button, Layout } from "~/components"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Call For Paper" }]
}

export default function Index() {
  return (
    <Layout>
      <article className="prose prose-slate mx-auto max-w-3xl py-10 dark:prose-invert lg:prose-xl">
        <h2>Call for Proposals</h2>
        <p>Let's talk at PyCon ID 2023. We are open for talks submission.</p>
        <Button asChild>
          <a href="https://papercall.io/pyconid2023">
            Submit your proposal here
          </a>
        </Button>
      </article>
    </Layout>
  )
}
