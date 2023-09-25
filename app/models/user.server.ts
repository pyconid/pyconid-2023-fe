import type { User } from "@prisma/client"
import { Prisma } from "@prisma/client"
import { prisma } from "~/db.server"
import type { userUpdateSchema } from "~/schemas"
import type { z } from "zod"

export const query = {
  getById({ id }: Pick<User, "id">) {
    return prisma.user.findUnique({
      where: { id },
      include: {
        role: true,
        IndustryCategory: true,
      },
    })
  },
  getByToken({ token }: Pick<User, "token">) {
    return prisma.user.findFirst({
      where: { token },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
      },
    })
  },
}

export const mutation = {
  async createDefaultPublicFields(id: string) {
    await prisma.user.update({
      where: { id },
      data: {
        PublicFields: {
          create: {
            address: false,
            company: false,
            gender: false,
            phone: false,
            socials: false,
          },
        },
      },
    })
  },
  async update({
    id,
    firstName,
    lastName,
    company,
    email,
  }: z.infer<typeof userUpdateSchema>) {
    try {
      const user = await prisma.user.update({
        where: { id },
        data: { firstName, lastName, email },
      })

      return {
        user,
        error: null,
      }
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        return {
          error: {
            email: `Email ${email} might already used`,
          },
        }
      }
    }
  },
}
