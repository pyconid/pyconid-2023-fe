import { useId } from "react"
import { json, redirect } from "@remix-run/node"
import type { ActionArgs, V2_MetaFunction } from "@remix-run/node"
import { Form, Link, useActionData, useNavigation } from "@remix-run/react"
import { useForm } from "@conform-to/react"
import { getFieldsetConstraint, parse } from "@conform-to/zod"
import { userSignupSchema } from "~/schemas"
import { siteService } from "~/services/site-verify.server"
import { userService } from "~/services/user.server"

import { Button, Layout } from "~/components"
import { Captcha, TextInput } from "~/components/shared"
import { FormFieldSet } from "~/components/ui/form"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Register - PyconID 2023" }]
}

export async function action({ request }: ActionArgs) {
  const clonedRequest = request.clone()
  const formData = await clonedRequest.formData()
  const submission = parse(formData, { schema: userSignupSchema })

  if (!submission.value || submission.intent !== "submit") {
    return json(submission)
  }

  const siteVerifyResponse = await siteService.verify(submission.value.captcha)

  if (siteVerifyResponse.error) {
    const error: string = siteVerifyResponse.error.data
    return json({
      ...submission,
      error: {
        captcha: [error],
      },
    })
  }

  const result = await userService.register(submission.value)

  if (result.error) {
    const error: Record<string, any> = result.error.data
    return json({ ...submission, error })
  }

  return redirect("/success-register")
}
export default function Route() {
  const id = useId()
  const lastSubmission = useActionData<typeof action>()
  const navigation = useNavigation()

  const isSubmitting = navigation.state !== "idle"

  const [form, { firstName, lastName, email, password, captcha }] = useForm({
    id,
    lastSubmission,
    shouldValidate: "onBlur",
    constraint: getFieldsetConstraint(userSignupSchema),
    onValidate({ formData }) {
      return parse(formData, { schema: userSignupSchema })
    },
  })

  return (
    <Layout>
      <div className="mx-auto mb-20 mt-10 w-full max-w-7xl px-6 md:mt-16">
        <div className="flex items-center justify-between gap-12">
          <div className="w-full">
            <h1 className="font-brand text-4xl font-bold text-primary md:text-6xl">
              Create an account
            </h1>
            <Form method="POST" {...form.props}>
              <FormFieldSet borderPosition="bottom">
                <div className="flex flex-col gap-4 md:gap-6">
                  <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                    <TextInput
                      field={firstName}
                      label="First Name"
                      placeholder="Enter your first name"
                    />
                    <TextInput
                      field={lastName}
                      label="Last Name"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <TextInput
                    field={email}
                    type="email"
                    label="Email"
                    placeholder="Enter your email address"
                  />
                  <TextInput
                    field={password}
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <Captcha field={captcha} />
                  <Button
                    type="submit"
                    className="mt-4 w-full md:ml-auto md:w-80"
                    size="lg"
                  >
                    {isSubmitting ? "Registering..." : "Register"}
                  </Button>
                </div>
              </FormFieldSet>
              <p className="mt-10 text-base font-semibold md:text-xl">
                Already have an account?{" "}
                <Link to="/login" className="text-primary underline">
                  Login Here
                </Link>{" "}
              </p>
            </Form>
          </div>
          <img
            className="hidden md:block"
            src="pycon-auth.svg"
            alt="Signin Illustration"
          />
        </div>
      </div>
    </Layout>
  )
}
