import { json, type LinksFunction, type LoaderArgs } from "@remix-run/node"
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react"
import sansFontStylesBold from "@fontsource/open-sans/700.css"
import sansFontStyles from "@fontsource/open-sans/index.css"
import brandFontStylesBold from "@fontsource/quicksand/700.css"
import brandFontStyles from "@fontsource/quicksand/index.css"
import { Analytics } from "@vercel/analytics/react"
import stylesheet from "~/globals.css"
import { IKContext } from "imagekitio-react"

import { Error, Layout } from "~/components"

import { Toaster } from "./components/ui/toaster"
import { getEnv } from "./libs/env"
import { imageKitAuth } from "./libs/imagekit-auth"
import { authenticator } from "./services/auth.server"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: brandFontStyles },
  { rel: "stylesheet", href: brandFontStylesBold },
  { rel: "stylesheet", href: sansFontStyles },
  { rel: "stylesheet", href: sansFontStylesBold },
]

export async function loader({ request }: LoaderArgs) {
  const { IMAGEKIT_PUBLIC_API_KEY } = getEnv()
  const userSession = await authenticator.isAuthenticated(request)
  if (userSession) {
    return json({
      userSession,
      ENV: { IMAGEKIT_PUBLIC_API_KEY },
    })
  }
  return json({
    ENV: { IMAGEKIT_PUBLIC_API_KEY },
  })
}

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

const IMAGEKIT_ENDPOINT = "https://ik.imagekit.io/pyconid2023"

export default function App() {
  const { ENV } = useLoaderData<typeof loader>()
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <IKContext
          publicKey={ENV.IMAGEKIT_PUBLIC_API_KEY}
          urlEndpoint={IMAGEKIT_ENDPOINT}
          authenticator={imageKitAuth}
        >
          <Outlet />
        </IKContext>
        <Toaster />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  )
}
