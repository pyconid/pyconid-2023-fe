import type { Schedule } from "~/routes/schedule._index"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

type ScheduleDialogProps = React.PropsWithChildren<{
  id: string
  data?: Schedule
}>

export function ScheduleDialog({ data, children }: ScheduleDialogProps) {
  if (!data) return children

  const { speaker, sessionName } = data

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-6 text-2xl [text-wrap:balance]">
            {speaker?.title ?? sessionName}
          </DialogTitle>
          <DialogDescription className="border-t border-border py-6">
            <h2 className="mb-2 text-lg font-semibold">Topic</h2>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
          <DialogDescription className="border-t border-border py-6">
            <h2 className="mb-2 text-lg font-semibold">Topic</h2>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
