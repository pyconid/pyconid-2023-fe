import { redirect } from "@remix-run/node"

export function loader() {
  return redirect(
    "https://docs.google.com/presentation/d/1Wl2rcbl49q5PVb8uFr8_H9r7BRVON9RHodYJEUVpQ04/edit?usp=sharing",
  )
}
