import type { jobCategory } from "@prisma/client"

export type DataJobCategories = Pick<jobCategory, "name" | "symbol">

export const dataJobCategories: DataJobCategories[] = [
  {
    symbol: "TECH_SPECIALIST",
    name: "Tech - Specialist",
  },
  {
    symbol: "NON_TECH",
    name: "Non Tech",
  },
  {
    symbol: "TECH_MANAGING",
    name: "Tech Managing",
  },
  {
    symbol: "STUDENT",
    name: "Student",
  },
  {
    symbol: "TEACHER_LECTURER",
    name: "Teacher / Lecturer",
  },
  {
    symbol: "ENTREPRENEUR",
    name: "Entrepreneur",
  },
  {
    symbol: "OTHERS",
    name: "Others",
  },
]
