import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS, FONT, FPS } from '../theme';
import { DotGrid } from '../components/DotGrid';

const SHIMMER_GRADIENT =
  'linear-gradient(90deg, #3D6A96 0%, #B8632E 50%, #D4956A 100%)';
const SHIMMER_CYCLE_FRAMES = 5 * FPS;

export const Scene4Close: React.FC = () => {
  const frame = useCurrentFrame();

  // Phase 1: "Modernize the workflow." / "Keep the craft."
  const line1Opacity = interpolate(frame, [8, 22], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const line1Y = interpolate(frame, [8, 22], [16, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const line2Opacity = interpolate(frame, [35, 50], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const line2Y = interpolate(frame, [35, 50], [16, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const bothFadeOut = interpolate(frame, [70, 95], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Phase 2: Brand lockup (hero-style)
  const brandOpacity = interpolate(frame, [110, 130], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const brandY = interpolate(frame, [110, 130], [20, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const taglineOpacity = interpolate(frame, [140, 160], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const taglineY = interpolate(frame, [140, 160], [24, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Shimmer: animate backgroundPosition like the landing page
  const shimmerProgress = (frame % SHIMMER_CYCLE_FRAMES) / SHIMMER_CYCLE_FRAMES;
  const bgPosition = `${shimmerProgress * 200}% 50%`;

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily: FONT.sans }}>
      <DotGrid opacity={0.08} />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Phase 1: Taglines */}
        <div
          style={{
            opacity: line1Opacity * bothFadeOut,
            transform: `translateY(${line1Y}px)`,
            fontSize: 48,
            fontWeight: 300,
            color: COLORS.text,
            textAlign: 'center',
            lineHeight: 1.2,
            letterSpacing: '-0.025em',
          }}
        >
          Modernize the workflow.
        </div>

        <div
          style={{
            opacity: line2Opacity * bothFadeOut,
            transform: `translateY(${line2Y}px)`,
            fontSize: 48,
            fontWeight: 300,
            color: COLORS.secondary,
            textAlign: 'center',
            marginTop: 10,
            lineHeight: 1.2,
            letterSpacing: '-0.025em',
          }}
        >
          Keep the craft.
        </div>

        {/* Phase 2: Hero-style brand lockup */}
        <div
          style={{
            opacity: brandOpacity,
            transform: `translateY(${brandY - 40}px)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* "Foundry" — like "Forjando" in the hero */}
          <div
            style={{
              fontSize: 96,
              fontWeight: 500,
              color: COLORS.text,
              fontFamily: FONT.sans,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
            }}
          >
            Foundry
          </div>

          {/* "Forging Intelligence." — like "Inteligencia." with shimmer */}
          <div
            style={{
              opacity: taglineOpacity,
              transform: `translateY(${taglineY}px)`,
              fontSize: 72,
              fontWeight: 400,
              fontFamily: FONT.serif,
              fontStyle: 'italic',
              lineHeight: 1.1,
              backgroundImage: SHIMMER_GRADIENT,
              backgroundSize: '200% auto',
              backgroundPosition: bgPosition,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Forging Intelligence.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
