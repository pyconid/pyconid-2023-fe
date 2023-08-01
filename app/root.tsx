import type { LinksFunction } from "@remix-run/node"
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react"
import sansFontStylesBold from "@fontsource/open-sans/700.css"
import sansFontStyles from "@fontsource/open-sans/index.css"
import brandFontStylesBold from "@fontsource/quicksand/700.css"
import brandFontStyles from "@fontsource/quicksand/index.css"
import { Analytics } from "@vercel/analytics/react"
import stylesheet from "~/globals.css"

import { Error, Layout } from "~/components"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: brandFontStyles },
  { rel: "stylesheet", href: brandFontStylesBold },
  { rel: "stylesheet", href: sansFontStyles },
  { rel: "stylesheet", href: sansFontStylesBold },
]

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <Layout>
            <Error status={`${error.status}`} message={error.data.message} />
          </Layout>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <Analytics />
        </body>
      </html>
    )
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Error status="unknown" />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  )
}
