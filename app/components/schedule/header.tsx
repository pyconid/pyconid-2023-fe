import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/libs"

const headerVariants = cva(
  "sticky top-[230px] mb-4 w-full rounded-3xl lg:rounded-2xl py-4 px-8 text-white h-[72px] flex items-center",
  {
    variants: {
      variant: {
        main: "bg-primary text-left text-xl lg:text-3xl font-sans",
        default:
          "bg-zinc-800 text-center text-3xl lg:text-4xl font-brand justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

type HeaderProps = {
  title: string
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof headerVariants>

const Header = ({ title, variant, className }: HeaderProps) => {
  return (
    <div className={cn(headerVariants({ variant, className }))}>{title}</div>
  )
}

export { Header }
