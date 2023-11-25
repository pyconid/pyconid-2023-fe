import { redirect } from "@remix-run/node"

export function loader() {
  return redirect(
    "https://drive.google.com/drive/folders/1duNoH88xVN_0fRB77sn6EzNqDLtGeSYP?usp=sharing",
  )
}
