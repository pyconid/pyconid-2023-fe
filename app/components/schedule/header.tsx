import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/libs"

const headerVariants = cva(
  "sticky top-[230px] mb-4 w-full rounded-3xl lg:rounded-2xl py-4 px-8 text-white h-[70px] flex items-center justify-between",
  {
    variants: {
      variant: {
        main: "bg-primary text-sm text-left flex-col lg:flex-row h-[70px]  lg:text-xl font-sans",
        default:
          "bg-zinc-800 text-center text-lg lg:text-2xl font-brand justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

type HeaderProps = {
  title: string
  date?: string
  start?: string
  end?: string
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof headerVariants>

const Header = ({
  title,
  variant,
  date,
  start,
  end,
  className,
}: HeaderProps) => {
  return (
    <div className={cn(headerVariants({ variant, className }))}>
      <h3>{title}</h3>
      {date ? (
        <p>
          {date} • {start} – {end}
        </p>
      ) : null}
    </div>
  )
}

export { Header }
