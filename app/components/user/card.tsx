import { Link } from "@remix-run/react"
import type { Connections } from "~/models/user-connection.server"

import { cn } from "~/libs"
import { getAvatarInitials } from "~/libs/getAvatarInitials"

import { Button } from "../ui"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

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

type UserCardProps = React.HTMLAttributes<HTMLDivElement> & {
  data: NonNullable<Connections>[0]
  index?: number
}

function UserCard({ data, index = 0, children, className }: UserCardProps) {
  if (!data) return null
  // Cycle through the color map
  const color = COLOR_BORDERS[index % COLOR_BORDERS.length]
  const { id, firstName, lastName, avatar, displayName, jobTitle } = data
  const initials = getAvatarInitials(firstName, lastName)
  return (
    <div className="pb-4 lg:pb-20">
      <div className="relative h-full">
        <div
          className={cn(
            "relative z-30 flex h-full flex-col items-center gap-2 overflow-hidden rounded-xl border-2 bg-white px-5 py-4",
            colorMap[color].card,
            className,
          )}
        >
          <div
            className={cn("absolute top-0 h-24 w-full", colorMap[color].shadow)}
          />
          <Avatar className={cn("h-32 w-32 border-2", colorMap[color].card)}>
            <AvatarImage src={avatar ?? undefined} alt={firstName} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <h4 className="w-full truncate text-center text-lg font-bold tracking-tight">
            {displayName ?? `${firstName} ${lastName}`}
          </h4>
          {displayName ? (
            <span className="h-6 text-sm text-muted-foreground">
              {firstName} {lastName}
            </span>
          ) : null}
          <span className="h-10 text-muted-foreground">{jobTitle}</span>
          <Button variant="outline">
            <Link to={`/profile/${id}`}>See Profile</Link>
          </Button>
        </div>
        <div
          className={cn(
            "absolute -left-2 top-2 -z-20 h-full w-full rounded-xl",
            colorMap[color].shadow,
          )}
        />
      </div>
    </div>
  )
}

export { UserCard }
