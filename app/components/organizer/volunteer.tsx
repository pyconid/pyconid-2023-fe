import { Link } from "@remix-run/react"

import { cn } from "~/libs"
import { getAvatarInitials } from "~/libs/getAvatarInitials"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

type VolunteerCardProps = React.HTMLAttributes<HTMLDivElement> & {
  firstName: string
  lastName: string
  avatar?: string
  github: {
    url: string | null
  }
  twitter: {
    url: string | null
  }
  id: string
}

function VolunteerCard({
  firstName,
  lastName,
  avatar,
  github,
  twitter,
  id,
}: VolunteerCardProps) {
  const initials = getAvatarInitials(firstName, lastName)

  return (
    <Link to={`/profile/${id}`} target="_blank">
      <div className="flex items-center  gap-3 rounded-2xl border-2 border-solid border-primary p-4">
        <Avatar className="rounded-lg ">
          <AvatarImage src={avatar} alt={firstName} />
          <AvatarFallback className="rounded-lg">{initials}</AvatarFallback>
        </Avatar>

        <div>
          <div className="w-44 space-y-2">
            <p className="truncate capitalize">{`${firstName} ${lastName}`}</p>
            <div className=" flex gap-3">
              <a
                target="_blank"
                className={cn(
                  github ? "opacity-1" : "pointer-events-none opacity-50",
                )}
                rel="noopener noreferrer"
                href={github?.url ? github?.url : "#"}
              >
                <img src="icons/github.svg" alt="Github" />
              </a>

              <a
                target="_blank"
                className={cn(
                  twitter ? "opacity-1" : "pointer-events-none opacity-50",
                )}
                rel="noopener noreferrer"
                href={twitter?.url ? twitter?.url : "#"}
              >
                <img src="icons/x.svg" alt="X" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export { VolunteerCard }
