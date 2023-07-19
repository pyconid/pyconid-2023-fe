import { Link } from "@remix-run/react"

export function Nav() {
  return (
    <nav className="relative mx-auto flex max-w-screen-xl items-center space-x-6 px-6">
      <Link to="/" className="block">
        <img
          src="/logo.png"
          width={120}
          height={50}
          className="object"
          alt="PyCon ID 2023"
        />
      </Link>

      <ul className="mt-0 flex border-none text-sm font-bold">
        <div className="ml-12 flex items-center space-x-6">
          <li>
            <Link className="text-gray-400 hover:text-indigo-900" to="/coc">
              Code of Conduct
            </Link>
          </li>
          <li>
            <Link className="text-gray-400 hover:text-indigo-900" to="/cfp">
              Call for Proposals
            </Link>
          </li>
          <li>
            <Link className="text-gray-400 hover:text-indigo-900" to="/sponsor">
              Sponsor
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}
