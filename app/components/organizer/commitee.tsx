import { cn } from "~/libs"
import { getAvatarInitials } from "~/libs/getAvatarInitials"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Link } from "@remix-run/react"

type CommiteeCardProps = React.HTMLAttributes<HTMLDivElement> & {
  firstName: string
  lastName: string
  index?: number
  avatar?: string
  id: string
  github: {
    url: string | null
  }
  twitter: {
    url: string | null
  }
}

const colorMap = {
  purple: {
    card: "border-primary-purple",
    shadow: "bg-primary-purple",
  },
  red: {
    card: "border-primary-red",
    shadow: "bg-primary-red",
  },
  orange: {
    card: "border-primary-orange",
    shadow: "bg-primary-orange",
  },
} as const

const COLOR_BORDERS = Object.keys(colorMap) as Array<keyof typeof colorMap>

function CommiteeCard({
  firstName,
  lastName,
  avatar,
  index = 0,
  className,
  github,
  twitter,
  id,
}: CommiteeCardProps) {
  const initials = getAvatarInitials(firstName, lastName)
  const color = COLOR_BORDERS[index % COLOR_BORDERS.length]

  return (
    <Link to={`/profile/${id}`} target="_blank">
      <div
        className={cn(
          "w-full space-y-2 rounded-2xl border-2 border-solid p-4",
          colorMap[color].card,
        )}
      >
        <div className="relative">
          <div className="relative">
            <div
              className={cn(
                "relative -z-10 w-full overflow-hidden rounded-xl",
                className,
              )}
            >
              <Avatar className="h-full w-full rounded-none">
                <AvatarImage src={avatar} alt={firstName} />
                <AvatarFallback className="aspect-square h-full w-full rounded-none text-3xl">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <p className="capitalize truncate">{`${firstName} ${lastName}`}</p>
            <div className="flex gap-3">
              <a
                target="_blank"
                className={cn(github ? "opacity-1" : "opacity-50 pointer-events-none")}
                rel="noopener noreferrer"
                href={github?.url ? github?.url : "#"}
              >
                <img src="icons/github.svg" alt="Github" />
              </a>


              <a
                target="_blank"
                className={cn(twitter ? "opacity-1" : "opacity-50 pointer-events-none")}
                rel="noopener noreferrer"
                href={twitter?.url ? twitter?.url : "#"}
              >
                <img src="icons/x.svg" alt="X" />
              </a>
            </div>



          </div>
        </div>
      </div>
    </Link>

  )
}

export { CommiteeCard }
