import { Ticket, TicketFeature } from "@prisma/client"
import { prisma } from "~/db.server"

type DataFeature = Pick<TicketFeature, "feature">
type DataTicket = Pick<
  Ticket,
  "name" | "quota" | "price" | "earlyBird" | "description"
>

export const dataTicket: DataTicket[] = [
  {
    name: "General In Person",
    description:
      "This ticket type will get both online and in person access to this event for 2 days. Additionally, this ticket type will also receive exclusive PyCon ID merchandise. Plus, you'll get facilities like lunch and ice-breaking activities for the 2 days.",
    quota: 50,
    earlyBird: true,
    price: 250000,
  },
  {
    name: "Student",
    description:
      "This ticket will get both online and in person access to this event for two days.",
    quota: 50,
    earlyBird: true,
    price: 250000,
  },
  {
    name: "General In Person",
    description:
      "This ticket type will get both online and in person access to this event for 2 days. Additionally, this ticket type will also receive exclusive PyCon ID merchandise. Plus, you'll get facilities like lunch and ice-breaking activities for the 2 days.",
    quota: 300,
    earlyBird: false,
    price: 300000,
  },
  {
    name: "Student In Person",
    description:
      "This ticket is only available to students (includes school or University) for two days.",
    quota: 200,
    earlyBird: false,
    price: 250000,
  },
  {
    name: "Patron",
    description:
      "Be a Patron by supporting this event. Your name will be listed on Patron Section.",
    quota: 99999,
    earlyBird: false,
    price: 1500000,
  },
  {
    name: "General Online",
    description:
      "This ticket includes online access to our event for two days.",
    quota: 99999,
    earlyBird: false,
    price: 150000,
  },
  {
    name: "Student Online",
    description:
      "This ticket is only available to students (includes school or University). This ticket includes online access to our event for two days. Additionally, ticket holders will have the opportunity to check out our exclusive PyCon ID merchandise via our ecommerce store. More about shipping will be informed later.",
    quota: 99999,
    earlyBird: false,
    price: 100000,
  },
]

export const dataFeatures: DataFeature[][] = [
  [
    {
      feature: "Online and in person access",
    },
    {
      feature: "Exclusive PyCon ID Merchandise",
    },
    {
      feature: "Lunch and Ice Breaking",
    },
  ],
  [
    {
      feature: "Online and in person access",
    },
    {
      feature: "Exclusive PyCon ID Merchandise",
    },
    {
      feature: "Lunch and Ice Breaking",
    },
  ],
  [
    {
      feature: "Online and in person access",
    },
    {
      feature: "Exclusive PyCon ID Merchandise",
    },
    {
      feature: "Lunch and Ice Breaking",
    },
  ],
  [
    {
      feature: "Online and in person access",
    },
    {
      feature: "Exclusive PyCon ID Merchandise",
    },
    {
      feature: "Lunch and Ice Breaking",
    },
  ],
  [
    {
      feature: "Online and in person access",
    },
    {
      feature: "Exclusive PyCon ID Merchandise",
    },
    {
      feature: "Lunch and Ice Breaking",
    },
  ],
  [
    {
      feature: "Online Access Only",
    },
    {
      feature: "Get Oppurtunity to Check Out Exclusive PyCon ID Merchandise.",
    },
  ],
  [
    {
      feature: "Online Access Only",
    },
    {
      feature: "Get Oppurtunity to Check Out Exclusive PyCon ID Merchandise.",
    },
  ],
]
