import { Link } from "@remix-run/react"
import type { Schedule } from "~/routes/schedule._index"
import { Calendar } from "lucide-react"
import slugify from "slugify"

import { getAvatarInitials } from "~/libs/getAvatarInitials"

import { Button } from "../ui"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { PodiumCategories, PodiumSection } from "./card"

type ScheduleDialogProps = React.PropsWithChildren<{
  id: string
  data?: Schedule
}>

function getTopicTags(tags?: string | null) {
  return tags ? tags.split(",").map((a) => slugify(a, "_")) : []
}

export function ScheduleDialog({ data, children }: ScheduleDialogProps) {
  if (!data) return children

  const { speaker, sessionName, id, day, start, end, roomName } = data

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-6 text-2xl [text-wrap:balance]">
            {speaker?.title ?? sessionName}
          </DialogTitle>
          {speaker?.description ? (
            <>
              <Link
                to={`/profile/${speaker.user?.id}`}
                className="group !mb-8 flex items-center gap-2"
              >
                <Avatar>
                  <AvatarImage src={speaker.user?.avatar ?? ""} />
                  <AvatarFallback>
                    {getAvatarInitials(
                      speaker.user?.firstName,
                      speaker.user?.lastName,
                    )}
                  </AvatarFallback>
                </Avatar>
                <span className="group-hover:underline">{`${speaker.user?.firstName} ${speaker.user?.lastName}`}</span>
              </Link>
              <div className="!mb-4 space-y-3">
                <PodiumSection
                  podiumName={String(roomName)}
                  tags={[speaker.language ?? "", speaker.audience_level ?? ""]}
                />
                <PodiumCategories
                  categories={getTopicTags(speaker.topic_tags)}
                />
              </div>
            </>
          ) : null}
          <div className="flex gap-4">
            <div className="flex">
              <Calendar className="mr-2" />
              {day}
            </div>
            <div className="flex">
              {start} - {end} (WIB)
            </div>
          </div>
          {speaker?.description ? (
            <DialogDescription className="border-t border-border py-6">
              <h2 className="mb-2 text-lg font-semibold">Topic</h2>
              {speaker?.description}
            </DialogDescription>
          ) : null}
        </DialogHeader>
        {data.enabled ? (
          <Link className="mt-3" to={id ? `/stream/${id}` : "/login"}>
            <Button>Watch Now</Button>
          </Link>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
