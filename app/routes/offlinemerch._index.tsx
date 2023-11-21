import { redirect } from "@remix-run/node"

export function loader() {
  return redirect(
    "https://www.tokopedia.com/pyconid/paket-merchandise-general-in-person-pyconid-2023",
  )
}
