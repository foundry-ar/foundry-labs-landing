// Foundry brand palette — mirrors app/globals.css design tokens.
// Navy + warm orange/bronze/tan. No purple.
export const COLORS = {
  bg: '#FAFBFC',
  panel: 'rgba(255, 255, 255, 0.65)',
  panelHover: 'rgba(255, 255, 255, 0.9)',
  panelBorder: 'rgba(255, 255, 255, 0.8)',
  panelBorderSubtle: 'rgba(0, 0, 0, 0.06)',
  text: '#111111',
  secondary: '#6B7280',
  muted: '#9CA3AF',
  // Brand accents
  accent: '#B8632E',            // primary bronze
  accentDark: '#9A4F1E',        // hover/darker bronze
  accentLight: '#D4956A',       // warm tan
  accentBlue: '#3D6A96',        // brand mid-navy
  accentNavy: '#1B3A5C',        // brand navy
  accentNavyDark: '#0F2440',    // deep navy
  accentCream: '#E8D8C8',
  accentMuted: 'rgba(184, 99, 46, 0.08)',
  accentBorder: 'rgba(184, 99, 46, 0.22)',
  // Legacy alias (kept so older scenes compile — maps to warm tan in new palette)
  accentPink: '#D4956A',
  // Semantic
  success: '#059669',
  successMuted: 'rgba(5, 150, 105, 0.08)',
  white: '#FFFFFF',
  black: '#000000',
  dotGrid: '#ccc',
} as const;

export const GRADIENTS = {
  // --gradient-brand: blue → navy → bronze
  accentText: 'linear-gradient(90deg, #3D6A96 0%, #1B3A5C 50%, #B8632E 100%)',
  // --gradient-accent: warm tan → bronze → dark navy
  accentLine: 'linear-gradient(to right, #D4956A, #B8632E, #0F2440)',
  cardTopAccent: 'linear-gradient(to right, #D4956A, #B8632E, #0F2440)',
  // CTA: navy → bronze
  ctaBg: 'linear-gradient(to right, #1B3A5C, #B8632E)',
  divider: 'linear-gradient(to right, transparent, rgba(184, 99, 46, 0.4), transparent)',
} as const;

export const SHADOWS = {
  panel: '0 4px 20px rgba(0, 0, 0, 0.03)',
  card: '0 15px 30px rgba(0, 0, 0, 0.05)',
  cardHover: '0 20px 40px rgba(0, 0, 0, 0.08)',
  button: '0 4px 12px rgba(0, 0, 0, 0.15)',
} as const;

// Microsoft Excel visual tokens — only used by the systems engineering
// animation to dress up the "source spreadsheet" cards.
export const EXCEL = {
  green: '#107C41',
  greenDark: '#0E6B37',
  greenRibbon: '#F3F8F4',
  greenRibbonBorder: '#C8D5CE',
  gridline: '#E5E7EB',
  gridlineStrong: '#D0D7DE',
  rowHeaderText: '#5A6B5F',
} as const;

export const FPS = 30;
export const DURATION_SECONDS = 44;
export const DURATION_FRAMES = FPS * DURATION_SECONDS;
export const WIDTH = 1920;
export const HEIGHT = 1080;

export const SCENE_TIMINGS = {
  scene1: { start: 0, duration: 6 * FPS },
  scene2: { start: 6 * FPS, duration: 20 * FPS },
  scene3: { start: 26 * FPS, duration: 8 * FPS },
  scene4: { start: 34 * FPS, duration: 10 * FPS },
} as const;

export const FONT = {
  sans: 'Inter, system-ui, -apple-system, sans-serif',
  serif: '"Playfair Display", Georgia, serif',
} as const;
