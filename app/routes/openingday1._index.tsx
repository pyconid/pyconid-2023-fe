import { redirect } from "@remix-run/node"

export function loader() {
  return redirect(
    "https://docs.google.com/presentation/d/1MjIa5n9gYeCw5y5uu_SYJ4c19dObFsJIhDNRCpVBEL8/edit?usp=sharing",
  )
}
