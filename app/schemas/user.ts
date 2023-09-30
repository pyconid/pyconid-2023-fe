import { z } from "zod"

const id = z.string().min(1, "id is required")

const avatar = z.string().optional()

const firstName = z
  .string()
  .min(1, "First name is required")
  .max(50, "First name limited to 50 characters")

const lastName = z
  .string()
  .min(1, "Last name is required")
  .max(50, "Last name limited to 50 characters")

const displayName = z.string()

const email = z
  .string()
  .min(1, "Email is required")
  .email("Invalid Email format")

const password = z
  .string()
  .min(8, "Password require at least 8 characters")
  .max(100, "Password max length limited to 100 characters")

const organisation = z.string().min(1, "Company is required")
const jobTitle = z.string().min(1, "Job title is required")
const industryCategoryId = z.string().min(1, "Industry categories is required")
const jobCategoryId = z.string().min(1, "Job category is required")
const tShirtSize = z.string().min(1, "TShirt Size is required")
const gender = z.string().min(1, "Genders is required")
const dateOfBirth = z.string().min(1, "Date of birth is required")

const phoneRegex = new RegExp(/^\+[1-9]\d{1,14}$/)

const phone = z
  .string()
  .regex(phoneRegex, "Phone number must include country code (e.g +62)")

const bio = z.string()
const interest = z.string().optional().nullable().default(null)
const offeringSearching = z.string().optional().nullable().default(null)

const lookingFor = z.string().optional().nullable().default(null)

const country = z.string().optional().nullable().default(null)
const state = z.string().optional().nullable().default(null)
const city = z.string().optional().nullable().default(null)
const address = z.string().optional().nullable().default(null)

const website = z.string().optional().nullable().default(null)
const github = z.string().optional().nullable().default(null)
const facebook = z.string().optional().nullable().default(null)
const linkedin = z.string().optional().nullable().default(null)
const twitter = z.string().optional().nullable().default(null)
const instagram = z.string().optional().nullable().default(null)

const participantTypeSymbol = z.string().optional()

const publicFields = z
  .object({
    email: z.boolean().optional().default(false),
    company: z.boolean().optional().default(false),
    gender: z.boolean().optional().default(false),
    phone: z.boolean().optional().default(false),
    lookingFor: z.boolean().optional().default(false),
    address: z.boolean().optional().default(false),
    socials: z.boolean().optional().default(false),
  })
  .optional()

const codeOfConduct = z.boolean()
const termsOfService = z.boolean()

const compliance = z.object({
  codeOfConduct,
  termsOfService,
})

const userSigninSchema = z.object({
  email,
  password,
})

const userSignupSchema = z.object({
  firstName,
  lastName,
  email,
  password,
})

const userUpdateSchema = z.object({
  id,
  avatar,
  firstName,
  lastName,
  displayName,
  email: email.optional(),
  organisation,
  industryCategoryId,
  jobCategoryId,
  tShirtSize,
  gender,
  dateOfBirth,
  phone,
  jobTitle,
  bio,
  interest,
  lookingFor,
  offeringSearching,
  country,
  state,
  city,
  address,
  website,
  github,
  facebook,
  linkedin,
  twitter,
  instagram,
  participantTypeSymbol,
  compliance,
  publicFields,
})

export { userUpdateSchema, userSigninSchema, userSignupSchema }
