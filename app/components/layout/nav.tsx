import { useEffect, useState } from "react"
import { Link, useLocation } from "@remix-run/react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

import { cn } from "~/libs"
import { useRootLoader } from "~/hooks/useRootLoader"

import { Button } from "../ui"
import { UserNav } from "./user-nav"

export function Nav() {
  const { userSession } = useRootLoader()

  const [isOpen, setIsOpen] = useState(false)
  const navLink = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/schedule",
      label: "Schedule",
    },
    {
      to: "/cfp",
      label: "Call for Proposal",
    },
    {
      to: "/tickets",
      label: "Tickets",
    },
    {
      to: "/coc",
      label: "Code of Conduct",
    },
    {
      to: "/sponsor",
      label: "Sponsorship",
    },
    {
      to: "/org",
      label: "Organizer",
    },
  ]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [screenWidth, setScreenWidth] = useState(0)
  const handleResize = () => {
    setScreenWidth(window.innerWidth)
    setIsOpen(false)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])
  const location = useLocation()
  const pathName = location.pathname

  return (
    <CollapsiblePrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <div
        className={cn(
          "fixed z-10 flex w-full justify-center px-4 lg:px-6",
          isOpen && "px-0",
        )}
      >
        <nav
          className={cn(
            "mt-3 block w-full max-w-screen-2xl rounded-full bg-primary-100 px-10 lg:mt-6 lg:h-24 lg:px-4 xl:px-0 2xl:px-5",
            isOpen && "mt-0 w-full rounded-none px-5",
          )}
        >
          <div
            className={cn(
              "flex h-[60px] w-full justify-between lg:h-full lg:pl-14",
              isOpen && "mt-2",
            )}
          >
            <div className="h-full flex-none">
              <Link to="/">
                <img src="/logo.png" className="h-full" alt="PyCon ID 2023" />
              </Link>
            </div>
            <CollapsiblePrimitive.Trigger asChild>
              <button
                type="button"
                className="focus:ring-primary-500 inline-flex items-center justify-center rounded-md p-2 text-lg focus:outline-none focus:ring-2 focus:ring-inset lg:hidden"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <img
                    src="/close-icon.svg"
                    className="object w-[30px]"
                    alt="PyCon ID 2023"
                  />
                ) : (
                  <img
                    src="/bar-icon.svg"
                    className="object w-[30px]"
                    alt="PyCon ID 2023"
                  />
                )}
              </button>
            </CollapsiblePrimitive.Trigger>

            <ul className={cn("hidden lg:flex lg:gap-6")}>
              {navLink.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.to}
                    className="flex items-center px-1 pt-1 text-center text-xs font-medium xl:text-base"
                  >
                    <span
                      className={`flex w-full items-center text-[#757575] ${
                        pathName === item.to
                          ? "font-semibold text-primary"
                          : "font-normal"
                      }  hover:text-primary`}
                    >
                      {item.label}
                    </span>
                  </Link>
                )
              })}
            </ul>
            <div className="pr-18 hidden flex-none items-center justify-end gap-2 text-lg lg:mr-6 lg:flex lg:text-xs xl:mr-14">
              {userSession ? (
                <UserNav />
              ) : (
                <>
                  <Button className="h-10 text-xs" asChild>
                    <Link to="/login">Sign In</Link>
                  </Button>
                  <Button className="h-10 text-xs" variant="outline" asChild>
                    <Link to="/register">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
          <CollapsiblePrimitive.Content>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:hidden lg:px-8">
              <div id="mobile-menu">
                <div className="space-y-1 pb-3 pt-2">
                  {navLink.map((item, index) => {
                    return (
                      <div key={index}>
                        <Link
                          to={item.to}
                          className="block pl-3 pr-4 text-base font-medium text-[#757575] sm:pl-5 sm:pr-6"
                        >
                          <span
                            className={`flex h-full w-full items-center py-2 ${
                              pathName === item.to
                                ? "font-semibold text-primary"
                                : "font-normal"
                            } `}
                          >
                            {item.label}
                          </span>
                        </Link>
                      </div>
                    )
                  })}
                </div>
                <div className="flex items-center justify-center gap-3 p-4">
                  {userSession ? (
                    <UserNav />
                  ) : (
                    <>
                      <Button className="h-10 text-xs" asChild>
                        <Link to="/login">Sign In</Link>
                      </Button>
                      <Button
                        className="h-10 text-xs"
                        variant="outline"
                        asChild
                      >
                        <Link to="/register">Sign Up</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </CollapsiblePrimitive.Content>
        </nav>
      </div>
    </CollapsiblePrimitive.Root>
  )
}
