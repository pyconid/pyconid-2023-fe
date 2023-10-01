import { json } from "@remix-run/node"
import { countriesService } from "~/services/countries.server"

export async function loader() {
  const countries = await countriesService.getAllCountries()
  return json(countries)
}
