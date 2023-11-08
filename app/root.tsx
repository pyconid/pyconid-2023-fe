import { useEffect } from "react"
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
  useNavigation,
  useRouteError,
} from "@remix-run/react"
import sansFontStylesBold from "@fontsource/open-sans/700.css"
import sansFontStyles from "@fontsource/open-sans/index.css"
import brandFontStylesBold from "@fontsource/quicksand/700.css"
import brandFontStyles from "@fontsource/quicksand/index.css"
import { Analytics } from "@vercel/analytics/react"
import stylesheet from "~/globals.css"
import { models } from "~/models"
import { authenticator } from "~/services/auth.server"
import { IKContext } from "imagekitio-react"
import NProgress from "nprogress"
import nProgressStyles from "nprogress/nprogress.css"

import { getEnv } from "~/libs/env"
import { imageKitAuth } from "~/libs/imagekit-auth"
import { Error, Layout } from "~/components"
import { Toaster } from "~/components/ui/toaster"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: brandFontStyles },
  { rel: "stylesheet", href: brandFontStylesBold },
  { rel: "stylesheet", href: sansFontStyles },
  { rel: "stylesheet", href: sansFontStylesBold },
  { rel: "stylesheet", href: nProgressStyles },
]

export async function loader({ request }: LoaderArgs) {
  const { IMAGEKIT_PUBLIC_API_KEY, TICKET_SERVICE_URL,CAPTCHA_KEY } = getEnv()

  const userSession = await authenticator.isAuthenticated(request)

  if (!userSession) {
    return json({
      ENV: { IMAGEKIT_PUBLIC_API_KEY, TICKET_SERVICE_URL ,CAPTCHA_KEY},
    })
  }

  const userProfile = await models.user.query.getByToken({
    token: userSession.token,
  })

  return json({
    userSession,
    ENV: { IMAGEKIT_PUBLIC_API_KEY, TICKET_SERVICE_URL,CAPTCHA_KEY },
    userProfile: {
      id: userProfile?.id,
      email: userProfile?.email,
      avatar: userProfile?.avatar,
      firstName: userProfile?.firstName,
      lastName: userProfile?.lastName,
      displayName: userProfile?.displayName,
    },
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
          <Error status="Unknown" />
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
  const navigation = useNavigation()

  useEffect(() => {
    if (navigation.state === "idle") NProgress.done()
    else NProgress.start()
  }, [navigation.state])

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
