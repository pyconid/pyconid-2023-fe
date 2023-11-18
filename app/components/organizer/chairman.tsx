import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { cn } from "~/libs"
import { getAvatarInitials } from "~/libs/getAvatarInitials"

const colorMap = {
  purple: {
    card: "border-primary-purple",
    shadow: "bg-primary-purple",
  },
} as const

const COLOR_BORDERS = Object.keys(colorMap) as Array<keyof typeof colorMap>

type ChairmanCardProps = React.HTMLAttributes<HTMLDivElement> & {
  firstName: string
  lastName: string
  index?: number
  id: string
  avatar?: string
}

function ChairmanCard({
  firstName,
  lastName,
  index = 0,
  children,
  className,
  avatar,
  id,
}: ChairmanCardProps) {
  // Cycle through the color map
  const initials = getAvatarInitials(firstName, lastName)

  const color = COLOR_BORDERS[index % COLOR_BORDERS.length]
  return (
    <div className="flex flex-col items-center gap-12 pb-4 lg:flex-row lg:pb-20">
      <div className="relative">
        <div
          className={cn(
            "relative -z-10 w-[300px] overflow-hidden rounded-xl border-2 bg-white",
            colorMap[color].card,
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
        <div
          className={cn(
            "absolute -left-2 top-2 -z-20 h-full w-full rounded-xl",
            colorMap[color].shadow,
          )}
        />
      </div>
      <div className="mt-4 text-center lg:text-justify">
        <h4 className="mb-4 text-4xl tracking-tight">
          {`${firstName} ${lastName}`}
        </h4>
        <div>{children}</div>
      </div>
    </div>
  )
}

export { ChairmanCard }
