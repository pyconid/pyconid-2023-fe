import ImageKit from "imagekit"

import { getEnv } from "~/libs/env"

const { IMAGEKIT_PRIVATE_API_KEY, IMAGEKIT_PUBLIC_API_KEY } = getEnv()

const imagekit = new ImageKit({
  urlEndpoint: "https://ik.imagekit.io/pyconid2023/",
  publicKey: IMAGEKIT_PUBLIC_API_KEY,
  privateKey: IMAGEKIT_PRIVATE_API_KEY,
})

export async function loader() {
  return imagekit.getAuthenticationParameters()
}
