import { redirect } from "@remix-run/node"

export function loader() {
  return redirect(
    "https://www.tokopedia.com/pyconid/merchandise-package-pycon-id-2023",
  )
}
