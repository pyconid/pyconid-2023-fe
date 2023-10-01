import { format, parse } from "date-fns"
import { utcToZonedTime } from "date-fns-tz"

export const formatInUTC = (date: string, fmt: string) => {
  const zonedDate = utcToZonedTime(date, "UTC")
  const parsed = parse(zonedDate, fmt)
}
