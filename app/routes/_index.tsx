import type { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PyCon ID 2023" },
    {
      name: "description",
      content: "Python Conference Indonesia 2023 in Bandung.",
    },
  ]
}

export default function Index() {
  return (
    <div>
      <h1>PyCon Indonesia 2023</h1>
    </div>
  )
}
