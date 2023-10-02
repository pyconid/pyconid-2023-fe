import { useId } from "react"
import { json, type ActionArgs, type V2_MetaFunction } from "@remix-run/node"
import { Form, Link, useActionData, useNavigation } from "@remix-run/react"
import { useForm } from "@conform-to/react"
import { getFieldsetConstraint, parse } from "@conform-to/zod"
import { userResetPasswordSchema } from "~/schemas"
import { userService } from "~/services/user.server"

import { useUpdateEffect } from "~/hooks/useUpdateEffect"
import { Button, FormFieldSet, Layout } from "~/components"
import { TextInput } from "~/components/shared"
import { useToast } from "~/components/ui/use-toast"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Reset Password - Pycon ID 2023" }]
}

export async function action({ request, params }: ActionArgs) {
  const clonedRequest = request.clone()
  const formData = await clonedRequest.formData()
  const submission = parse(formData, { schema: userResetPasswordSchema })

  if (!submission.value || submission.intent !== "submit" || !params.token) {
    return json({ ...submission, data: { success: false, message: null } })
  }

  const result = await userService.resetPassword(
    submission.value.password,
    params.token,
  )

  if (result.error) {
    return json({
      ...submission,
      data: { success: false, message: result.error },
    })
  }

  return json({ ...submission, data: { success: true, message: null } })
}

export default function Route() {
  const id = useId()
  const { toast } = useToast()
  const lastSubmission = useActionData<typeof action>()

  const navigation = useNavigation()
  const isSubmitting = navigation.state !== "idle"

  const [form, { password, confirmPassword }] = useForm({
    id,
    lastSubmission,
    shouldValidate: "onBlur",
    constraint: getFieldsetConstraint(userResetPasswordSchema),
    onValidate({ formData }) {
      return parse(formData, { schema: userResetPasswordSchema })
    },
  })

  useUpdateEffect(() => {
    if (lastSubmission && lastSubmission.data && !lastSubmission.data.success) {
      toast({
        duration: 2000,
        title: lastSubmission.data.message as string,
        variant: "destructive",
      })
    }
  }, [lastSubmission?.data.success])

  if (lastSubmission?.data.success) {
    return <SuccessForgotPassScreen />
  }

  return (
    <Layout>
      <div className="mx-auto mb-10 mt-10 w-full max-w-7xl px-6 md:mt-16">
        <div className="flex items-center justify-between gap-12">
          <div className="w-full">
            <h1 className="font-brand text-4xl font-bold text-primary md:text-6xl">
              Reset your password
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Enter your new password
            </p>
            <Form method="POST" {...form.props}>
              <FormFieldSet borderPosition="bottom">
                <div className="flex flex-col gap-4 md:gap-6">
                  <TextInput
                    field={password}
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                  />
                  <TextInput
                    field={confirmPassword}
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm your password"
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
            src="/pycon-auth.svg"
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
      <div className="mx-auto mt-20 h-full w-full max-w-7xl px-6 md:h-[600px] md:px-4">
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
              <h1 className="text-4xl text-primary">Reset password success!</h1>
              <p className="text-xl">
                Please login to your account with your new password
              </p>
              <Button asChild size="lg">
                <Link to="/login">Go to Login</Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}
