import type { Ticket, TicketFeature } from "@prisma/client"

import { cn, currencyFormatter } from "~/libs"

const colorMap = {
  red: {
    card: "border-primary-red",
    shadow: "bg-primary-red",
  },
  purple: {
    card: "border-primary-purple",
    shadow: "bg-primary-purple",
  },
  black: {
    card: "border-primary-black",
    shadow: "bg-primary-black",
  },
  orange: {
    card: "border-primary-orange",
    shadow: "bg-primary-orange",
  },
} as const

const COLOR_BORDERS = Object.keys(colorMap) as Array<keyof typeof colorMap>

type TicketCardProps = React.HTMLAttributes<HTMLDivElement> & {
  data: Pick<Ticket, "id" | "name" | "price" | "description" | "earlyBird"> & {
    features: Pick<TicketFeature, "feature" | "id">[]
  }
  index?: number
}

function TicketCard({ index = 0, data, className }: TicketCardProps) {
  const { description, name, features, price, earlyBird } = data

  // Cycle through the color map
  const color = COLOR_BORDERS[index % COLOR_BORDERS.length]

  return (
    <div className={cn("relative w-full max-w-[416px]")}>
      <div
        className={cn(
          "relative -z-10 flex h-full flex-col items-center gap-6 rounded-xl border-2 bg-white p-6",
          colorMap[color].card,
          className,
        )}
      >
        <h4 className="text-3xl">{name}</h4>
        <p className="text-3xl font-bold">{currencyFormatter.format(price)}</p>
        <p>{description}</p>
        <p className="self-start font-bold">Includes: </p>
        <ul className="space-y-3 self-start">
          {features.map(({ id, feature }) => (
            <li className="flex gap-3" key={id}>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5576 7.26651C20.2571 6.41162 20.1311 5.15157 19.2762 4.45212C18.4213 3.75266 17.1613 3.87866 16.4618 4.73355L8.67591 14.2497L6.20974 12.4C5.32608 11.7373 4.07248 11.9164 3.40973 12.8C2.74699 13.6837 2.92608 14.9373 3.80974 15.6L7.04282 18.0248C8.3289 18.9894 10.1467 18.7688 11.1647 17.5246L19.5576 7.26651Z"
                  stroke="#42449C"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      {earlyBird ? (
        <div
          className={cn(
            "absolute -top-6 right-0 rounded-bl-full rounded-br-none rounded-tl-full rounded-tr-full px-6 py-3 text-white",
            colorMap[color].shadow,
          )}
        >
          Early Bird
        </div>
      ) : null}

      <div
        className={cn(
          "absolute -left-2 top-2 -z-20 h-full w-full rounded-xl",
          colorMap[color].shadow,
        )}
      />
    </div>
  )
}

export { TicketCard }
