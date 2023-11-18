import { redirect } from "@remix-run/node"

export function loader() {
  return redirect(
    "https://docs.google.com/presentation/d/1g-ufX44xZqddsclV2juhMKJKm99S_Dl2QVzyrhsbC5s/edit?usp=sharing",
  )
}
