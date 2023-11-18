import { Link } from "@remix-run/react"
import type { Schedule } from "~/routes/schedule._index"
import { cva } from "class-variance-authority"

import { cn } from "~/libs"

import { Button } from "../ui"
import { CATEGORIES_DISPLAY, type Categories } from "./constant"
import { ScheduleDialog } from "./dialog"

type ScheduleCardKeynote = {
  type: "keynote"
  title: string
  description?: string
  time?: string
  url: string
}

type ScheduleCardPodium = {
  type: "podium"
  podiumName: string
  description: string
  tags: string[]
  categories: string[]
  title: string
  url: string
}

type PodiumSectionProps = {
  tags: ScheduleCardPodium["tags"]
  podiumName: ScheduleCardPodium["podiumName"]
}

export const PodiumSection = ({ tags, podiumName }: PodiumSectionProps) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <span className="text-lg">{podiumName}</span>
      <ul className="flex gap-4">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-lg border border-primary px-2 py-1 text-xs lg:rounded-2xl lg:px-4 lg:py-2 lg:text-sm"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

type PodiumCategoriesProps = {
  categories: ScheduleCardPodium["categories"]
}

export const PodiumCategories = ({ categories }: PodiumCategoriesProps) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {categories.map((key) => (
        <li
          key={key}
          className="flex items-center gap-3 p-2 text-sm first-of-type:pl-0"
        >
          <span
            className={cn(
              "h-2 w-2 rounded-full",
              key in CATEGORIES_DISPLAY
                ? CATEGORIES_DISPLAY[key as Categories].color
                : "",
            )}
          />
          <span>
            {key in CATEGORIES_DISPLAY
              ? CATEGORIES_DISPLAY[key as Categories].name
              : ""}
          </span>
        </li>
      ))}
    </ul>
  )
}

const scheduleCardVariants = cva(
  "flex flex-col items-start gap-4 rounded-3xl lg:rounded-xl",
  {
    variants: {
      type: {
        keynote: "border border-primary bg-primary/10 p-6 lg:p-10",
        podium: "border border-primary p-6 lg:px-8 lg:py-12",
      },
    },
    defaultVariants: {
      type: "keynote",
    },
  },
)

type ScheduleCardTypes = ScheduleCardKeynote | ScheduleCardPodium

type ScheduleCardProps = ScheduleCardTypes &
  React.HTMLAttributes<HTMLDivElement> & {
    data?: Schedule
    showWatch?: boolean
  }

const ScheduleCard = ({ showWatch = true, ...props }: ScheduleCardProps) => {
  const { title, type, description, className, data } = props

  return (
    <div className={cn(scheduleCardVariants({ type, className }))}>
      {type === "keynote" ? <span className="text-lg">Main Hall</span> : null}
      {type === "podium" && (
        <PodiumSection podiumName={props.podiumName} tags={props.tags} />
      )}

      <ScheduleDialog id={data?.id ?? ""} data={data}>
        <h1 className="cursor-pointer text-xl font-bold hover:underline lg:text-2xl">
          {title}
        </h1>
      </ScheduleDialog>
      {description ? (
        <p className="text-sm lg:text-base">{description}</p>
      ) : null}

      {type === "keynote" && props.time && (
        <span className="text-lg lg:text-xl">{props.time}</span>
      )}
      {type === "podium" && <PodiumCategories categories={props.categories} />}
      {showWatch && props.data?.enabled ? (
        <Button size="lg" className="flex-shrink-0" asChild>
          <Link to={data?.id ? `/stream/${data.id}` : "/tickets"}>
            Watch Now
          </Link>
        </Button>
      ) : null}
    </div>
  )
}

export { ScheduleCard }
