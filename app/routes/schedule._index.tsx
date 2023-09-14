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
        <ScheduleTabsProvider defaultActive="day1">
          <ScheduleTabs tabs={tabs} />
          <Header title="Day 1" />
          <Header variant="main" title="18 November 2023 09:00 AM" />
          <ScheduleTabs.Content contentFor="day1" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Opening (Main Stage)"
                description="Event description"
                time="09.00 - 09.30"
                url="/"
              />
              <ScheduleCard
                type="keynote"
                title="Keynote Speaker"
                description="Kemal Maulana Kurniawan - Job title, Company"
                time="09.00 - 09.30"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header variant="main" title="18 November 2023 10:00 AM" />
          <ScheduleTabs.Content className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ScheduleCard
              type="podium"
              podiumNo={1}
              title="Python for Government Institution: Producing Better Official Statistics"
              description="Arie Wahyu Wijayanto - Job title, Company"
              categories={[CATEGORIES.DATA_SCIENCE]}
              tags={["ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumNo={2}
              title="Implementasi Teorema Matriks-Pohon dengan PyTorch"
              description="Kemal Maulana Kurniawan - Job title, Company"
              categories={[
                CATEGORIES.DEEP_LEARNING,
                CATEGORIES.NLP,
                CATEGORIES.ARTIFICIAL_INTELLIGENCE,
                CATEGORIES.MACHINE_LEARNING,
              ]}
              tags={["Intermediate"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumNo={3}
              title="Monitoring and Logging Django Web Application with Prometheus, ELK and Sentry"
              description="Ridwan Fadjar Septian - Job title, Company"
              categories={[CATEGORIES.BACKEND]}
              tags={["Beginner", "EN"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumNo={4}
              title="Arjuna: Generate Indonesian Poets and Poems using python base NLP model"
              description="Miqdad Abdurrahman - Job title, Company"
              categories={[CATEGORIES.NLP, CATEGORIES.MACHINE_LEARNING]}
              tags={["Intermediate"]}
              url="/"
            />
          </ScheduleTabs.Content>
          <Header title="Day 2" />
          <Header variant="main" title="19 November 2023 09:00 AM" />
          <ScheduleTabs.Content
            contentFor="day2"
            className="mb-4 flex flex-col gap-4"
          >
            <ScheduleCard
              type="keynote"
              title="Opening (Main Stage)"
              description="Event description"
              time="09.00 - 09.30"
              url="/"
            />
            <ScheduleCard
              type="keynote"
              title="Keynote Speaker"
              description="Kemal Maulana Kurniawan - Job title, Company"
              time="09.00 - 09.30"
              url="/"
            />
          </ScheduleTabs.Content>
          <Header variant="main" title="19 November 2023 10:00 AM" />
          <ScheduleTabs.Content className="mb-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ScheduleCard
              type="podium"
              podiumNo={1}
              title="Python for Government Institution: Producing Better Official Statistics"
              description="Arie Wahyu Wijayanto - Job title, Company"
              categories={[CATEGORIES.DATA_SCIENCE]}
              tags={["ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumNo={2}
              title="Implementasi Teorema Matriks-Pohon dengan PyTorch"
              description="Kemal Maulana Kurniawan - Job title, Company"
              categories={[
                CATEGORIES.DEEP_LEARNING,
                CATEGORIES.NLP,
                CATEGORIES.ARTIFICIAL_INTELLIGENCE,
                CATEGORIES.MACHINE_LEARNING,
              ]}
              tags={["Intermediate"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumNo={3}
              title="Monitoring and Logging Django Web Application with Prometheus, ELK and Sentry"
              description="Ridwan Fadjar Septian - Job title, Company"
              categories={[CATEGORIES.BACKEND]}
              tags={["Beginner", "EN"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumNo={4}
              title="Arjuna: Generate Indonesian Poets and Poems using python base NLP model"
              description="Miqdad Abdurrahman - Job title, Company"
              categories={[CATEGORIES.NLP, CATEGORIES.MACHINE_LEARNING]}
              tags={["Intermediate"]}
              url="/"
            />
          </ScheduleTabs.Content>
        </ScheduleTabsProvider>
      </div>
    </Layout>
  )
}
