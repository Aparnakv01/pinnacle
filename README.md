# Pinnacle

A modern, professional Next.js landing page with CMS insights integration.

## Features

- **Next.js 14** with TypeScript
- **Tailwind CSS** for modern styling
- **Black & White Design** - Professional and elegant
- **Contact Form** with validation
- **CMS Integration** via Next.js rewrites at `/insights`
- **Responsive Design** - Mobile-friendly
- **Vercel Deployment Ready**

## Sections

- Hero section with call-to-action
- Features showcase
- Services overview
- Insights/Blog section
- Contact form
- Footer

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

## Deployment on Vercel

1. Push to GitHub
2. Go to vercel.com/new
3. Import this repository
4. Deploy

Vercel auto-detects Next.js and handles everything, including the `/insights` rewrites.

## CMS Integration

The `/insights` route fetches content from:
```
https://dev-api.topgeo.ai/cms/render/my-web-app--project-1087982776454717284.asia-southeast1.hosted.app
```

- `/insights` → CMS home
- `/insights/:slug` → CMS article

## Project Structure

```
pinnacle/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```
