import type { Prisma, User } from "@prisma/client"
import { prisma } from "~/db.server"

import { sanitizeSocials } from "~/libs/sanitize-socials"
import { lookingForData } from "~/data/looking-for"

export type Connections = Prisma.PromiseReturnType<
  typeof query.getConnectionByUserId
>

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

export const query = {
  async getConnectionByUserId({ id }: Pick<User, "id">) {
    const res = await prisma.user.findUnique({
      where: { id },
      select: {
        connecting: {
          select: {
            ...publicFields,
            IndustryCategory: { select: { name: true } },
            JobCategory: { select: { name: true } },
            participantType: { select: { name: true } },
          },
        },
      },
    })

    if (!res) return null

    const test = res.connecting.map((user) => {
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
    })

    return test
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
