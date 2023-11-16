import { cn } from "~/libs"

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
}

function ChairmanCard({
  firstName,
  lastName,
  index = 0,
  children,
  className,
  id,
}: ChairmanCardProps) {
  // Cycle through the color map
  const color = COLOR_BORDERS[index % COLOR_BORDERS.length]
  return (
    <div className="flex gap-12 pb-4 lg:pb-20">
      <div className="relative">
        <div
          className={cn(
            "relative -z-10 h-full overflow-hidden rounded-xl border-2 bg-white",
            colorMap[color].card,
            className,
          )}
        >
          <img src="https://placehold.co/250" />
        </div>
        <div
          className={cn(
            "absolute -left-2 top-2 -z-20 h-full w-full rounded-xl",
            colorMap[color].shadow,
          )}
        />
      </div>
      <div className="mt-4">
        <h4 className="mb-4 text-4xl tracking-tight">
          {`${firstName} ${lastName}`}
        </h4>
        <div>{children}</div>
      </div>
    </div>
  )
}

export { ChairmanCard }
