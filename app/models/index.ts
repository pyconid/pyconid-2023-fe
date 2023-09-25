import { industryCategory } from "./industry-category.server"
import { jobCategory } from "./job-category.server"
import { participantType } from "./participant-type.server"
import { mutation as userMutation, query as userQuery } from "./user.server"

export const models = {
  industryCategory,
  jobCategory,
  participantType,
  user: { query: userQuery, mutation: userMutation },
}
