const socials = [
  {
    handle: "pythonid",
    logo: "/icons/instagram.svg",
    href: "https://www.instagram.com/pythonid/",
  },
  {
    handle: "id_python",
    logo: "/icons/twitter.svg",
    href: "https://twitter.com/id_python",
  },
  {
    handle: "pycon@python.or.id",
    logo: "/icons/mail.svg",
    href: "mailto:pycon@python.or.id",
  },
]

const organizers = [
  {
    logo: "pythonid.svg",
    alt: "logo_pythonid",
  },
  {
    logo: "bandungpy.svg",
    alt: "logo_bandungpy",
  },
]

const supporters = [
  {
    logo: "python.svg",
    alt: "logo_python",
  },
]

const sponsors = [
  {
    logo: "googlecloud.svg",
    alt: "logo_googlecloud",
    category: "platinum",
  },
  {
    logo: "nginx.svg",
    alt: "logo_nginx",
    category: "gold",
  },
  {
    logo: "julo.svg",
    alt: "logo_julo",
    category: "gold",
  },

  {
    logo: "ocbcnisp.svg",
    alt: "logo_ocbnisp",
    category: "silver",
  },
]

export function Footer() {
  const today = new Date()

  return (
    <footer className="bg-primary px-4 py-6 lg:p-16">
      <div className=" rounded-3xl bg-white p-8 lg:p-12">
        <div className="mx-auto grid space-y-16 text-center lg:grid-cols-3 lg:space-y-0 lg:text-left">
          <div>
            <h4 className="text-xl font-bold md:text-2xl">Organized by</h4>
            <div className="my-4 flex justify-center gap-4  lg:justify-start lg:gap-12 ">
              {organizers.map((organizer, index) => (
                <img key={index} src={organizer.logo} alt={organizer.alt} />
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold md:text-2xl">Supported by</h4>
            <div className="mt-4 flex justify-center lg:justify-start">
              {supporters.map((supporter, index) => (
                <img key={index} src={supporter.logo} alt={supporter.alt} />
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold md:text-2xl">Sponsored by</h4>
            <div className="mt-4 flex flex-col items-center justify-center lg:items-start">
              <div className="flex space-x-4">
                {sponsors.map((sponsor, index) => {
                  if (sponsor.category === "platinum") {
                    return (
                      <img key={index} src={sponsor.logo} alt={sponsor.alt} />
                    )
                  }
                })}
              </div>
              <div className="flex space-x-4">
                {sponsors.map((sponsor, index) => {
                  if (sponsor.category === "gold") {
                    return (
                      <img key={index} src={sponsor.logo} alt={sponsor.alt} />
                    )
                  }
                })}
              </div>
              <div className="flex space-x-4">
                {sponsors.map((sponsor, index) => {
                  if (sponsor.category === "silver") {
                    return (
                      <img key={index} src={sponsor.logo} alt={sponsor.alt} />
                    )
                  }
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          <div className="flex items-center justify-center lg:justify-start">
            <img src="pycon-logo.svg" alt="logo_pycon" />
          </div>
        </div>

        <div className="mx-auto  text-center text-xs md:text-base">
          <div
            className="mb-5 mt-7 h-px bg-primary-black/30 lg:mb-7"
            role="separator"
          />
          <div>
            <div className="flex flex-col items-center justify-center space-y-3 lg:grid lg:grid-cols-3 lg:flex-row lg:space-y-0">
              <div className="order-1 text-left lg:w-4/5 lg:text-sm">
                <p>
                  PyCon ID 2023 is organized by volunteers, so it may take a
                  week for us to reply to inquiries.
                </p>
                <p>Thank you for your patience.</p>
              </div>

              <div className="order-last flex items-center justify-center lg:order-2 ">
                <p>
                  &copy; PyCon ID {today.getFullYear()}. All Rights Reserved.
                </p>
              </div>

              <ul className="order-2 flex flex-row md:flex-row md:gap-7 lg:order-last lg:justify-end lg:gap-4">
                {socials.map((social) => (
                  <li
                    key={social.href}
                    className="md:text-md text-base hover:underline "
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center py-2"
                    >
                      <img
                        src={social.logo}
                        alt={`${social.handle} logo`}
                        className="mr-3 h-5 w-5 md:h-6 md:w-6"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
