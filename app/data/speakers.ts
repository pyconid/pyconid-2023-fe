import type { Speaker } from "@prisma/client"

export type DataSpeaker = Pick<Speaker, "name" | "slug" | "bio">

export const dataSpeakers: DataSpeaker[] = [
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
]
