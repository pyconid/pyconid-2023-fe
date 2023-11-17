import type { User } from "@prisma/client"
import { Prisma } from "@prisma/client"
import { prisma } from "~/db.server"
import { parseISO } from "date-fns"

import { sanitizeSocials } from "~/libs/sanitize-socials"
import { lookingForData } from "~/data/looking-for"

type UserUpdateParams = {
  user: {
    id: string
    firstName: string
    lastName?: string | null
    email?: string
    organisation?: string | null
    tShirtSize?: string | null
    gender?: string | null
    dateOfBirth?: string
    phone?: string | null
    country?: string | null
    state?: string | null
    city?: string | null
  }
  industryCategoryId?: string
  jobCategoryId?: string
  compliance: {
    codeOfConduct: boolean
    // termsOfService: boolean
  }
  publicFields?: {
    company?: boolean
    email?: boolean
    lookingFor?: boolean
    gender?: boolean
    phone?: boolean
    address?: boolean
    socials?: boolean
    jobCategories?: boolean
  }
}

const publicFields = {
  id: true,
  email: true,
  avatar: true,
  firstName: true,
  lastName: true,
  displayName: true,
  organisation: true,
  industryCategoryId: true,
  jobCategoryId: true,
  participantTypeId: true,
  jobTitle: true,
  gender: true,
  phone: true,
  bio: true,
  interest: true,
  lookingFor: true,
  offeringSearching: true,
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
      email: true,
      address: true,
      company: true,
      gender: true,
      phone: true,
      lookingFor: true,
      socials: true,
      jobCategories: true,
    },
  },
}

const privateFields = {
  tShirtSize: true,
  dateOfBirth: true,
  compliance: {
    select: {
      codeOfConduct: true,
      termsOfService: true,
    },
  },
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
  getByEmail({ email }: Pick<User, "email">) {
    return prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        displayName: true,
        avatar: true,
        participantType: true,
      },
    })
  },
  async getByToken({ token }: Pick<User, "token">) {
    return prisma.user.findFirst({
      where: { token },
      select: { ...publicFields, ...privateFields },
    })
  },
  async getPublicProfile({ id }: Partial<Pick<User, "id">>) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        ...publicFields,
        IndustryCategory: { select: { name: true } },
        JobCategory: { select: { name: true } },
        participantType: { select: { name: true } },
      },
    })

    if (!user) return null

    if (!user.PublicFields?.socials) {
      user.website = null
      user.facebook = null
      user.github = null
      user.twitter = null
      user.linkedin = null
      user.instagram = null
    }

    if (!user.PublicFields?.address) {
      user.address = null
      user.city = null
      user.state = null
      user.country = null
    }

    if (!user.PublicFields?.company) {
      user.organisation = null
      user.IndustryCategory = null
    }

    if (!user.PublicFields?.jobCategories) {
      user.JobCategory = null
      user.jobTitle = null
    }

    if (!user.PublicFields?.email) {
      user.email = ""
    }

    if (!user.PublicFields?.gender) {
      user.gender = null
    }

    if (!user.PublicFields?.phone) {
      user.phone = null
    }

    user.lookingFor =
      lookingForData.find((lf) => lf.symbol === user.lookingFor)?.name || null

    const { website, facebook, linkedin, twitter, instagram, github } = user

    const socials = sanitizeSocials({
      website,
      facebook,
      github,
      instagram,
      linkedin,
      twitter,
    })

    return {
      ...user,
      ...socials,
      participantType: user.participantType?.name ?? "Non Participant",
      industryCategory: user.IndustryCategory?.name,
      isSocialsPublic: user.PublicFields?.socials,
    }
  },
  async getTicketTransactions({ token }: { token: string }) {
    return await prisma.user.findFirst({
      where: { token },
      select: {
        firstName: true,
        lastName: true,
        displayName: true,
        avatar: true,
        ticketTransactions: {
          select: {
            id: true,
            createdAt: true,
            status: true,
            transactionId: true,
            ticket: {
              select: {
                name: true,
                price: true,
              },
            },
          },
        },
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
            email: false,
            address: false,
            company: false,
            gender: false,
            phone: false,
            socials: false,
            lookingFor: false,
            jobCategories: false,
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
            update: publicFields || {
              address: false,
              company: false,
              email: false,
              gender: false,
              phone: false,
              socials: false,
              lookingFor: false,
            },
          },
        },
      })

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
