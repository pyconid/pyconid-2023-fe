import { Footer, Nav } from "~/components"

interface Props {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-[1] mt-20 lg:mt-36">{children}</main>
      <Footer />
    </div>
  )
}
