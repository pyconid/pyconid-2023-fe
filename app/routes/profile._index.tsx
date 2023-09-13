import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import { cn } from "~/libs"
import { Button, Layout } from "~/components"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"

const MOCK_PROFILE_DATA = {
  avatar: "https://avatars.githubusercontent.com/u/79491787?s=200&v=4",
  name: "Dianne Russell",
  email: "dianne.18@gmail.com",
  location: "Jakarta",
}

export async function loader() {
  return json(MOCK_PROFILE_DATA)
}

export default function Route() {
  const { avatar, email, name, location } = useLoaderData<typeof loader>()

  return (
    <Layout>
      <div className="mx-auto mt-7 w-full max-w-7xl px-4">
        <div className="w-full overflow-hidden rounded-3xl border-2 border-primary lg:rounded-[80px]">
          <div
            className={cn(
              "flex flex-col items-center px-14 py-10 lg:flex-row lg:px-28",
              "bg-[url('/profile-bg-mobile.svg')] bg-right-bottom bg-no-repeat lg:bg-[url('/profile-bg.svg')] lg:bg-[right_bottom_-2rem]",
            )}
          >
            <Avatar className="h-32 w-32">
              <AvatarImage src={avatar} />
              <AvatarFallback>PY</AvatarFallback>
            </Avatar>
            <div className="mb-2 flex flex-col justify-between gap-2 text-center lg:mb-0 lg:ml-10 lg:text-left">
              <h3 className="text-2xl font-bold lg:text-3xl">{name}</h3>
              <p>{email}</p>
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
                    fill="black"
                  />
                </svg>
                <span>{location}</span>
              </div>
            </div>
            <Button className="h-auto w-48 bg-black px-6 py-2 lg:ml-16  lg:py-4">
              Connect
            </Button>
          </div>
          <div className="border-t-2 border-primary px-28 py-10">Content</div>
        </div>
      </div>
    </Layout>
  )
}
