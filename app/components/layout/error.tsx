import { Link } from "@remix-run/react"

import { Button } from "~/components"

export function Error({
  status,
  message,
}: {
  status: string
  message?: string | null
}) {
  return (
    <div className="mx-auto mt-20 h-full w-full max-w-7xl px-6 md:h-[600px] md:px-4">
      <article>
        <div className="mx-auto flex flex-col items-center justify-center">
          <div className="h-200px m-4">
            <img
              src="/pycon-error.svg"
              className="h-[200px]"
              alt="pycon-error.svg"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            <h1 className="text-4xl text-primary">
              {status === "404"
                ? "Oh Snakes! You've Found a 404 Page"
                : "  Oh Snakes! 500 - Internal Server Error"}
            </h1>
            <Button asChild className="w-36">
              <Link to="/">Back to Home</Link>
            </Button>
            <p className="text-justify text-sm md:w-2/3 md:text-center">
              In case you keep encountering the issue or have any questions
              about our Pythonic adventures, feel free to contact our Python
              wranglers at{" "}
              <a
                href="mailto:pycon@python.or.id"
                className="text-primary hover:underline"
              >
                pycon@python.or.id
              </a>
              .
            </p>
            <p className="text-justify text-xs text-gray-400 md:w-2/3 md:text-center">
              error message: {status} {message ? ` - ${message}` : ""}
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
