import type { Prisma, User } from "@prisma/client"
import { prisma } from "~/db.server"

export type Connections = Prisma.PromiseReturnType<
  typeof query.getConnectionByUserId
>

export const query = {
  getConnectionByUserId({ id }: Pick<User, "id">) {
    return prisma.user.findUnique({
      where: { id },
      select: {
        connecting: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            avatar: true,
            displayName: true,
          },
        },
      },
    })
  },
}

export const mutation = {
  async connect({ id, userId }: { id: string; userId: string }) {
    return prisma.user.update({
      where: { id },
      data: {
        connecting: {
          connect: {
            id: userId,
          },
        },
      },
    })
  },
  async disconnect({ id, userId }: { id: string; userId: string }) {
    return prisma.user.update({
      where: { id },
      data: {
        connecting: {
          disconnect: {
            id: userId,
          },
        },
      },
    })
  },
}

export const userConnection = { query, mutation }
