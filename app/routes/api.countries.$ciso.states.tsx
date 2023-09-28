import type { LoaderArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import { countriesService } from "~/services/countries.server"

export async function loader({ params }: LoaderArgs) {
  if (!params.ciso) return
  const countries = await countriesService.getStatesByCountry(params.ciso)
  return json(countries)
}
