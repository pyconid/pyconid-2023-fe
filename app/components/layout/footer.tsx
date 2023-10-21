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
      <div className=" rounded-3xl bg-white p-4 lg:p-12">
        <div className="mx-auto grid text-center lg:grid-cols-3 lg:text-left">
          <div>
            <h4 className="text-xl font-bold md:text-2xl">Organized by</h4>
            <div className="my-4 flex justify-center gap-4  lg:gap-12 xl:justify-start ">
              {organizers.map((organizer) => (
                <img src={organizer.logo} alt={organizer.alt} />
              ))}
            </div>
            <div className="text-left text-sm lg:mt-16 ">
              <p>
                PyCon ID 2023 is organized by volunteers, so it may take a week
                for us to reply to inquiries.
              </p>
              <p>Thank you for your patience</p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold md:text-2xl">Supported by</h4>
            <div className="mt-4 flex justify-center xl:justify-start">
              {supporters.map((supporter) => (
                <img src={supporter.logo} alt={supporter.alt} />
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold md:text-2xl">Sponsored by</h4>
            <div className="mt-4 flex flex-col items-center justify-center lg:items-start">
              <div className="flex space-x-4">
                {sponsors.map((sponsor) => {
                  if (sponsor.category === "platinum") {
                    return (
                      <img
                        key={sponsor.alt}
                        src={sponsor.logo}
                        alt={sponsor.alt}
                      />
                    )
                  }
                  return null
                })}
              </div>
              <div className="flex space-x-4">
                {sponsors.map((sponsor) => {
                  if (sponsor.category === "gold") {
                    return (
                      <img
                        key={sponsor.alt}
                        src={sponsor.logo}
                        alt={sponsor.alt}
                      />
                    )
                  }
                  return null
                })}
              </div>
              <div className="flex space-x-4">
                {sponsors.map((sponsor) => {
                  if (sponsor.category === "silver") {
                    return (
                      <img
                        key={sponsor.alt}
                        src={sponsor.logo}
                        alt={sponsor.alt}
                      />
                    )
                  }
                  return null
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center lg:justify-start">
          <img src="pycon-logo.svg" alt="logo_pycon" />
        </div>

        <div className="mx-auto  text-center text-xs md:text-base">
          <div
            className="mb-5 mt-7 h-px bg-primary-black/30 lg:mb-7"
            role="separator"
          />
          <div>
            <div className="flex justify-between">
              <div></div>
              <div className="flex items-center">
                <p>
                  &copy; PyCon ID {today.getFullYear()}. All Rights Reserved.
                </p>
              </div>

              <ul className="flex flex-row md:flex-row md:gap-7 lg:gap-4">
                {socials.map((social) => (
                  <li
                    key={social.href}
                    className="md:text-md text-base hover:underline"
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
