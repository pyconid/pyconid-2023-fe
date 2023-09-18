import type { IndustryCategory } from "@prisma/client"
import { prisma } from "~/db.server"

export const fields = {
  public: {
    symbol: true,
    name: true,
  },
}

export const query = {
  getAll() {
    return prisma.industryCategory.findMany({
      select: fields.public,
    })
  },
  getBySymbol({ symbol }: { symbol: IndustryCategory["symbol"] }) {
    return prisma.industryCategory.findFirst({
      where: { symbol },
    })
  },
}

export const industryCategory = { query }
