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
            start="09:30"
            end="11:00"
          />
          <ScheduleTabs.Content contentFor="day1" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Opening Session"
                description=""
                time="09:30 - 10:00"
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
              podiumName="Main Hall - Online"
              title="PyTorch Hook: Underrated Tool for Debugging and Modifying Deep Learning Model Blindly"
              description="Rian Adam Rajagede"
              categories={[CATEGORIES.PYTORCH, CATEGORIES.DEEP_LEARNING]}
              tags={["Intermediate", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 1"
              title="Automation Dunia Nyata dengan Micropython dan Google Home"
              description="Aria Suseno"
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
              description="Afif Akbar Iskandar"
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
              description="Dita Aji Pratama"
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
            end="13:00"
          />
          <ScheduleTabs.Content contentFor="day1" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Lunch Break"
                description=""
                time="11:50 - 13:00"
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
              description="Dany Eka Saputra"
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
              description="Joshua Arvin Lat"
              categories={[CATEGORIES.MACHINE_LEARNING, CATEGORIES.SECURITY]}
              tags={["Advanced", "EN"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 2"
              title="Boosting Python Performance with Rust"
              description="Mr. Tirtadwipa Manunggal"
              categories={[CATEGORIES.RUST, CATEGORIES.PERFORMANCE]}
              tags={["Intermediate", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 3"
              title="Introduction to Football Analytics Using Python"
              description="Moch. Rizky Pratama Putra"
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
              podiumName="Main Hall - Online"
              title="Crafting the AI Streamer Experience on Twitch with Python and ChatGPT API"
              description="Renaldi Gondosubroto"
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
              description="Fendy Hendriyanto"
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
              description="Nawindah"
              categories={[CATEGORIES.FUZZY_LOGIC, CATEGORIES.SIMPFUL]}
              tags={["Beginner", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 4"
              title="Competitive Programming is Easy: How to Learn Better"
              description="Mr. Pahlevi Fikri Auliya"
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
              podiumName="Main Hall - Online"
              title="Introduction to FastAPI for Machine Learning Application"
              description="Radical R. Wahid"
              categories={[CATEGORIES.MACHINE_LEARNING, CATEGORIES.FASTAPI]}
              tags={["Intermediate", "EN"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 1"
              title="Build A Security Scanner for Kubernetes based on CIS Benchmark with Python3 Standard Library"
              description="Ridwan Fadjar Septian"
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
              description="Fathur Rohman"
              categories={[CATEGORIES.CODE_QUALITY, CATEGORIES.STATIC_ANALYSIS]}
              tags={["JULO", "All", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 3"
              title="Prediksi Pertandingan Sepak Bola Liga 1 Indonesia dengan Low-Code dan PyCaret"
              description="Dodhy Kurnia Rahmantyo"
              categories={[CATEGORIES.FOOTBALL, CATEGORIES.MACHINE_LEARNING]}
              tags={["Beginner", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 4"
              title="Connected: Solving Real-Life problems using Python and Graph Databases"
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
              podiumName="Main Hall - Online"
              title="Belajar dari Tidyverse"
              description="Ali Akbar Septiandri"
              categories={[CATEGORIES.CODE_QUALITY, CATEGORIES.TIDYVERSE]}
              tags={["Beginner", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 2"
              title="Building Data Pipelines with Spark and Python"
              description="Ilham Kurnia Wahyudi Rusli"
              categories={[CATEGORIES.SPARK, CATEGORIES.DATA_ENGINEER]}
              tags={["Intermediate", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 3"
              title="Getting to Know Generative Adversarial Networks (GANs) and How to Detect Them"
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
                title="Lightning Talks Day 1"
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
                title="Closing Session"
                description=""
                time="17:20 - 17:40"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header title="Day 2" />
          <Header
            variant="main"
            title="Opening & Keynote Session 2"
            date="19 November 2023"
            start="09:30"
            end="11:00"
          />
          <ScheduleTabs.Content contentFor="day2" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
            <ScheduleCard
              type="keynote"
              title="Opening Session"
              description=""
              time="09.30 - 10.00"
              url="/"
            />
            <ScheduleCard
              type="keynote"
              title="Keynote Session 2 - Menjadi Penyelam Handal"
              description="Giovanni Sakti"
              time="10.00 - 11.00"
              tags={["All","ID"]}
              url="/"
            />
          </div>
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Parallel Session 6"
            date="19 November 2023"
            start="11:10"
            end="11:50"
          />
          <ScheduleTabs.Content className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ScheduleCard
              type="podium"
              podiumName="Main Hall - Online"
              title="More than Visual Novel: Renpy & Python Game Development"
              description="Louis Krishna Putera Suryapranata"
              categories=""
              tags={["All", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 1"
              title="Kesalahan Umum dalam Pengamanan Aplikasi Web"
              description="Iskandar Setiadi"
              //categories={[CATEGORIES.HOME_AUTOMATION, CATEGORIES.MICROPYTHON]}
              tags={["All", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 2"
              title="Pengolahan Data Spasial dengan menggunakan Flask, PostgreSQL dan Leaflet"
              description="Akhmad Sofwan"
              //categories={[CATEGORIES.HOME_AUTOMATION, CATEGORIES.MICROPYTHON]}
              tags={["Intermediate", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 3"
              title="Elasticsearch: Building a Learning-to-Rank Autocomplete for Online Travel Agency"
              description="Elsafina Siswanto"
              //categories={[CATEGORIES.HOME_AUTOMATION, CATEGORIES.MICROPYTHON]}
              tags={["All", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 4"
              title="Python for Security Orchestration Automation and Response (SOAR)"
              description="Muhammad Febri Ramadhan"
              //categories={[CATEGORIES.HOME_AUTOMATION, CATEGORIES.MICROPYTHON]}
              tags={["Intermediate", "EN"]}
              url="/"
            />
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Lunch Break"
            date="19 November 2023"
            start="11:50"
            end="13:00"
          />
          <ScheduleTabs.Content contentFor="day2" offset={0}>
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
            title="Keynote Session 3"
            date="19 November 2023"
            start="11:50"
            end="13:00"
          />
          <ScheduleTabs.Content contentFor="day2" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Keynote Session 3 - TBA Soon"
                description=""
                time="13:00 - 14:00"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Parallel Session 7"
            date="19 November 2023"
            start="14:10"
            end="14:50"
          />
          <ScheduleTabs.Content className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ScheduleCard
              type="podium"
              podiumName="Main Hall - Online"
              title="Cara Panjat Karir via Data Structure dan Algorithm"
              description="Listiarso Wastuargo (Gogo)"
              //categories=""
              tags={["All", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 1"
              title="Unraveling the Hashtag Enigma: Digital Forensics meets Predictive Analysis for Election Hashtags"
              description="Muhammad Faurel Gema Augista"
              //categories={[CATEGORIES.HOME_AUTOMATION, CATEGORIES.MICROPYTHON]}
              tags={["Beginner", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 2"
              title="Building Better Microservices API with Event-Driven Architecture"
              description="Irwan Butar Butar"
              //categories={[CATEGORIES.HOME_AUTOMATION, CATEGORIES.MICROPYTHON]}
              tags={["Intermediate", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 3"
              title="Build Robust Automated Data Modeling: A Beginner's Guie to Collaborative Data Modeling"
              description="Ahmad Shohibus Sulthoni"
              //categories={[CATEGORIES.HOME_AUTOMATION, CATEGORIES.MICROPYTHON]}
              tags={["Beginner", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 4"
              title="Automating Victory: Beating Browser Games with Accessible Python"
              description="Jon Gaul"
              //categories={[CATEGORIES.HOME_AUTOMATION, CATEGORIES.MICROPYTHON]}
              tags={["Beginnter", "EN"]}
              url="/"
            />
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Afternoon Break"
            date="19 November 2023"
            start="14:50"
            end="15:20"
          />
          <ScheduleTabs.Content contentFor="day1" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Afternoon Break"
                description=""
                time="14:50 - 15:20"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Parallel Session 8"
            date="18 November 2023"
            start="15:20"
            end="16:00"
          />
          <ScheduleTabs.Content className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ScheduleCard
              type="podium"
              podiumName="Main Hall - Online"
              title="Stable Multiplatform Apps with Python Flet"
              description="M Nasrul Alawy"
              //categories={[CATEGORIES.CODE_QUALITY, CATEGORIES.TIDYVERSE]}
              tags={["Intermediate", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 1"
              title="Making Python Fun and Flexible with Inversion Control"
              description="Yoga Pratama Aliarham"
              //categories={[CATEGORIES.SPARK, CATEGORIES.DATA_ENGINEER]}
              tags={["Intermediate", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 2"
              title="Islands Will Eventually Connect to Forma Universe: An Introduction to the ActivityPub Protocol and Basic Implementation Guide"
              description="Zhang Yu"
              //categories=""
              tags={["All", "EN"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 3"
              title="Python in Workplace: Petrochemical Product Price Forecasting"
              description="Andi Dinata"
              //categories=""
              tags={["All", "ID"]}
              url="/"
            />
            <ScheduleCard
              type="podium"
              podiumName="Room 4"
              title="One Piece of Data: Exploring the World of One Piece with Python"
              description="Ismail Sunni"
              //categories=""
              tags={["All", "ID"]}
              url="/"
            />
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Lightning Talks Day 2"
            date="19 November 2023"
            start="16:10"
            end="16:40"
          />
          <ScheduleTabs.Content contentFor="day2" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Lightning Talks Day 2"
                description=""
                time="16:10 - 16:40"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
          <Header
            variant="main"
            title="Closing Day 2"
            date="19 November 2023"
            start="16:40"
            end="17:00"
          />
          <ScheduleTabs.Content contentFor="day2" offset={0}>
            <div className="mb-4 flex flex-col gap-4">
              <ScheduleCard
                type="keynote"
                title="Closing Session"
                description=""
                time="16:40 - 17:00"
                url="/"
              />
            </div>
          </ScheduleTabs.Content>
        </ScheduleTabsProvider>
      </div>
    </Layout>
  )
}
