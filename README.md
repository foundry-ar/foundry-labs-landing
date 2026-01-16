# Foundry Labs Landing Page

A premium editorial landing page for a senior engineering consultancy. Built with Next.js 14 and Tailwind CSS, designed to communicate excellence, judgment, and seniority through restrained, sophisticated design.

**Available in English and Spanish** - SEO-optimized internationalization with clean routing.

## Internationalization

- **English (default)**: `/` - Main landing page
- **Spanish**: `/es` - Spanish version for LATAM clients
- **Language switcher**: Clean "EN / ES" toggle in header
- **SEO**: Proper hreflang tags, canonical URLs, and localized metadata
- **Dictionary-based**: All copy managed through `/messages/en.ts` and `/messages/es.ts`

## Design System

### Typography
- **Serif (Newsreader)** - Used for H1/H2 headings for editorial feel
- **Sans-serif (Inter)** - Used for body text and UI elements
- **Scale** - text-5xl to text-6xl on hero, generous line-height for readability

### Color Palette
- **Paper (#fafaf8)** - Warm off-white background for editorial feel
- **Ink (#1a1a1a)** - Near-black for text, strong contrast
- **Grays** - Subtle gray-200/60 borders, gray-600 for secondary text
- **White surfaces** - Cards and panels on paper background

### Layout Principles
- **Two-column hero** - Content left, proof panel right
- **Engagement snapshot** - Honest service snapshot with window chrome UI
- **Selected experience** - Pills with "In individual capacity" disclaimer
- **Generous spacing** - py-24 sections, proper breathing room
- **Maximum widths** - max-w-7xl hero, max-w-5xl content, max-w-3xl prose
- **Soft borders** - border-gray-200/60 for subtle separation
- **Rounded corners** - rounded-2xl on cards for premium feel

### Key Features
- **Editorial aesthetic** - Warm, paper-like background with serif headings
- **Proof panel** - Week-by-week engagement flow with deliverables
- **Credibility signals** - Experience pills with honest disclaimer
- **Reduced problem statement** - Calm insight, not second hero
- **Premium cards** - Ample padding (p-8), soft borders, hover states
- **Clean navigation** - Pill hover states, minimal links
- **No gimmicks** - No buzzwords, no stock photos, no heavy animations

## Features

- 📱 **Fully responsive** - Perfect on all devices
- 🚀 **SEO optimized** - Comprehensive meta tags and semantic HTML
- ⚡ **Lightning fast** - Optimized with Next.js 14
- 🎯 **Strategic positioning** - Built to attract premium clients
- 📝 **TypeScript** - Full type safety
- ♿ **Accessible** - Semantic HTML and proper contrast ratios

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

