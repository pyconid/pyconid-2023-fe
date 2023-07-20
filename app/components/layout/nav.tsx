import { useState } from "react"
import { Link, useLocation } from "@remix-run/react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"

export function Nav() {
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
      label: "Call for proposal",
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

  const location = useLocation()
  const pathName = location.pathname

  return (
    <CollapsiblePrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <nav className="fixed mx-auto block w-full bg-primary-100 px-6">
        <CollapsiblePrimitive.Trigger className="absolute right-3 top-8 -ml-2 mr-2 flex items-center md:hidden">
          <button
            type="button"
            className="focus:ring-primary-500 inline-flex items-center justify-center rounded-md p-2 text-lg text-gray-400 hover:bg-blue-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>

            {isOpen ? (
              <Cross2Icon className={"w-15 block h-6"} />
            ) : (
              <HamburgerMenuIcon className={"w-15 block h-6 "} />
            )}
          </button>
        </CollapsiblePrimitive.Trigger>
        <div className="flex w-full md:justify-evenly">
          <div className="w-full sm:w-[10%] lg:pl-8">
            <Link to="/">
              <img
                src="/logo.png"
                width={100}
                height={45}
                className="object"
                alt="PyCon ID 2023"
              />
            </Link>
          </div>

          <div className="hidden md:ml-6 md:flex md:space-x-8">
            {navLink.map((item, index) => {
              return (
                <div key={index} className="item-center flex">
                  <Link
                    to={item.to}
                    className="inline-flex items-center px-1 pt-1 text-lg font-medium"
                  >
                    <span
                      className={`flex h-full w-full items-center ${
                        pathName === item.to ? "font-semibold" : "font-normal"
                      } text-primary hover:font-semibold`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </div>
              )
            })}
          </div>
          <div className="hidden items-center text-lg md:ml-6 md:flex md:space-x-8">
            <button className="text-md h-12 w-40 rounded-full bg-primary font-bold text-white">
              Sign Up
            </button>
          </div>
        </div>
        <CollapsiblePrimitive.Content className="mx-auto max-w-7xl px-4 sm:px-6 lg:hidden lg:px-8">
          <div id="mobile-menu">
            <div className="space-y-1 pb-3 pt-2">
              {navLink.map((item, index) => {
                return (
                  <div key={index}>
                    <Link
                      to={item.to}
                      className="block pl-3 pr-4 text-base font-medium text-primary sm:pl-5 sm:pr-6"
                    >
                      <span
                        className={`flex h-full w-full items-center py-2 ${
                          pathName === item.to ? "font-semibold" : "font-normal"
                        } `}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </div>
                )
              })}
            </div>
            <div className="flex items-center justify-center p-4">
              <button className="text-md h-10 w-[152px] rounded-full bg-primary font-bold text-white">
                Sign Up
              </button>
            </div>
          </div>
        </CollapsiblePrimitive.Content>
      </nav>
    </CollapsiblePrimitive.Root>
  )
}
