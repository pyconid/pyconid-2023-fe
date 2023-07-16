import type { V2_MetaFunction } from "@remix-run/node"

import { Layout } from "~/components"

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
    <Layout>
      <div>
        <section className="py-10">
          <div className="mx-auto max-w-screen-xl items-center justify-between gap-x-12 overflow-hidden text-gray-600 md:flex md:px-8">
            <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
              <h2 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
                PyCon ID 2023
              </h2>
              <p>
                We are waiting to see you again! <br />
                Bandung, November 18th-19th, 2023 <br />
                Venue TBA
              </p>
              <h3 className="text-2xl font-extrabold text-gray-800 md:text-3xl">
                What is PyCon ID?
              </h3>
              <p>
                Python Conference Indonesia or PyCon ID is annual conference
                where Python enthusiasts share their knowledge with the others,
                especially in Indonesia regional.
              </p>
              <h3 className="text-2xl font-extrabold text-gray-800 md:text-3xl">
                Contact Us
              </h3>
              <p>
                Instagram : @pythonid <br />
                Twitter : @id_python <br />
                Mail : pycon@python.or.id <br />
                PyCon ID 2023 is organized by volunteers, so it may take a week
                for us to reply to inquiries. <br />
                Thank you for your patience.
              </p>
            </div>
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <span className="sr-only">Watch our video to learn more</span>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube-nocookie.com/embed/1f6S3x1XUho"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                className="rounded"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
