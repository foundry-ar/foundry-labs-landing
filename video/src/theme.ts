export const COLORS = {
  bg: '#F5F7FA',
  panel: 'rgba(255, 255, 255, 0.65)',
  panelHover: 'rgba(255, 255, 255, 0.9)',
  panelBorder: 'rgba(255, 255, 255, 0.8)',
  panelBorderSubtle: 'rgba(0, 0, 0, 0.06)',
  text: '#111111',
  secondary: '#6B7280',
  muted: '#9CA3AF',
  accent: '#764ba2',
  accentBlue: '#667eea',
  accentPink: '#ff9a9e',
  accentMuted: 'rgba(118, 75, 162, 0.08)',
  accentBorder: 'rgba(118, 75, 162, 0.2)',
  success: '#059669',
  successMuted: 'rgba(5, 150, 105, 0.08)',
  white: '#FFFFFF',
  black: '#000000',
  dotGrid: '#ccc',
} as const;

export const GRADIENTS = {
  accentText: 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #ff9a9e 100%)',
  accentLine: 'linear-gradient(to right, #a78bfa, #c084fc, #f9a8d4)',
  cardTopAccent: 'linear-gradient(to right, #a78bfa, #8b5cf6, #ec4899)',
  ctaBg: 'linear-gradient(to right, #764ba2, #2563eb)',
  divider: 'linear-gradient(to right, transparent, rgba(168, 139, 250, 0.4), transparent)',
} as const;

export const SHADOWS = {
  panel: '0 4px 20px rgba(0, 0, 0, 0.03)',
  card: '0 15px 30px rgba(0, 0, 0, 0.05)',
  cardHover: '0 20px 40px rgba(0, 0, 0, 0.08)',
  button: '0 4px 12px rgba(0, 0, 0, 0.15)',
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
