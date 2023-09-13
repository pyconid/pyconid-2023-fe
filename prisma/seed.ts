import { PrismaClient } from "@prisma/client"

import { dataSpeakers } from "~/data"

const prisma = new PrismaClient()

async function main() {
  await prisma.user.deleteMany()
  await prisma.speaker.deleteMany()

  await prisma.user.create({
    data: {
      email: "admin@pycon.id",
      firstName: "Admin",
      username: "admin",
      phone: "+6281111",
    },
  })

  await prisma.speaker.createMany({
    data: dataSpeakers,
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
