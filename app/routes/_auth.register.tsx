import { useId } from "react"
import { json, type ActionArgs } from "@remix-run/node"
import { Form, Link, useActionData, useNavigation } from "@remix-run/react"
import { useForm } from "@conform-to/react"
import { getFieldsetConstraint, parse } from "@conform-to/zod"
import { userSignupSchema } from "~/schemas"
import { userService } from "~/services/user.server"

import { Button, Layout } from "~/components"
import { TextInput } from "~/components/shared"
import { FormFieldSet } from "~/components/ui/form"

export async function action({ request }: ActionArgs) {
  const clonedRequest = request.clone()
  const formData = await clonedRequest.formData()
  const submission = parse(formData, { schema: userSignupSchema })

  if (!submission.value || submission.intent !== "submit") {
    return json(submission)
  }

  const result = await userService.register(submission.value)

  if (result.error) {
    const error: Record<string, any> = result.error.data
    return json({ ...submission, error })
  }

  return json(submission)
}
export default function Route() {
  const id = useId()
  const lastSubmission = useActionData<typeof action>()
  const navigation = useNavigation()

  const isSubmitting = navigation.state === "submitting"

  const [form, { firstName, lastName, email, password }] = useForm({
    id,
    lastSubmission,
    shouldValidate: "onInput",
    constraint: getFieldsetConstraint(userSignupSchema),
    onValidate({ formData }) {
      return parse(formData, { schema: userSignupSchema })
    },
  })

  return (
    <Layout>
      <div className="mx-auto mb-20 mt-16 w-full max-w-7xl px-6">
        <div className="flex items-center justify-between gap-12">
          <div className="w-full">
            <h1 className="font-brand text-6xl font-bold text-primary">
              Create an account
            </h1>
            <Form method="POST" {...form.props}>
              <FormFieldSet borderPosition="bottom">
                <div className="flex flex-col gap-6">
                  <div className="flex gap-6">
                    <TextInput
                      classNames={{ input: "rounded-xl" }}
                      field={firstName}
                      label="First Name"
                      disabled={isSubmitting}
                    />
                    <TextInput
                      classNames={{ input: "rounded-xl" }}
                      field={lastName}
                      label="Last Name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <TextInput
                    classNames={{ input: "rounded-xl" }}
                    field={email}
                    type="email"
                    label="Email"
                    disabled={isSubmitting}
                  />
                  <TextInput
                    classNames={{ input: "rounded-xl" }}
                    field={password}
                    label="Password"
                    type="password"
                    disabled={isSubmitting}
                  />
                  <Button type="submit" className="ml-auto w-80" size="lg">
                    {isSubmitting ? "Registering..." : "Register"}
                  </Button>
                </div>
              </FormFieldSet>
              <p className="mt-10 text-xl font-semibold">
                Already have an account?{" "}
                <Link to="/login" className="text-primary underline">
                  Login Here
                </Link>{" "}
              </p>
            </Form>
          </div>
          <img src="pycon-auth.svg" alt="Signin Illustration" />
        </div>
      </div>
    </Layout>
  )
}
