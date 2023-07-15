# 🐍 pycon.id

> Frontend side for PyCon Indonesia 2023 website.

Check out:

- Web: <https://pycon.id>
- Repo: <https://github.com/bandungpy>
- Progress: <https://github.com/orgs/bandungpy/projects/1>

## Getting Started

Read the [Remix Docs](https://remix.run/docs) to understand about Remix.

Tips:

- If you're new, focus on Remix basics, don't use the Stacks yet.
- If you're experienced, can already use various integration such as Prisma ORM and database.

## Tech Stack

1. [TypeScript](https://typescriptlang.org): Typed language
   - Related to JavaScript, HTML, CSS
2. [React](https://react.dev): UI library
3. [Remix](https://remix.run): Web framework
   - [React Router](https://reactrouter.com)
4. [Tailwind CSS](https://tailwindcss.com): Styling
5. [Radix UI](https://radix-ui.com): Interactive components
   - [shadcn UI](https://ui.shadcn.com): Styled interactive components
6. [Prisma](https://prisma.io): Database ORM
7. [PlanetScale](https://planetscale.com): MySQL-compatible serverless database platform
   - [MySQL](https://mysql.com): Database management system
8. [Vercel](https://vercel.com): App deployment

## Setup

Create the `.env` file from the example `.env` file.

```sh
cp -i .env.example .env
```

Let's configure the required environment variables in the `.env` file if local, otherwise in the project settings, for:

- `DATABASE_URL`
- `SESSION_SECRET` (will be used later)

Create a [PlanetScale](https://planetscale.com) account to have a production-ready MySQL instance for development. After the database has been created, "Get the connection string" and select "Prisma", then copy the full `DATABASE_URL`.

> Keep in mind the free plan only allow for 1 database. So either you keep it, delete it when unused, or upgrade your plan.

Generate a random string for the `SESSION_SECRET` using `openssl rand -base64 32` on the terminal or you can put any random text.

```sh
DATABASE_URL="mysql://username:password@aws.connect.psdb.cloud/pyconid?sslaccept=strict"
SESSION_SECRET="random_secret_text"
```

## Development

To run the app locally, make sure the project's local dependencies are installed:

```sh
pnpm install
```

Sync between the schema of Prisma and the database, which we can do regularly while updating the Prisma schema:

```sh
pnpm db:push
```

Then seed the initial data when needed:

```sh
pnpm db:seed
```

Check if the build is fine:

```sh
pnpm build
```

If everything works fine, start the Remix development server like so:

```sh
pnpm dev
```

Open up [http://localhost:3000](http://localhost:3000) and it should be ready to go!

The `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) can also be used.

## Deployment

> **Notice**  
> The `@remix-run/vercel` runtime adapter has been deprecated in favor of out of
> the box Vercel functionality and will be removed in Remix v2.  
> This means no more using the Vercel template & can just use the Remix
> template instead.

After having run the `create-remix` command and selected "Vercel" as a deployment target, [import the Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If want to avoid using a Git repository, deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
pnpm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).
