import { useId } from "react"
import { json, type ActionArgs, type V2_MetaFunction } from "@remix-run/node"
import { Form, useActionData, useNavigation } from "@remix-run/react"
import { useForm } from "@conform-to/react"
import { getFieldsetConstraint, parse } from "@conform-to/zod"
import { userForgotPasswordSchema } from "~/schemas"
import { userService } from "~/services/user.server"

import { Button, FormFieldSet, Layout } from "~/components"
import { TextInput } from "~/components/shared"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Login - Pycon ID 2023" }]
}

export async function action({ request }: ActionArgs) {
  const clonedRequest = request.clone()
  const formData = await clonedRequest.formData()
  const submission = parse(formData, { schema: userForgotPasswordSchema })

  if (!submission.value || submission.intent !== "submit") {
    return json({ ...submission, data: { success: false } })
  }

  const result = await userService.forgotPassword(submission.value)

  if (result.error) {
    const error: Record<string, any> = result.error.data
    return json({ ...submission, error, data: { success: false } })
  }

  return json({ ...submission, data: { success: true } })
}

export default function Route() {
  const id = useId()
  const lastSubmission = useActionData<typeof action>()

  const navigation = useNavigation()
  const isSubmitting = navigation.state !== "idle"

  const [form, { email }] = useForm({
    id,
    lastSubmission,
    shouldValidate: "onBlur",
    constraint: getFieldsetConstraint(userForgotPasswordSchema),
    onValidate({ formData }) {
      return parse(formData, { schema: userForgotPasswordSchema })
    },
  })

  if (lastSubmission?.data.success) {
    return <SuccessForgotPassScreen />
  }

  return (
    <Layout>
      <div className="mx-auto mb-10 mt-10 w-full max-w-7xl px-6 md:mt-16">
        <div className="flex items-center justify-between gap-12">
          <div className="w-full">
            <h1 className="font-brand text-4xl font-bold text-primary md:text-6xl">
              Forgot your password?
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Enter your user account's verified email address and we will send
              you a password reset link.
            </p>
            <Form method="POST" {...form.props}>
              <FormFieldSet borderPosition="bottom">
                <div className="flex flex-col gap-4 md:gap-6">
                  <TextInput
                    field={email}
                    type="email"
                    label="Email"
                    placeholder="Enter your email address"
                  />

                  <Button
                    type="submit"
                    className="w-full md:ml-auto md:w-80"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting" : "Submit"}
                  </Button>
                </div>
              </FormFieldSet>
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

const SuccessForgotPassScreen = () => {
  return (
    <Layout>
      <div className="mx-auto mb-20 mt-10 w-full max-w-7xl px-6 md:h-[350px] md:px-4">
        <article>
          <div className="mx-auto flex flex-col items-center justify-center">
            <div className="h-200px m-4">
              <img
                src="/pycon-auth.svg"
                className="h-[200px]"
                alt="Pycon Auth"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-8 text-center">
              <h1 className="text-4xl text-primary">Email sent!</h1>
              <p className="text-xl">
                Please check your email to reset your password
              </p>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}
