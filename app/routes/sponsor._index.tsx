import type { V2_MetaFunction } from "@remix-run/node"

import { cn } from "~/libs"
import { Button, Layout } from "~/components"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Sponsors" }]
}

const sponsors = {
  platinum: [
    {
      logo: "googlecloud.svg",
      alt: "logo_googlecloud",
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit sit pellentesque ut porttitor. Duis pellentesque felis imperdiet lorem non. A diam nunc posuere sed proin massa in praesent eu. Sagittis sollicitudin placerat iaculis in hac. Quam vulputate scelerisque sit iaculis posuere nec facilisi gravida nec. Blandit urna enim rhoncus arcu posuere ullamcorper porttitor. Quis non massa ut in ultricies iaculis ut.",
    },
  ],
  gold: [
    {
      logo: "julo.svg",
      alt: "logo_julo",
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit sit pellentesque ut porttitor. Duis pellentesque felis imperdiet lorem non. A diam nunc posuere sed proin massa in praesent eu. Sagittis sollicitudin placerat iaculis in hac. Quam vulputate scelerisque sit iaculis posuere nec facilisi gravida nec. Blandit urna enim rhoncus arcu posuere ullamcorper porttitor. Quis non massa ut in ultricies iaculis ut.",
    },
    {
      logo: "nginx.svg",
      alt: "logo_nginx",
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit sit pellentesque ut porttitor. Duis pellentesque felis imperdiet lorem non. A diam nunc posuere sed proin massa in praesent eu. Sagittis sollicitudin placerat iaculis in hac. Quam vulputate scelerisque sit iaculis posuere nec facilisi gravida nec. Blandit urna enim rhoncus arcu posuere ullamcorper porttitor. Quis non massa ut in ultricies iaculis ut.",
    },
  ],
  silver: [
    {
      logo: "ocbcnisp.svg",
      alt: "logo_ocbnisp",
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit sit pellentesque ut porttitor. Duis pellentesque felis imperdiet lorem non. A diam nunc posuere sed proin massa in praesent eu. Sagittis sollicitudin placerat iaculis in hac. Quam vulputate scelerisque sit iaculis posuere nec facilisi gravida nec. Blandit urna enim rhoncus arcu posuere ullamcorper porttitor. Quis non massa ut in ultricies iaculis ut.",
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
        <div className="mx-auto w-fit rounded-lg bg-primary-purple p-5 text-xl font-bold text-white">
          Platinum Sponsor
        </div>
        {sponsors.platinum.map((sponsor, index) => (
          <div key={index} className="mx-auto flex w-1/2 flex-col items-center">
            <img src={sponsor.logo} alt={sponsor.alt} />
            <p>{sponsor.description}</p>
          </div>
        ))}
        <div
          className="mb-5 mt-16 h-2 rounded bg-primary-orange lg:mb-7"
          role="separator"
        />
        <div className="mx-auto w-fit rounded-lg bg-primary-orange p-5 text-xl font-bold text-white">
          Gold Sponsor
        </div>
        <div className="grid grid-cols-2">
          {sponsors.gold.map((sponsor, index) => (
            <div
              key={index}
              className="mx-auto flex w-2/3 flex-col items-center"
            >
              <img src={sponsor.logo} alt={sponsor.alt} />
              <p>{sponsor.description}</p>
            </div>
          ))}
        </div>
        <div
          className="mb-5 mt-16 h-2 rounded bg-primary-red lg:mb-7"
          role="separator"
        />
        <div className="mx-auto w-fit rounded-lg bg-primary-red p-5 text-xl font-bold text-white">
          Silver Sponsor
        </div>
        {sponsors.silver.map((sponsor, index) => (
          <div key={index} className="mx-auto flex w-1/3 flex-col items-center">
            <img src={sponsor.logo} alt={sponsor.alt} />
            <p>{sponsor.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
