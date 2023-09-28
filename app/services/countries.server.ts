import { getEnv } from "~/libs/env"

const { COUNTRY_STATE_API_KEY } = getEnv()

const DEFAULT_CONFIG = {
  headers: {
    "content-type": "application/json",
    "X-CSCAPI-KEY": COUNTRY_STATE_API_KEY,
  },
}

const COUNTRY_STATE_BASE_API = "https://api.countrystatecity.in/v1/countries"

const fetcher = (url: string) =>
  fetch(`${COUNTRY_STATE_BASE_API}${url}`, DEFAULT_CONFIG)
    .then((res) => res.json())
    .then((data) => data)

export const countriesService = {
  async getAllCountries() {
    return fetcher("/")
  },
  async getStatesByCountry(ciso: string) {
    return fetcher(`/${ciso}/states`)
  },
  async getCitiesByStates(ciso: string, siso: string) {
    return fetcher(`/${ciso}/states/${siso}/cities`)
  },
}
