import { redirect } from "@remix-run/node"

export function loader() {
  return redirect(
    "https://docs.google.com/presentation/d/1ISHqcCmVMM4JHGR6DDbJ_HgSFPf3UNfrX7q8LHDbpmQ/edit?usp=sharing",
  )
}
