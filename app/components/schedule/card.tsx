import { Link } from "@remix-run/react"
import { cva } from "class-variance-authority"

import { cn } from "~/libs"

import { Button } from "../ui"
import {
  CATEGORIES_DISPLAY,
  type CATEGORIES,
  type Categories,
} from "./constant"

type ScheduleCardKeynote = {
  type: "keynote"
  title: string
  description: string
  time: string
  url: string
}

type ScheduleCardPodium = {
  type: "podium"
  podiumNo: number
  description: string
  tags: string[]
  categories: Categories[]
  title: string
  url: string
}

type PodiumSectionProps = {
  tags: ScheduleCardPodium["tags"]
  podiumNo: ScheduleCardPodium["podiumNo"]
}

const PodiumSection = ({ tags, podiumNo }: PodiumSectionProps) => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xl">Podium {podiumNo}</span>
      <ul className="flex gap-4">
        {tags.map((tag) => (
          <li key={tag} className="rounded-2xl border border-primary px-4 py-2">
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

const PodiumCategories = ({ categories }: PodiumCategoriesProps) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {categories.map((key) => (
        <li key={key} className="flex items-center gap-3 p-2">
          <span
            className={cn(
              "h-3 w-3 rounded-full",
              CATEGORIES_DISPLAY[key].color,
            )}
          />
          <span>{CATEGORIES_DISPLAY[key].name}</span>
        </li>
      ))}
    </ul>
  )
}

const scheduleCardVariants = cva("flex flex-col items-start gap-4 rounded-xl", {
  variants: {
    type: {
      keynote: "border border-primary bg-primary/10 p-10",
      podium: "border border-primary px-10 py-16",
    },
  },
  defaultVariants: {
    type: "keynote",
  },
})

type ScheduleCardTypes = ScheduleCardKeynote | ScheduleCardPodium

type ScheduleCardProps = ScheduleCardTypes &
  React.HTMLAttributes<HTMLDivElement>

const ScheduleCard = (props: ScheduleCardProps) => {
  const { title, url, type, description, className } = props

  return (
    <div className={cn(scheduleCardVariants({ type, className }))}>
      {type === "podium" && (
        <PodiumSection podiumNo={props.podiumNo} tags={props.tags} />
      )}
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-xl">{description}</p>
      {type === "keynote" && <span className="text-xl">{props.time}</span>}
      {type === "podium" && <PodiumCategories categories={props.categories} />}
      <Button size="lg" className="flex-shrink-0" asChild>
        <Link to={url}>Watch Now</Link>
      </Button>
    </div>
  )
}

export { ScheduleCard }
