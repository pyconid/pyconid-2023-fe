import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.user.deleteMany()
  await prisma.speaker.deleteMany()

  await prisma.user.create({
    data: {
      email: "admin@pycon.id",
      name: "Admin",
      username: "admin",
    },
  })

  await prisma.speaker.createMany({
    data: [
      {
        name: "Dima Dinama",
        slug: "dimadinama",
        bio: "Insert Dima bio here.",
      },
      {
        name: "Guido van Rossum",
        slug: "guidovanrossum",
        bio: "Insert Guido bio here.",
      },
      {
        name: "Ainun Najib",
        slug: "ainunnajib",
        bio: "Insert Ainun bio here.",
      },
    ],
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
