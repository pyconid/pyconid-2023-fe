import { Link } from "@remix-run/react"

import { Button, Layout } from "~/components"

export default function Route() {
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
              <h1 className="text-4xl text-primary">Registered Successfully</h1>
              <p className="text-xl">
                Please check your email to verify your account
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
