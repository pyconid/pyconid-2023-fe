import type { User } from "@prisma/client"
import { Prisma } from "@prisma/client"
import { prisma } from "~/db.server"
import { parseISO } from "date-fns"

type UserUpdateParams = {
  user: {
    id: string
    firstName: string
    lastName?: string
    email?: string
    organisation?: string
    tShirtSize?: string
    gender?: string
    dateOfBirth?: string
    phone?: string
    country?: string
    state?: string
    city?: string
  }
  industryCategoryId?: string
  jobCategoryId?: string
  compliance: {
    codeOfConduct: boolean
    termsOfService: boolean
  }
  publicFields?: {
    company?: boolean
    gender?: boolean
    phone?: boolean
    address?: boolean
    socials?: boolean
  }
}

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
  async getByToken({ token }: Pick<User, "token">) {
    const user = await prisma.user.findFirst({
      where: { token },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        organisation: true,
        industryCategoryId: true,
        jobCategoryId: true,
        participantTypeId: true,
        jobTitle: true,
        tShirtSize: true,
        gender: true,
        dateOfBirth: true,
        phone: true,
        bio: true,
        interest: true,
        lookingFor: true,
        country: true,
        state: true,
        city: true,
        address: true,
        website: true,
        github: true,
        facebook: true,
        instagram: true,
        linkedin: true,
        twitter: true,
        PublicFields: {
          select: {
            address: true,
            company: true,
            gender: true,
            phone: true,
            socials: true,
          },
        },
        compliance: {
          select: {
            codeOfConduct: true,
            termsOfService: true,
          },
        },
      },
    })

    return user
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
  async createDefaultCompliance(id: string) {
    await prisma.user.update({
      where: { id },
      data: {
        compliance: {
          create: {
            codeOfConduct: false,
            termsOfService: false,
          },
        },
      },
    })
  },
  async update({
    user,
    industryCategoryId,
    jobCategoryId,
    compliance,
    publicFields,
  }: UserUpdateParams) {
    try {
      const updatedUser = await prisma.user.update({
        where: { id: user.id },
        select: {
          id: true,
        },
        data: {
          ...user,
          dateOfBirth: user.dateOfBirth
            ? parseISO(user.dateOfBirth)
            : undefined,
          compliance: {
            update: compliance,
          },
          IndustryCategory: {
            connect: { id: industryCategoryId },
          },
          JobCategory: {
            connect: { id: jobCategoryId },
          },
          PublicFields: {
            update: publicFields,
          },
        },
      })

      console.log({ updatedUser })

      return {
        updatedUser,
        error: null,
      }
    } catch (error) {
      console.log("USER SERVER", error)

      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        return {
          error: {
            email: `Email ${user.email} might already used`,
          },
        }
      }
    }
  },
}
