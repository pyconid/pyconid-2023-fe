import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.speaker.deleteMany();

  await prisma.user.create({
    data: {
      email: "admin@pycon.id",
      name: "Admin",
      username: "admin",
    },
  });

  await prisma.speaker.createMany({
    data: [
      { name: "Dima", slug: "dima", bio: "Insert bio here." },
      { name: "Guido", slug: "guido", bio: "Insert bio here." },
      { name: "Rektor BINUS", slug: "rektor", bio: "Insert bio here." },
    ],
  });
}

main()
  .then(async () => {
    console.log("Seeding complete");
    await prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    console.log("Seeding failed");
    prisma.$disconnect();
    process.exit(1);
  });
