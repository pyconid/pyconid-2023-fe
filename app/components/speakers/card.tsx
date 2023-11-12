import { cn } from "~/libs"
import { getAvatarInitials } from "~/libs/getAvatarInitials"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Link } from "@remix-run/react"

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

type SpeakerCardProps = React.HTMLAttributes<HTMLDivElement> & {
  firstName: string
  lastName: string
  index?: number
  avatar?: string
  id: string
}

function SpeakerCard({
  firstName,
  lastName,
  avatar = "",
  index = 0,
  children,
  className,
  id,
}: SpeakerCardProps) {
  const initials = getAvatarInitials(firstName, lastName)
  // Cycle through the color map
  const color = COLOR_BORDERS[index % COLOR_BORDERS.length]
  return (
    <Link to={`/profile/${id}`}>
      <div className="pb-4 lg:pb-20">
        <div className="relative">
          <div
            className={cn(
              "relative -z-10 h-full overflow-hidden rounded-xl border-2 bg-white",
              colorMap[color].card,
              className,
            )}
          >
            <Avatar className="rounded-none w-full h-full">
              <AvatarImage src={avatar} alt={firstName} />
              <AvatarFallback className="rounded-none text-3xl w-full h-full aspect-square">{initials}</AvatarFallback>
            </Avatar>
          </div>
          <div
            className={cn(
              "absolute -left-2 top-2 -z-20 h-full w-full rounded-xl",
              colorMap[color].shadow,
            )}
          />
        </div>
        <div className="mt-4">
          <h4 className="mb-4 text-4xl font-bold tracking-tight text-primary">
            {`${firstName} ${lastName}`}
          </h4>
          <p className="text-lg">{children}</p>
        </div>
      </div>
    </Link>

  )
}

export { SpeakerCard }
