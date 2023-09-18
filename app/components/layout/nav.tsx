import { useEffect, useState } from "react"
import { Link, useLocation } from "@remix-run/react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

import { Button } from "../ui"

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
      label: "Call for Proposal",
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
      <nav
        className={
          isOpen
            ? "fixed z-10 mx-auto block  w-full  bg-primary-100 px-6 sm:px-14 md:px-14 lg:h-24 lg:px-4 xl:px-0 2xl:ml-10 2xl:mr-10  2xl:px-0"
            : "lg:mr[5%] fixed z-10 mx-auto  ml-3  mt-3 block w-[95%] rounded-full bg-primary-100 px-6 sm:ml-8 sm:px-14 md:ml-6 md:px-14 lg:ml-[4%] lg:mt-6 lg:h-24 lg:w-[90%] lg:px-4 xl:px-0 2xl:ml-20 2xl:px-0"
        }
      >
        <div className="flex w-full  justify-between lg:h-full lg:pl-14 ">
          <div className="h-[60px] w-full lg:h-[100px] lg:w-[10%] lg:pl-0 xl:w-[15%] xl:pl-0 2xl:pl-0">
            <Link to="/">
              <img
                src="/logo.png"
                className="object w-[60px] lg:w-[100px]"
                alt="PyCon ID 2023"
              />
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

          <div
            className={`hidden md:ml-6 md:space-x-8 lg:flex lg:w-[60%] lg:space-x-5 xl:ml-0 xl:w-[60%] xl:space-x-8  ${
              screenWidth >= 1536 && screenWidth <= 1564
                ? "2xl:w-[65%] "
                : "2xl:ml-6 2xl:w-[60%] "
            }`}
          >
            {navLink.map((item, index) => {
              return (
                <div key={index} className="item-center flex">
                  <Link
                    to={item.to}
                    className="xl:text-md inline-flex items-center px-1 pt-1 text-center text-xs font-medium 2xl:text-lg"
                  >
                    <span
                      className={`flex h-full w-full items-center text-[#757575] ${
                        pathName === item.to
                          ? "font-semibold text-primary"
                          : "font-normal"
                      }  hover:text-primary`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </div>
              )
            })}
          </div>
          <div className="pr-18 hidden items-center justify-end text-lg lg:mr-6 lg:flex lg:w-[15%] lg:space-x-8 lg:text-xs xl:mr-14 xl:w-[10%]">
            <Button className="h-10 cursor-not-allowed bg-primary text-xs">
              Sign Up(Soon)
            </Button>
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
              <div className="flex items-center justify-center p-4">
                <Button className="h-10 cursor-not-allowed bg-primary text-xs">
                  Sign Up(Soon)
                </Button>
              </div>
            </div>
          </div>
        </CollapsiblePrimitive.Content>
      </nav>
    </CollapsiblePrimitive.Root>
  )
}
