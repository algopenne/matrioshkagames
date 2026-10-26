# Matrioshka Games — Studio Website

The official website for **Matrioshka Games**, a video game studio based in Philadelphia, PA.

Live site: [https://matrioshkagames.com](https://matrioshkagames.com)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (static export) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation | [Motion](https://motion.dev/) |
| Content | [MDX](https://mdxjs.com/) (blog posts, careers) |
| Fonts | Space Grotesk + Space Mono (Google Fonts) |
| Hosting | Vercel (free Hobby tier — static export stays well within limits) |
| Domain | matrioshkagames.com (managed via SiteGround) |

## Getting Started

**Prerequisites:** Node.js 20.x or later

```bash
# Clone the repo
git clone https://github.com/algopenne/matrioshkagames.git
cd matrioshkagames

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
app/
├── data.ts          # ← Edit this: studio info, games list, social links
├── page.tsx         # Home page
├── layout.tsx       # Root layout, metadata, fonts
├── header.tsx       # Site header / nav
├── footer.tsx       # Site footer
├── blog/            # MDX blog posts (add new folders here)
└── careers/         # MDX careers pages
components/          # Shared UI components
public/              # Static assets (game images, icons, etc.)
```

## Customizing Content

All site data lives in [`app/data.ts`](./app/data.ts). Edit it to update:

- **Studio info** — name, description, contact email
- **Games list** — title, tagline, Steam link, cover image, theme color
- **Social links** — Steam, Twitter/X, YouTube

```ts
// app/data.ts
export const STUDIO_INFO = {
  name: 'Matrioshka Games',
  contactEmail: 'hunterwu@matrioshkagames.com',
  // ...
}

export const GAMES: Game[] = [
  {
    id: 'your-game-id',
    title: 'Your Game Title',
    tagline: 'A short tagline.',
    releaseDate: 'Coming Soon',
    link: 'https://store.steampowered.com/app/...',
    imageUrl: '/your-game-image.webp',  // put image in /public
    color: 'bg-indigo-600',             // Tailwind color class for the banner
  },
  // ...
]
```

## Adding Blog Posts

Create a new folder inside `app/blog/` with a `page.mdx` file:

```
app/blog/your-post-slug/page.mdx
```

Example `page.mdx`:

```mdx
# Your Post Title

Your content here...
```

## Deployment

### Overview

The site uses `output: 'export'` in [`next.config.mjs`](./next.config.mjs), which generates a fully static site into the `/out` directory. This static build is deployed to **Vercel**, and the domain `matrioshkagames.com` is pointed to Vercel from **SiteGround**.

### Auto-Deploy via GitHub (Recommended)

Push your changes to the `main` branch — Vercel will automatically pick up the push and trigger a new build. No manual steps needed.

### Set Up a New Vercel Project from Scratch

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset: **Next.js**
3. Build command: `npm run build`
4. Output directory: `out`
5. Click **Deploy**.

### Connecting the Domain (SiteGround → Vercel)

Since the domain is managed at SiteGround, you need to point its DNS to Vercel:

1. In your **Vercel project** → Settings → Domains → add `matrioshkagames.com` and `www.matrioshkagames.com`.
2. Vercel will provide the DNS records to set.
3. Log into **SiteGround** → Websites → Manage → DNS Zone Editor.
4. Add/update the following records:
   - `A` record: `@` → `76.76.21.21` (Vercel's IP)
   - `CNAME` record: `www` → `cname.vercel-dns.com`
5. DNS propagation can take a few minutes to a few hours.

> **Note on Webflow:** If a Webflow project is also connected to this domain, remove or update those DNS records first to avoid conflicts before pointing to Vercel.

### Test the Production Build Locally

```bash
npm run build
# Static output is in the /out directory

npx serve out
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the static site to `/out` |
| `npm run lint` | Run ESLint |
