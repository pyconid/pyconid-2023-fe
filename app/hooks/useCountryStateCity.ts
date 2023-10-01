import { useState } from "react"
import useSWR from "swr/immutable"

type Data = {
  id: number
  name: string
  iso2: string
}

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json())

export function useCountryStateCity(
  defaultCiso: string | undefined,
  defaultSiso: string | undefined,
) {
  const [ciso, setCiso] = useState<string>(defaultCiso ?? "")
  const [siso, setSiso] = useState<string>(defaultSiso ?? "")

  const { data: countries } = useSWR<Data[]>("/api/countries", fetcher)
  const { data: states } = useSWR<Data[]>(
    () => (ciso ? `/api/countries/${ciso}/states` : null),
    fetcher,
  )
  const { data: cities } = useSWR<Data[]>(
    () =>
      ciso && siso ? `/api/countries/${ciso}/states/${siso}/cities` : null,
    fetcher,
  )

  return { countries, states, cities, setCiso, setSiso }
}
