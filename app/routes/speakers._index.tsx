import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";

export async function loader() {
  const speakers = await prisma.speaker.findMany();

  return json({ speakers });
}

export default function Route() {
  const { speakers } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Speakers</h1>
      <ul>
        {speakers.map((speaker) => {
          return (
            <li key={speaker.id}>
              <Link to={`/speakers/${speaker.slug}`}>
                <h4>{speaker.name}</h4>
              </Link>
              <p>{speaker.bio}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
