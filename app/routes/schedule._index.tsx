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
      <div className="relative z-[3] mt-20 bg-white px-4 pt-5 text-center">
        <h1 className="mb-6 font-brand text-5xl font-semibold text-primary lg:text-6xl">
          Schedule
        </h1>
        <p className="mx-auto w-full text-xl tracking-tight [text-wrap:balance] lg:w-[420px] lg:text-2xl">
          Explore the schedule for PyCon ID 2023
        </p>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <ScheduleTabsProvider defaultActive="day1">
          <ScheduleTabs tabs={tabs} />
          <Header title="Day 1" />
          <Header
            variant="main"
            title="Opening & Keynote Session 1"
            date="18 November 2023"
            start="09:00"
            end="11:00"
          />
          <ScheduleTabs.Content contentFor="day1" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Opening Session"
                description=""
                time="09:00 - 10:00"
                url="/"
              />
              <ScheduleCard
                type="keynote"
                title="Keynote Session 1"
                description="Ayu Purwarianti"
                time="10:00 - 11:00"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Parallel Session 1"
            date="18 November 2023"
            start="11:10"
            end="11:50"
          />
          <ScheduleTabs.Content className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ScheduleCard
              type="podium"
              podiumName="Online"
              title="PyTorch Hook: Underrated Tool for Debugging and Modifying Deep Learning Model Blindly"
              description="Rian Adam Rajagede (He/Him) - Researcher, Universitas Islam Indonesia; University of Central Florida"
              categories={[CATEGORIES.PYTORCH, CATEGORIES.DEEP_LEARNING]}
              tags={["Intermediate", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 1"
              title="Automation Dunia Nyata dengan Micropython dan Google Home"
              description="Aria Suseno - Content Creator, Ide Jongkok and Founder, PyAuto ID"
              categories={[CATEGORIES.HOME_AUTOMATION, CATEGORIES.MICROPYTHON]}
              tags={["All", "ID"]}
              url="/"
            />
            {/* <ScheduleCard
              type="podium"
              podiumName="Room 2"
              title=""
              description=""
              categories={[]}
              tags={[]}
              url="/"
            /> */}
            <ScheduleCard
              type="podium"
              podiumName="Room 3"
              title="Python-Powered MLOps: Streamlining Machine Learning Life Cycle"
              description="Afif Akbar Iskandar (He) - Machine Learning Engineer, Telkomsel"
              categories={[
                CATEGORIES.MACHINE_LEARNING,
                CATEGORIES.DATA_ENGINEER,
              ]}
              tags={["All", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 4"
              title="How I create my own website framework with Python"
              description="Dita Aji Pratama - Back-End Developer, Archidistrict"
              categories={[
                CATEGORIES.FRAMEWORK,
                CATEGORIES.CHERRYPY,
                CATEGORIES.MAKO,
              ]}
              tags={["Intermediate", "ID"]}
              url="/"
            />
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Lunch Break"
            date="18 November 2023"
            start="11:50"
            end="12:50"
          />
          <ScheduleTabs.Content contentFor="day1" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Lunch Break"
                description=""
                time="11:50 - 12:50"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Parallel Session 2"
            date="18 November 2023"
            start="13:10"
            end="13:50"
          />
          <ScheduleTabs.Content className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ScheduleCard
              type="podium"
              podiumName="Main Hall"
              title="Python Socket and Multithread for Drone"
              description="Dany Eka Saputra - Assistant Professor, BINUS University"
              categories={[
                CATEGORIES.DRONE,
                CATEGORIES.SOCKET_PROGRAMMING,
                CATEGORIES.MULTI_THREAD,
              ]}
              tags={["VENUE PARTNER", "Intermediate", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 1"
              title="Beyond the Basics: Hacking and Securing Machine Learning Systems and Environments"
              // TODO: Should add job title?
              description="Joshua Arvin Lat (He)"
              categories={[CATEGORIES.MACHINE_LEARNING, CATEGORIES.SECURITY]}
              tags={["Advanced", "EN"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 2"
              title="Boosting Python Performance with Rust"
              description="Mr. Tirtadwipa Manunggal - Technical Product Manager, Dcentric Health"
              categories={[CATEGORIES.RUST, CATEGORIES.PERFORMANCE]}
              tags={["Intermediate", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 3"
              title="Introduction to Football Analytics Using Python"
              description="Moch. Rizky Pratama Putra (He/Him/His) - Football Data Analyst, PojokStats"
              categories={[CATEGORIES.FOOTBALL, CATEGORIES.DATA_VISUALIZATION]}
              tags={["Beginner", "ID"]}
              url="/"
            />
            {/* <ScheduleCard
              type="podium"
              podiumName="Room 4"
              title=""
              description=""
              categories={[]}
              tags={[]}
              url="/"
            /> */}
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Parallel Session 3"
            date="18 November 2023"
            start="14:00"
            end="14:40"
          />
          <ScheduleTabs.Content className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ScheduleCard
              type="podium"
              podiumName="Online"
              title="Crafting the AI Streamer Experience on Twitch with Python and ChatGPT API"
              // TODO: Should add job title?
              description="Renaldi Gondosubroto (He/Him/His)"
              categories={[
                CATEGORIES.ARTIFICIAL_INTELLIGENCE,
                CATEGORIES.TWITCH,
                CATEGORIES.CHAT_GPT,
              ]}
              tags={["Intermediate", "EN"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 1"
              title="Cirebon Mask Characteristics Classification Using Image Processing Method in Python"
              description="Fendy Hendriyanto (He) - Artificial Intelligence Instructor, Orbit Future Academy"
              categories={[
                CATEGORIES.DEEP_LEARNING,
                CATEGORIES.COMPUTER_VISION,
              ]}
              tags={["All", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 2"
              title="Pengenalan Logika Fuzzy Dengan Simpful"
              description="Nawindah - Lecturer, Universitas Budi Luhur"
              categories={[CATEGORIES.FUZZY_LOGIC, CATEGORIES.SIMPFUL]}
              tags={["Beginner", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 4"
              title="Competitive Programming is Easy: How to Learn Better"
              // TODO: Should add job title?
              description="Mr. Pahlevi Fikri Auliya -  AVP of Engineering"
              categories={[
                CATEGORIES.CONCEPT,
                CATEGORIES.COMPETITIVE_PROGRAMMING,
              ]}
              tags={["All", "ID"]}
              url="/"
            />
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Afternoon Break"
            date="18 November 2023"
            start="14:40"
            end="15:20"
          />
          <ScheduleTabs.Content contentFor="day1" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Afternoon Break"
                description=""
                time="14:40 - 15:20"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Parallel Session 4"
            date="18 November 2023"
            start="15:20"
            end="16:00"
          />
          <ScheduleTabs.Content className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ScheduleCard
              type="podium"
              podiumName="Online"
              title="Introduction to FastAPI for Machine Learning Application"
              description="Ikal (Radical R. Wahid) - Backend Engineer, PT. Bangunindo Teknusa Jaya"
              categories={[CATEGORIES.MACHINE_LEARNING, CATEGORIES.FASTAPI]}
              tags={["Intermediate", "EN"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 1"
              title="Build A Security Scanner for Kubernetes based on CIS Benchmark with Python3 Standard Library"
              description="Ridwan Fadjar Septian (He/Him) - Cloud Infrastructure Engineer, DKatalis Digital Lab"
              categories={[
                CATEGORIES.KUBERNETES,
                CATEGORIES.SECURITY_AUTOMATION,
              ]}
              tags={["All", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 2"
              title="The Code Guardian: Leveraging Pre-Commit Hooks for Airtight Code Quality"
              // TODO: Should add job title?
              description="Fathur Rohman"
              categories={[CATEGORIES.CODE_QUALITY, CATEGORIES.STATIC_ANALYSIS]}
              tags={["JULO", "All", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 3"
              title="Prediksi Pertandingan Sepak Bola Liga 1 Indonesia dengan Low-Code dan PyCaret"
              // TODO: Should add job title?
              description="Dodhy Kurnia Rahmantyo"
              categories={[CATEGORIES.FOOTBALL, CATEGORIES.MACHINE_LEARNING]}
              tags={["Beginner", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 4"
              title="Connected: Solving Real-Life problems using Python and Graph Databases"
              // TODO: Should add job title?
              description="Ilya Verbitskiy"
              categories={[
                CATEGORIES.NEO4J,
                CATEGORIES.CYPHER,
                CATEGORIES.NETWORKX,
                CATEGORIES.PYVIS,
              ]}
              tags={["Intermediate", "EN"]}
              url="/"
            />
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Parallel Session 5"
            date="18 November 2023"
            start="16:10"
            end="16:50"
          />
          <ScheduleTabs.Content className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ScheduleCard
              type="podium"
              podiumName="Online"
              title="Belajar dari Tidyverse"
              description="Ali Akbar Septiandri - Senior NLP Data Scientist, Nokia Bell Labs"
              categories={[CATEGORIES.CODE_QUALITY, CATEGORIES.TIDYVERSE]}
              tags={["Beginner", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 2"
              title="Building Data Pipelines with Spark and Python"
              description="Ilham Kurnia Wahyudi Rusli - AI Engineer, Akar Inti Data"
              categories={[CATEGORIES.SPARK, CATEGORIES.DATA_ENGINEER]}
              tags={["Intermediate", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 3"
              title="Getting to Know Generative Adversarial Networks (GANs) and How to Detect Them"
              // TODO: Should add job title?
              description="Nadhiar Ridho Wahyu Pradana"
              categories={[
                CATEGORIES.DEEP_LEARNING,
                CATEGORIES.COMPUTER_VISION,
              ]}
              tags={["Beginner", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 4"
              title="Pengalaman Problem Based Learning Praktikum Komputer Grafik 2D dengan Py5 ~ Processing"
              // TODO: Should add job title?
              description="Mr. Trisna Gelar"
              categories={[
                CATEGORIES.COMPUTER_GRAPHICS,
                CATEGORIES.PY5,
                CATEGORIES.GODOT,
              ]}
              tags={["Beginner", "ID"]}
              url="/"
            />
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Lightning Talks Day 1"
            date="18 November 2023"
            start="17:00"
            end="17:20"
          />
          <ScheduleTabs.Content contentFor="day1" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Lightning Talks"
                description=""
                time="17:00 - 17:20"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Closing Day 1"
            date="18 November 2023"
            start="17:20"
            end="17:40"
          />
          <ScheduleTabs.Content contentFor="day1" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Closing"
                description=""
                time="17:20 - 17:40"
                url="/"
              />
            </div>
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
          <ScheduleTabs.Content className="mb-20 grid grid-cols-2 gap-4">
            {/* <ScheduleCard
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
            /> */}
          </ScheduleTabs.Content>
        </ScheduleTabsProvider>
      </div>
    </Layout>
  )
}
