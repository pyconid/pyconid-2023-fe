import { cn } from "~/libs"

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
  name: string
  index?: number
}

function SpeakerCard({
  name,
  index = 0,
  children,
  className,
}: SpeakerCardProps) {
  // Cycle through the color map
  const color = COLOR_BORDERS[index % COLOR_BORDERS.length]
  return (
    <div className="pb-4 lg:pb-20">
      <div className="relative">
        <div
          className={cn(
            "relative -z-10 h-full overflow-hidden rounded-xl border-2 bg-white",
            colorMap[color].card,
            className,
          )}
        >
          <img src="https://placehold.co/400" alt="" className="object-cover" />
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
          {name}
        </h4>
        <p className="text-lg">{children}</p>
      </div>
    </div>
  )
}

export { SpeakerCard }
