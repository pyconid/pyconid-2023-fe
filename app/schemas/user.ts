import { z } from "zod"

const id = z.string().min(1, "id is required")

const firstName = z
  .string()
  .min(1, "First name is required")
  .max(50, "First name limited to 50 characters")

const lastName = z
  .string()
  .min(1, "Last name is required")
  .max(50, "Last name limited to 50 characters")

const email = z
  .string()
  .min(1, "Email is required")
  .email("Invalid Email format")

const password = z
  .string()
  .min(8, "Password require at least 8 characters")
  .max(100, "Password max length limited to 100 characters")

const company = z.string().optional()

const industryCategorySymbol = z.string().optional()

const jobCategorySymbol = z.string().min(1, "Job category is required")

const tShirtSize = z.string().optional()

const gender = z.string().optional()

const dateOfBirth = z.string().optional()

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
)

const phone = z.string().regex(phoneRegex, "Invalid phone number")

const bio = z.string().optional()

const interest = z.string().optional()

const lookingFor = z.string().optional()

const country = z.string().optional()
const state = z.string().optional()
const city = z.string().optional()
const address = z.string().optional()

const website = z.string().optional()
const github = z.string().optional()
const facebook = z.string().optional()
const linkedin = z.string().optional()
const twitter = z.string().optional()
const instagram = z.string().optional()

const participantTypeSymbol = z.string().min(1, "Participant type is required")

const publicFields = z.object({
  company: z.boolean().optional(),
  gender: z.boolean().optional(),
  phone: z.boolean().optional(),
  address: z.boolean().optional(),
  socials: z.boolean().optional(),
})

const codeOfConduct = z.boolean()
const termsOfService = z.boolean()

const userSigninSchema = z.object({
  email,
  password,
})

const userUpdateSchema = z.object({
  id,
  firstName,
  lastName,
  email,
  company,
  industryCategorySymbol,
  jobCategorySymbol,
  tShirtSize,
  gender,
  dateOfBirth,
  phone,
  bio,
  interest,
  lookingFor,
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
  codeOfConduct,
  termsOfService,
  publicFields,
})

export { userUpdateSchema, userSigninSchema }
