import type { V2_MetaFunction } from "@remix-run/node"

import { Layout } from "~/components"
import { ScheduleTabs, ScheduleTabsProvider } from "~/components/schedule"
import { ScheduleCard } from "~/components/schedule/card"
import { CATEGORIES } from "~/components/schedule/constant"
import { Header } from "~/components/schedule/header"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Schedule" }]
}

const tabs = [
  { id: "day1", title: "Day 1" },
  { id: "day2", title: "Day 2" },
]
export default function Route() {
  return (
    <Layout>
      <div className="relative z-[3] bg-white px-4 pt-5 text-center">
        <h1 className="mb-6 font-brand text-5xl font-semibold text-primary lg:text-6xl">
          Schedule
        </h1>
        <p className="mx-auto w-full text-xl tracking-tight lg:w-[420px] lg:text-2xl">
          Explore the in-person schedule for Python Conference 2023 in Bandung
        </p>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <h1 className="mt-24 text-center text-4xl">To Be Announced</h1>
      </div>
    </Layout>
  )
}
