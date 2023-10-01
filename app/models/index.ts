import { industryCategory } from "./industry-category.server"
import { jobCategory } from "./job-category.server"
import { participantType } from "./participant-type.server"
import { ticketTransaction } from "./ticket-transaction.server"
import { userConnection } from "./user-connection.server"
import { mutation as userMutation, query as userQuery } from "./user.server"

export const models = {
  industryCategory,
  ticketTransaction,
  jobCategory,
  participantType,
  user: { query: userQuery, mutation: userMutation },
  userConnection,
}
