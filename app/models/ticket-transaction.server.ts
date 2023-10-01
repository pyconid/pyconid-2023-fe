import type { TicketTransaction } from "@prisma/client"
import { prisma } from "~/db.server"

export const query = {
  getById({ id }: { id: TicketTransaction["id"] }) {
    return prisma.ticketTransaction.findFirst({
      where: { id },
      select: {
        id: true,
        createdAt: true,
        status: true,
        transactionId: true,
        totalPrice: true,
        ticket: {
          select: {
            name: true,
            price: true,
          },
        },
        user: {
          select: {
            firstName: true,
            lastName: true,
            displayName: true,
            avatar: true,
            email: true,
            phone: true,
          },
        },
      },
    })
  },
}

export const ticketTransaction = { query }
