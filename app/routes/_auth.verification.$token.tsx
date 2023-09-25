import type { LoaderArgs } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { commitSession, getSession } from "~/services/session.server"
import { userService } from "~/services/user.server"

export async function loader({ params, request }: LoaderArgs) {
  if (!params.token) return redirect("/login")

  const session = await getSession(request.headers.get("cookie"))

  const data = await userService.verify(params.token)

  if (data.error) {
    session.flash(
      "tokenMessage",
      JSON.stringify({
        type: "error",
        message: data.error,
      }),
    )
    return redirect("/login", {
      headers: { "set-cookie": await commitSession(session) },
    })
  }

  session.flash(
    "tokenMessage",
    JSON.stringify({
      type: "success",
      message: "Email verified!",
    }),
  )

  return redirect("/login", {
    headers: { "set-cookie": await commitSession(session) },
  })
}
