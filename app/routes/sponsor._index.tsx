import type { V2_MetaFunction } from "@remix-run/node"

import { cn } from "~/libs"
import { Button, Layout } from "~/components"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Sponsors" }]
}

const sponsors = {
  supporter: [
    {
      logo: "/python.svg",
      alt: "logo_googlecloud",
      href: "https://python.org",
      description:
        "The Python Software Foundation actively supports and promotes the Python programming language and its global community of users and developers. They play a vital role in maintaining Python, nurturing a sense of community, providing grants and sponsorships, and advocating for Python's utilization across various industries.",
    },
  ],
  platinum: [
    {
      logo: "/googlecloud.svg",
      alt: "logo_googlecloud",
      href: "https://cloud.google.com/",
      description:
        "Google Cloud accelerates every organization’s ability to digitally transform its business and industry. We deliver enterprise-grade solutions that leverage Google’s cutting-edge technology, and tools that help developers build more sustainably. Customers in more than 200 countries and territories turn to Google Cloud as their trusted partner to enable growth and solve their most critical business problems.",
    },
  ],
  gold: [
    {
      logo: "/julo.svg",
      alt: "logo_julo",
      href: "https://www.julo.co.id/",
      description:
        "JULO is a financial technology company that is working on a financial super app. JULO started off with the lending arm and have excelled at it. Hundreds of thousands of Indonesians now use JULO apps to get access to a decent credit product. It's a mission to help millions of Indonesians get a better life. That's how we'll build a company future generations will be proud of. JULO are now tapping into other financial territories, to eventually provide a one stop financial solution to all Indonesians.",
    },
    {
      logo: "/nginx.svg",
      alt: "logo_nginx",
      href: "https://www.nginx.com/",
      description:
        "NGINX, now a part of F5, Inc., is the company behind the popular open source project, NGINX. F5 NGINX delivers cloud-native, Kubernetes-friendly open source and enterprise solutions that drive mission-critical apps and APIs with scalability, visibility, security, and governance.",
    },
  ],
  silver: [
    {
      logo: "/ocbcnisp.svg",
      alt: "logo_ocbnisp",
      href: "https://www.ocbcnisp.com/",
      description:
        "As a bank, OCBC NISP believes that success comes from trust and collaboration. With the value “no such things as can’t”, we grow with our employees and partners to go far together.In career, we encourage everyone to build progress and value together with us, because #OpportunityStartsHere.",
    },
    {
      logo: "/qiscus.svg",
      alt: "logo_qiscus",
      href: "https://www.qiscus.com/",
      description:
        "Qiscus is a leading Omnichannel Customer Engagement Platform in Indonesia, operating as a B2B Software as a Service enterprise. To date, Qiscus has several products under its wings: Qiscus Omnichannel Chat, Qiscus CRM, Qiscus Robolabs, and Qiscus App Center to name a few.\nSince its inception in Singapore, Qiscus has helped hundreds of clients from 23 industries in 19 countries, with 13 various use cases in its portfolio. Qiscus offers solutions to help companies embrace new expectations of excellent customer experience (CX) throughout every step of their customer journey.",
    },
  ],
}

export default function Index() {
  return (
    <Layout>
      <div className="relative z-[3] mt-20 bg-white px-4 pt-5 text-center">
        <h1 className="mb-6 font-brand text-5xl font-semibold text-primary lg:text-6xl">
          Our Sponsors
        </h1>
        <p className="mx-auto w-full text-xl tracking-tight text-primary lg:w-[420px] lg:text-2xl">
          List of Sponsors that Support Python Conference Indonesia 2023
        </p>
      </div>

      <div className="relative mx-auto mb-16 max-w-7xl px-4 text-justify md:px-6">
        <div
          className="mb-5 mt-16 h-2 rounded bg-primary-purple lg:mb-7"
          role="separator"
        />
        <div className="mx-auto w-fit rounded-lg bg-primary-purple p-2 text-xl font-bold text-white lg:p-3">
          Supported by
        </div>
        {sponsors.supporter.map((sponsor, index) => (
          <div
            key={index}
            className="mx-auto mt-4 flex flex-col items-center lg:w-1/2"
          >
            <div className="h-[100px]">
              <a href={sponsor.href} target="_blank" rel="noopener noreferrer">
                <img src={sponsor.logo} alt={sponsor.alt} />
              </a>
            </div>

            <p>{sponsor.description}</p>
          </div>
        ))}
        <div
          className="mb-5 mt-16 h-2 rounded bg-primary-red lg:mb-7"
          role="separator"
        />
        <div className="mx-auto w-fit rounded-lg bg-primary-red p-2 text-xl font-bold text-white lg:p-3">
          Platinum Sponsor
        </div>
        {sponsors.platinum.map((sponsor, index) => (
          <div
            key={index}
            className="mx-auto mt-4 flex flex-col items-center lg:w-1/2"
          >
            <a href={sponsor.href} target="_blank" rel="noopener noreferrer">
              <img src={sponsor.logo} alt={sponsor.alt} />
            </a>
            <p>{sponsor.description}</p>
          </div>
        ))}
        <div
          className="mb-5 mt-16 h-2 rounded bg-primary-orange lg:mb-7"
          role="separator"
        />
        <div className="mx-auto w-fit rounded-lg bg-primary-orange p-2 text-xl font-bold text-white lg:p-3">
          Gold Sponsor
        </div>
        <div className="mt-4 space-y-8 lg:grid lg:grid-cols-2 lg:space-y-0">
          {sponsors.gold.map((sponsor, index) => (
            <div
              key={index}
              className="mx-auto flex flex-col items-center lg:w-2/3"
            >
              <div className="h-[80px]">
                <a
                  href={sponsor.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={sponsor.logo} alt={sponsor.alt} />
                </a>
              </div>
              <p>{sponsor.description}</p>
            </div>
          ))}
        </div>
        <div
          className="mb-5 mt-16 h-2 rounded bg-primary-black lg:mb-7"
          role="separator"
        />
        <div className="mx-auto w-fit rounded-lg bg-primary-black p-2 text-xl font-bold text-white lg:p-3">
          Silver Sponsor
        </div>
        <div className="mt-4 space-y-8 lg:grid lg:grid-cols-2 lg:space-y-0">
          {sponsors.silver.map((sponsor, index) => (
            <div
              key={index}
              className="mx-auto flex flex-col items-center lg:w-2/3"
            >
              <div className="h-[80px]">
                <a
                  href={sponsor.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={sponsor.logo} alt={sponsor.alt} />
                </a>
              </div>
              <div className="space-y-2">
                {sponsor.description.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
