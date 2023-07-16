import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PyCon ID 2023" },
  ];
};

export default function Index() {
  return (
    <>
      <nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
          <div className="flex justify-between">
              <a href="javascript:void(0)">
                  <img
                      src="https://firebasestorage.googleapis.com/v0/b/pyconid-2023-asset.appspot.com/o/Logo_Pycon_2023.png?alt=media&token=a5b61f8a-515a-4eac-af2f-b1998b9dafae"
                      width={120}
                      height={50}
                      alt="Float UI logo"
                  />
              </a>
              <button className="text-gray-500 outline-none md:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
              </button>
          </div>
          <ul className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 absolute inset-x-0 px-4 border-b bg-white md:border-none md:static`}>
              <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
                  <li className="text-gray-500 hover:text-indigo-600" key="a">
                      <a href="/code-of-conduct">Code of Conduct</a>
                  </li>
                  <li className="text-gray-500 hover:text-indigo-600" key="b">
                      <a href="/cfp">Call for Paper</a>
                  </li>
                  <li className="text-gray-500 hover:text-indigo-600" key="c">
                      <a href="/sponsors">Sponsors</a>
                  </li>
              </div>
          </ul>
      </nav>
      <section className="py-28">
          <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
              <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                  <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                      PyCon ID 2023
                  </h2>
                  <p>
                    We are waiting to see you again! <br />
                    Bandung, November 18th-19th, 2023  <br />
                    Venue TBA
                  </p>
                  <h3 className="text-2xl text-gray-800 font-extrabold md:text-3xl">
                    What is PyCon ID?
                  </h3>
                  <p>
                    Python Conference Indonesia or PyCon ID is annual conference where Python enthusiasts share their knowledge with the others, especially in Indonesia regional.
                  </p>
                  <h3 className="text-2xl text-gray-800 font-extrabold md:text-3xl">
                    Contact Us
                  </h3>
                  <p>
                    Instagram : @pythonid <br />
                    Twitter : @id_python <br />
                    Mail : pycon@python.or.id <br />
                    PyCon ID 2023 is organized by volunteers, so it may take a week for us to reply to inquiries. <br />
                    Thank you for your patience.
                  </p>
              </div>
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <button type="button" className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Watch our video to learn more</span>
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube-nocookie.com/embed/1f6S3x1XUho"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen={true}
                    />
                  </button>
                </div>
          </div>
      </section>
    </>
  );
}
