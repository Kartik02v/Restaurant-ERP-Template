# Restaurant Next.js App

A modern restaurant website built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── HeroSection.tsx  # Hero section
│   ├── FeaturedCategories.tsx
│   ├── BestSellingDishes.tsx
│   ├── TimingsSection.tsx
│   ├── RatingSection.tsx
│   └── Footer.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS with custom theme
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Optimized images with Next.js Image component

## Build for Production

```bash
npm run build
npm start
```


