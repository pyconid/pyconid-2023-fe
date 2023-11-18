
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
}



function VolunteerCard({
  firstName,
  lastName,
  avatar,
  github,
  twitter,
}: VolunteerCardProps) {
  const initials = getAvatarInitials(firstName, lastName)

  return (
    <div className="flex gap-3  items-center rounded-2xl border-2 border-solid border-primary p-4">

      <Avatar className="rounded-lg ">
        <AvatarImage src={avatar} alt={firstName} />
        <AvatarFallback className="rounded-lg">
          {initials}
        </AvatarFallback>
      </Avatar>

      <div>
        <div className="w-44 space-y-2">
          <p className="capitalize truncate">{`${firstName} ${lastName}`}</p>
          <div className=" flex gap-3">

            <a
              target="_blank"
              className={cn(github ? "opacity-1" : "opacity-50 pointer-events-none")}
              rel="noopener noreferrer"
              href={github?.url ? github?.url : "#"}
            >
              <img src="icons/github.svg" alt="Github" />
            </a>


            <a
              target="_blank"
              className={cn(twitter ? "opacity-1" : "opacity-50 pointer-events-none")}
              rel="noopener noreferrer"
              href={twitter?.url ? twitter?.url : "#"}
            >
              <img src="icons/x.svg" alt="X" />
            </a>

          </div>

        </div>
      </div>
    </div>
  )
}

export { VolunteerCard }
