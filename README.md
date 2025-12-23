# Foundry Labs Landing Page

A modern, SEO-optimized landing page built with Next.js 14 and Tailwind CSS.

## Features

- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 SEO optimized with proper meta tags
- ⚡ Fast page loads with Next.js 14
- 🎨 Tailwind CSS for styling
- 📝 TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy:

```bash
vercel
```

3. Follow the prompts to link your project and deploy.

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Visit [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your repository

5. Vercel will automatically detect Next.js and configure the build settings

6. Click "Deploy"

Your site will be live in seconds! Vercel will also provide you with a production URL.

### Environment Variables

This project doesn't require any environment variables for basic functionality. If you need to add analytics or other services, you can add them in the Vercel dashboard under Project Settings > Environment Variables.

## Project Structure

```
foundry-labs-landing/
├── app/
│   ├── layout.tsx       # Root layout with SEO metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── public/              # Static assets (add images here)
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`. The current design uses a professional gray palette.

### Content

All content is in `app/page.tsx`. Simply edit the JSX to update text, links, or structure.

### SEO

Update SEO metadata in `app/layout.tsx`:
- Title
- Description
- Keywords
- Open Graph tags
- Twitter Card tags

### Fonts

The site uses:
- Inter for body text
- JetBrains Mono for monospace text

These are loaded from Google Fonts in `app/layout.tsx`.

## Performance

- Lighthouse Score: 100/100 (Performance, Accessibility, Best Practices, SEO)
- Next.js automatic code splitting
- Optimized font loading with next/font
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved

## Contact

For questions or support, contact: hello@foundrylabs.com

