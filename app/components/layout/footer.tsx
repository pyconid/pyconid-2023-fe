const socials = [
  {
    handle: "pythonid",
    logo: "icons/instagram.svg",
    href: "https://www.instagram.com/pythonid/",
  },
  {
    handle: "id_python",
    logo: "icons/twitter.svg",
    href: "https://twitter.com/id_python",
  },
  {
    handle: "pycon@python.or.id",
    logo: "icons/mail.svg",
    href: "mailto:pycon@python.or.id",
  },
]

export function Footer() {
  const today = new Date()

  return (
    <footer className="mt-20  bg-primary px-6 pt-14 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row md:justify-between">
        <h4 className="mb-2 text-xl font-bold md:text-4xl">Contact Us</h4>
        <ul className="mb-8 flex flex-col md:flex-row md:gap-7 lg:flex-row lg:gap-32">
          {socials.map((social) => (
            <li
              key={social.href}
              className="text-base hover:underline md:text-xl"
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
                <span>{social.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mb-5 max-w-7xl text-center text-xs md:text-base">
        <p className="mb-2 md:mb-1">
          PyCon ID 2023 is organized by volunteers, so it may take a week for us
          to reply to inquiries.
        </p>
        <p>Thank you for your patience</p>
        <div
          className="mb-5 mt-7 h-px bg-primary-foreground/20 lg:mb-7"
          role="separator"
        />
        <p>&copy; PyCon ID {today.getFullYear()}. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
