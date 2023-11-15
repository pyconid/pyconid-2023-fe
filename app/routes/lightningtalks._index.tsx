import { redirect } from "@remix-run/node"

export function loader() {
  return redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLSeDVV_r1Kit5e78QpnR29jqOmisn6LKAlLxsoZtO991lsnhTg/viewform?usp=sf_link",
  )
}
