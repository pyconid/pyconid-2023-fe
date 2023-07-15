import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";

export async function loader({ params }: LoaderArgs) {
  const speaker = await prisma.speaker.findFirst({
    where: { slug: params.speakerSlug },
  });
  if (!speaker) {
    return json({ speaker: null });
  }

  return json({ speaker });
}

export default function Route() {
  const { speaker } = useLoaderData<typeof loader>();

  if (!speaker) {
    return <p>Sorry, speaker not found</p>;
  }

  return (
    <div>
      <h1>{speaker.name}</h1>
      <p>{speaker.bio}</p>
    </div>
  );
}
