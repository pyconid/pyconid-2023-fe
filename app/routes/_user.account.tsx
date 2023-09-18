import { json } from "@remix-run/node"
import type { ActionArgs, V2_MetaFunction } from "@remix-run/node"
import { parse } from "@conform-to/zod"
import { industryCategory, jobCategory, participantType } from "~/models"
import { userUpdateSchema } from "~/schemas"

import { Layout } from "~/components"
import { AccountForm } from "~/components/user"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Account" }]
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData()
  const submission = parse(formData, { schema: userUpdateSchema })

  if (!submission.value || submission.intent !== "submit") {
    return submission
  }
}

export async function loader() {
  const [industryCategories, jobCategories, participantTypes] =
    await Promise.all([
      industryCategory.query.getAll(),
      jobCategory.query.getAll(),
      participantType.query.getAll(),
    ])

  return json({ industryCategories, jobCategories, participantTypes })
}

export default function Route() {
  return (
    <Layout>
      <div className="mx-auto mb-8 mt-16 w-full max-w-4xl px-6">
        <h1 className="text-5xl font-bold">Account Dashboard</h1>
        <AccountForm />
      </div>
    </Layout>
  )
}
