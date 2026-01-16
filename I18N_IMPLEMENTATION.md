# Internationalization Implementation

## Overview

Clean, SEO-friendly internationalization system for Foundry Labs landing page supporting English and Spanish.

## Routes

- **English (default)**: `/` 
- **Spanish**: `/es`

English is at the root for simplicity and SEO. Spanish uses the `/es` prefix.

## Architecture

### 1. Message Dictionaries

**Location**: `/messages/`

- `en.ts` - English copy (default)
- `es.ts` - Spanish copy (neutral LATAM Spanish)

All landing page strings are extracted into structured dictionaries with identical keys.

### 2. i18n Utilities

**Location**: `/lib/i18n.ts`

```typescript
export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function getMessages(locale: Locale) { ... }
export function getLocaleMetadata(locale: Locale) { ... }
```

### 3. Shared Landing Page Component

**Location**: `/components/LandingPage.tsx`

Single component that renders the landing page with messages passed as props. Keeps styling and layout identical across languages.

### 4. Language Switcher

**Location**: `/components/LanguageSwitcher.tsx`

Minimal "EN / ES" toggle in header. Active language is bold, inactive is lighter with hover state. No flags, no dropdown.

### 5. Route Structure

```
app/
├── page.tsx          # English landing (/)
├── layout.tsx        # Root layout with EN metadata
├── es/
│   └── page.tsx      # Spanish landing (/es)
└── sitemap.ts        # Sitemap with both locales
```

## SEO Implementation

### Metadata per Locale

Each route has:
- Translated `title` and `description`
- Proper `locale` in Open Graph (`en_US`, `es_AR`)
- Canonical URL
- **hreflang alternate links** via `alternates.languages`

### Root Layout (English)

```typescript
alternates: {
  canonical: 'https://foundrylabs.com',
  languages: {
    'en-US': 'https://foundrylabs.com',
    'es-AR': 'https://foundrylabs.com/es',
  },
}
```

### Spanish Route Metadata

```typescript
alternates: {
  canonical: 'https://foundrylabs.com/es',
  languages: {
    'en-US': 'https://foundrylabs.com',
    'es-AR': 'https://foundrylabs.com/es',
  },
}
```

### Sitemap

`app/sitemap.ts` includes both routes with proper `alternates` for cross-language discovery.

## Spanish Translation Notes

- **Neutral LATAM Spanish** - No regional slang
- **Same tone** - Senior, calm, professional
- **Direct translation** - Maintains structure and meaning
- **No buzzwords** - Consistent with English anti-hype positioning

### Key Translation Choices

| English | Spanish | Note |
|---------|---------|------|
| "Senior judgment" | "Criterio senior" | Maintains professional tone |
| "Engagement fit" | "Ajuste de colaboración" | Natural, not literal |
| "Strike team" | "Equipo interno de élite" | Conveys same meaning |
| "AI-assisted tooling" | "Herramientas con IA" | Simple, not buzzwordy |

## Adding a New Language

1. Create `/messages/[locale].ts` with translated copy
2. Add locale to `locales` array in `/lib/i18n.ts`
3. Add case in `getMessages()` and `getLocaleMetadata()`
4. Create `/app/[locale]/page.tsx` with proper metadata
5. Update language switcher in `/components/LanguageSwitcher.tsx`
6. Update sitemap and root layout alternates

## Static Generation

Both English and Spanish pages are statically generated at build time. No runtime i18n overhead.

## Testing

- Visit `/` for English
- Visit `/es` for Spanish
- Click language switcher to toggle
- Check `<head>` for proper hreflang tags
- Verify `/sitemap.xml` includes both routes

## Design Consistency

Visual design is **identical** across languages:
- Same spacing, colors, typography
- Same layout and component structure
- Only text content changes
- Language switcher is the only UI difference

## Future Enhancements

If needed later:
- Add more locales (Portuguese, French, etc.)
- Implement locale detection based on browser/IP
- Add locale-specific contact forms
- Translate blog/case studies if added

## No External Dependencies

This implementation uses **zero external i18n libraries**. It's a simple, custom solution using:
- TypeScript for type safety
- Next.js App Router for routing
- React components for rendering
- Native Next.js metadata API for SEO

Clean, maintainable, and performant.


