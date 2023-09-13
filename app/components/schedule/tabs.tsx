import { createContext, useContext, useEffect, useRef, useState } from "react"

import { cn, throttle } from "~/libs"

const ScheduleTabsContext = createContext<{
  activeTabs?: string
  setActiveTabs: (active: string) => void
} | null>(null)

type ScheduleTabsProviderProps = {
  children: React.ReactNode
  defaultActive?: string
}

const ScheduleTabsProvider = ({
  children,
  defaultActive = "",
}: ScheduleTabsProviderProps) => {
  const [activeTabs, setActiveTabs] = useState<string>(defaultActive)
  return (
    <ScheduleTabsContext.Provider value={{ activeTabs, setActiveTabs }}>
      {children}
    </ScheduleTabsContext.Provider>
  )
}

const useScheduleTabs = () => {
  const context = useContext(ScheduleTabsContext)

  if (!context) {
    throw new Error(
      "useScheduleTabs must be used inside the ScheduleTabsProvider",
    )
  }

  return context
}

type TabItemProps = React.HTMLAttributes<HTMLDivElement> & {
  active?: boolean
}

const TabItem = ({ children, className, active, ...props }: TabItemProps) => {
  return (
    <div
      className={cn(
        "cursor-pointer border-2 border-primary bg-white px-8 py-4 text-2xl transition-colors",
        "hover:bg-primary hover:text-white",
        active && "bg-primary text-white ",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

type ScheduleTabsProps = {
  tabs: {
    id: string
    title: string
  }[]
}

const ScheduleTabs = ({ tabs }: ScheduleTabsProps) => {
  const { activeTabs } = useScheduleTabs()
  return (
    <div className="sticky top-[148px] mx-auto mb-8 mt-16 flex w-full items-center justify-center gap-10">
      {tabs.map(({ id, title }) => (
        <TabItem
          key={id}
          active={activeTabs === id}
          onClick={() => {
            const el = document.querySelector(`[data-st=${id}]`)
            if (el) el.scrollIntoView({ behavior: "smooth" })
          }}
        >
          {title}
        </TabItem>
      ))}
    </div>
  )
}

type TabContentProps = {
  children: string
  contentFor: string
  offset?: number
}

const TabContent = ({
  children,
  contentFor,
  offset = -450,
}: TabContentProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { setActiveTabs } = useScheduleTabs()

  useEffect(() => {
    const scrollSpyHandler = throttle(() => {
      const section = ref.current
      if (!section) return
      if (section.getBoundingClientRect().top + offset < 0) {
        setActiveTabs(contentFor)
      }
    }, 200)

    window.addEventListener("scroll", scrollSpyHandler)
    scrollSpyHandler()
    return () => {
      window.removeEventListener("scroll", scrollSpyHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={ref} data-st={contentFor} className="h-[800px] scroll-m-80">
      {children}
    </div>
  )
}

ScheduleTabs.Content = TabContent

export { ScheduleTabs, ScheduleTabsProvider }
