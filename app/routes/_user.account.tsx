import { json, redirect } from "@remix-run/node"
import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node"
import { parse } from "@conform-to/zod"
import { models } from "~/models"
import { userUpdateSchema } from "~/schemas"
import { authenticator } from "~/services/auth.server"

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

  const {
    value: {
      industryCategoryId,
      jobCategoryId,
      compliance,
      publicFields,
      ...user
    },
  } = submission

  await models.user.mutation.update({
    user,
    industryCategoryId,
    jobCategoryId,
    compliance,
    publicFields,
  })

  return { ...submission, success: true }
}

export async function loader({ request }: LoaderArgs) {
  const userSession = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  })

  const userProfile = await models.user.query.getByToken({
    token: userSession.token,
  })

  if (!userProfile) return redirect("/logout")

  const [industryCategories, jobCategories, participantTypes] =
    await Promise.all([
      models.industryCategory.query.getAll(),
      models.jobCategory.query.getAll(),
      models.participantType.query.getAll(),
    ])

  return json({
    industryCategories,
    jobCategories,
    participantTypes,
    userProfile,
  })
}

export default function Route() {
  return (
    <Layout>
      <div className="mx-auto mb-8 mt-16 w-full max-w-4xl px-6">
        <h1 className="text-4xl font-bold">Account Dashboard</h1>
      </div>
      <AccountForm />
    </Layout>
  )
}
