import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS, FONT, FPS } from '../theme';
import { DotGrid } from '../components/DotGrid';

const SHIMMER_GRADIENT =
  'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #ff9a9e 100%)';
const SHIMMER_CYCLE_FRAMES = 5 * FPS;

export const FoundryClose: React.FC = () => {
  const frame = useCurrentFrame();

  const brandOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const brandY = interpolate(frame, [10, 30], [20, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const taglineOpacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const taglineY = interpolate(frame, [35, 55], [24, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

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
        <div
          style={{
            opacity: brandOpacity,
            transform: `translateY(${brandY}px)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
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
