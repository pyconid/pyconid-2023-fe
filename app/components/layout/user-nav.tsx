import { Link } from "@remix-run/react"

import { getAvatarInitials } from "~/libs/getAvatarInitials"
import { useRootLoader } from "~/hooks/useRootLoader"

import { Button } from "../ui"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

export function UserNav() {
  const { userProfile } = useRootLoader()
  const initials = getAvatarInitials(
    userProfile?.firstName,
    userProfile?.lastName,
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-12 w-12 rounded-full">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src={userProfile?.avatar}
              alt={userProfile?.firstName}
            />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {userProfile?.displayName ??
                `${userProfile?.firstName} ${userProfile?.lastName}`}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {userProfile?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to={`/profile/${userProfile?.id}`}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/account">Account Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/account/ticket">My Ticket</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/account/connections">Connections</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/logout">Log out</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
