import { sessionStorage } from "~/services/session.server"
import { Authenticator, AuthorizationError } from "remix-auth"
import { FormStrategy } from "remix-auth-form"

export type UserSession = {
  token: string
}

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<UserSession>(sessionStorage)

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email")?.toString()
    const password = form.get("password")?.toString()
    if (!email || !password) {
      throw new AuthorizationError("User and password are required")
    }

    const session: UserSession = { token: "testToken123" }

    // if (!user.id) {
    //   throw new AuthorizationError("User is not found")
    // }

    return session
  }),
  /**
   * Each strategy has a name and can be changed to use another one
   * same strategy multiple times, especially useful for the OAuth2 strategy.
   */
  "user-pass",
)
