# 🛒 Cart Page – UX Engineering Deliverable

This project delivers a production-ready **Cart Page UI** (Cart List + Checkout Summary) using:

- ✅ Next.js 15
- ✅ React 19
- ✅ Tailwind CSS
- ✅ ShadCN components
- ✅ Serverless Postgres (via Prisma ORM)

It showcases UI precision, scalable architecture, accessibility best practices, and a foundation for eCommerce development in response to the UX Engineer Task.

---

## 💅 UI Section

- **Tech Stack:** Next.js + Tailwind + ShadCN + Prisma
- **Componentization:** Built as isolated components – `CartList`, `CartItem`, `Summary`
- **Design Implementation:** Matches Figma designs exactly (spacing, color, typography)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

- Next App Setup & Assets - layoutset set up: set fonts, favicon, global styles via assets folder, images etc# ochreux

🧬 Prisma Setup

This project uses Prisma ORM connected to a serverless Postgres database.

Prisma Commands
Command Description
| Command | Description |
| ------------------------ | ------------------------------------------------------ |
| `npx prisma db push` | Push schema changes to your database (non-destructive) |
| `npx prisma studio` | Open Prisma Studio – view and edit DB in browser |
| `npx prisma generate` | Regenerate Prisma client after schema changes |
| `npx prisma migrate dev` | Create and apply a new migration (development only) |

Prisma schema is defined in prisma/schema.prisma
