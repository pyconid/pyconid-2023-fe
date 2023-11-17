import { redirect } from "@remix-run/node"

export function loader() {
  return redirect(
    "https://drive.google.com/drive/folders/11YZ-2dhgA0X9wsjJKsv8mLlBf1TX8-e8?usp=sharing",
  )
}
