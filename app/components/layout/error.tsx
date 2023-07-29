import { Link } from "@remix-run/react"

import { Button } from "~/components"

export function Error({ status, message }: {
    status: string,
    message?: string | null,
}) {
    return (
        <div className="h-full md:h-[600px] mx-auto mt-20 w-full max-w-7xl px-6 md:px-4">
            <article>
                <div className="flex flex-col items-center justify-center mx-auto">
                    <div className="h-200px m-4">
                        <img 
                            src="/pycon-error.svg"
                            className="h-[200px]"
                            alt="pycon-error.svg"
                        />
                    </div>
                    <div className="text-center flex flex-col gap-8 items-center justify-center">
                        <h1 className="text-primary text-4xl">
                            Oh Snakes! You've Found a 404 Page
                        </h1>
                        <Button asChild className="w-36">
                            <Link to="/">Back to Home</Link>
                        </Button>
                        <p className="text-sm text-justify md:text-center md:w-2/3">
                            In case you keep encountering the issue or have any questions about our Pythonic adventures, 
                            feel free to contact our Python wranglers at <a href="mailto:pycon@python.or.id" className="text-primary hover:underline">pycon@python.or.id</a>.
                        </p>
                        <p className="text-xs text-gray-400 text-justify md:text-center md:w-2/3">
                            error message: { status } { message ? ` - ${ message }` : '' }
                        </p>
                    </div>
                </div>
            </article>
        </div>
    )
}