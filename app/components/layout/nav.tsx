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
      <nav className="fixed mx-auto block w-full bg-primary-100 px-6 sm:px-14 md:px-14 lg:h-24 lg:px-4 xl:px-44">
        <div className="flex w-full  justify-between lg:h-full lg:pl-14 ">
          <div className="h-[100px] w-full lg:w-[10%] lg:pl-0 xl:w-[10%] xl:pl-14">
            <Link to="/">
              <img
                src="/logo.png"
                className="object w-[100px]"
                alt="PyCon ID 2023"
              />
            </Link>
          </div>
          <CollapsiblePrimitive.Trigger>
            <button
              type="button"
              className="focus:ring-primary-500 inline-flex items-center justify-center rounded-md p-2 text-lg text-gray-400 hover:bg-blue-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset lg:hidden"
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

          <div className="hidden md:ml-6 md:space-x-8 lg:flex lg:w-[40%] lg:space-x-4 xl:ml-6 xl:space-x-8 2xl:w-[60%]">
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
          <div className="pr-18 hidden items-center justify-end text-lg lg:ml-6 lg:flex lg:w-[30%] lg:space-x-8 xl:mr-14 xl:w-[10%]">
            <button className="text-md h-12 w-40 cursor-not-allowed rounded-full bg-primary font-bold text-white opacity-50">
              Sign Up <span className="text-xs">(soon)</span>
            </button>
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
                        className="block pl-3 pr-4 text-base font-medium text-primary sm:pl-5 sm:pr-6"
                      >
                        <span
                          className={`flex h-full w-full items-center py-2 ${
                            pathName === item.to
                              ? "font-semibold"
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
              <div className="flex items-center justify-center p-4">
                <button className="text-md h-10 w-[152px] cursor-not-allowed rounded-full bg-primary font-bold text-white opacity-50">
                  Sign Up <span className="text-xs">(soon)</span>
                </button>
              </div>
            </div>
          </div>
        </CollapsiblePrimitive.Content>
      </nav>
    </CollapsiblePrimitive.Root>
  )
}
