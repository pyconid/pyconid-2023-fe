import type { ParticipantType } from "@prisma/client"

type DataParticipantType = Pick<ParticipantType, "name" | "symbol">

export const dataParticipantType: DataParticipantType[] = [
  { symbol: "ONLINE_PARTICIPANT", name: "Online Participant" },
  { symbol: "IN_PERSON_PARTICIPANT", name: "In Person Participant" },
  { symbol: "PATRON", name: "Patron" },
  { symbol: "COMMUNITY", name: "Community" },
  { symbol: "VOLUNTEER", name: "Volunteer" },
  { symbol: "SPONSOR", name: "Sponsor" },
  { symbol: "SPEAKER", name: "Speaker" },
  { symbol: "KEYNOTE_SPEAKER", name: "Keynote Speaker" },
  { symbol: "COMMITEE", name: "Commitee" },
  { symbol: "NON_PARTICIPANT", name: "Non Participant" },
]
