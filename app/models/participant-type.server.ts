import type { ParticipantType } from "@prisma/client"
import { prisma } from "~/db.server"

export const fields = {
  public: {
    symbol: true,
    name: true,
  },
}

export const query = {
  getAll() {
    return prisma.participantType.findMany({
      select: fields.public,
    })
  },
  getBySymbol({ symbol }: { symbol: ParticipantType["symbol"] }) {
    return prisma.participantType.findFirst({
      where: { symbol },
    })
  },
}

export const participantType = { query }
