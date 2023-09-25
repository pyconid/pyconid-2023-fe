import { PrismaClient } from "@prisma/client"

import { dataSpeakers } from "~/data"
import { dataIndustryCategories } from "~/data/industry-categories"
import { dataJobCategories } from "~/data/job-categories"
import { dataParticipantType } from "~/data/participant-types"

const prisma = new PrismaClient()

async function main() {
  await prisma.speaker.deleteMany()
  await prisma.industryCategory.deleteMany()
  await prisma.jobCategory.deleteMany()
  await prisma.participantType.deleteMany()

  await prisma.user.upsert({
    where: {
      email: "admin@pycon.id",
    },
    update: {},
    create: {
      email: "admin@pycon.id",
      firstName: "Admin",
      username: "admin",
      phone: "+6281111",
    },
  })

  await prisma.speaker.createMany({
    data: dataSpeakers,
  })

  await prisma.industryCategory.createMany({
    data: dataIndustryCategories,
  })

  await prisma.jobCategory.createMany({
    data: dataJobCategories,
  })

  await prisma.participantType.createMany({
    data: dataParticipantType,
  })
}

main()
  .then(async () => {
    console.log("Seeding complete")
    await prisma.$disconnect()
  })
  .catch((e) => {
    console.error(e)
    console.log("Seeding failed")
    prisma.$disconnect()
    process.exit(1)
  })
