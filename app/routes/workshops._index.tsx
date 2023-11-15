import { redirect } from "@remix-run/node"

export function loader() {
  return redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLSe8xN1tyTAGH1YLPOC1d0Yn4oejYkvYRzDKji8a7jBJ3s9B3g/viewform?usp=sf_link",
  )
}
