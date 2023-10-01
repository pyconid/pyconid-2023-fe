import { useEffect, useId } from "react"
import { json } from "@remix-run/node"
import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node"
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react"
import { useForm } from "@conform-to/react"
import { getFieldsetConstraint, parse } from "@conform-to/zod"
import { userSigninSchema } from "~/schemas"
import { authenticator } from "~/services/auth.server"
import { commitSession, getSession } from "~/services/session.server"

import { Button, Layout } from "~/components"
import { TextInput } from "~/components/shared"
import { FormFieldSet } from "~/components/ui/form"
import { useToast } from "~/components/ui/use-toast"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Login - PyconID 2023" }]
}

export async function action({ request }: ActionArgs) {
  const clonedRequest = request.clone()
  const formData = await clonedRequest.formData()
  const submission = parse(formData, { schema: userSigninSchema })

  if (!submission.value || submission.intent !== "submit") {
    return submission
  }

  await authenticator.authenticate("user-pass", request, {
    successRedirect: "/account",
    failureRedirect: "/login",
    throwOnError: true,
  })

  return submission
}

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request.headers.get("cookie"))
  const error = session.get(authenticator.sessionErrorKey)

  const tokenMessage = session.get("tokenMessage") || null

  return json(
    { error, tokenMessage },
    { headers: { "set-cookie": await commitSession(session) } },
  )
}

export default function Route() {
  const id = useId()
  const lastSubmission = useActionData<typeof action>()
  const { error, tokenMessage } = useLoaderData<typeof loader>()
  const navigation = useNavigation()
  const { toast } = useToast()

  const isSubmitting = navigation.state !== "idle"

  const [form, { email, password }] = useForm({
    id,
    lastSubmission,
    shouldValidate: "onBlur",
    constraint: getFieldsetConstraint(userSigninSchema),
    onValidate({ formData }) {
      return parse(formData, { schema: userSigninSchema })
    },
  })

  useEffect(() => {
    if (tokenMessage) {
      const { type, message } = JSON.parse(tokenMessage)
      setTimeout(() => {
        toast({
          duration: 2000,
          title: message,
          variant: type === "error" ? "destructive" : "default",
        })
      }, 200)
    }
  }, [tokenMessage, toast])

  return (
    <Layout>
      <div className="mx-auto mb-10 mt-10 w-full max-w-7xl px-6 md:mt-16">
        <div className="flex items-center justify-between gap-12">
          <div className="w-full">
            <h1 className="font-brand text-4xl font-bold text-primary md:text-6xl">
              Login to your account
            </h1>
            <Form method="POST" {...form.props}>
              <FormFieldSet borderPosition="bottom">
                <div className="flex flex-col gap-4 md:gap-6">
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
                  <p className=" text-red-500">
                    {error ? error.message : null}
                  </p>
                  <Button
                    type="submit"
                    className="w-full md:ml-auto md:w-80"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging In..." : "Login"}
                  </Button>
                </div>
              </FormFieldSet>
              <p className="mt-10 text-base font-semibold md:text-xl">
                Don’t have an account?{" "}
                <Link to="/register" className="text-primary underline">
                  Register Here
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
