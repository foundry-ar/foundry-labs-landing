import React from 'react';
import { interpolate, spring, useCurrentFrame } from 'remotion';
import { COLORS, FONT, FPS } from '../theme';

const DOT_INDICES = [0, 1, 2] as const;

export const ThinkingIndicator: React.FC<{
  enterFrame?: number;
  exitFrame?: number;
  label?: string;
}> = ({ enterFrame = 0, exitFrame = Infinity, label = 'Searching files and emails…' }) => {
  const frame = useCurrentFrame();

  const appear = spring({
    frame: frame - enterFrame,
    fps: FPS,
    config: { damping: 26, stiffness: 120, mass: 0.6 },
  });

  const gone = frame >= exitFrame;
  const fadeOut = gone
    ? interpolate(frame, [exitFrame, exitFrame + 8], [1, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    : 1;

  const dotDelay = (i: number) => {
    const cycle = (frame - enterFrame) % 24;
    return interpolate(cycle, [i * 5, i * 5 + 6, i * 5 + 12], [0.25, 1, 0.25], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        opacity: appear * fadeOut,
        transform: `translateY(${(1 - appear) * 3}px)`,
        fontFamily: FONT.sans,
        padding: '6px 0',
      }}
    >
      <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
        {DOT_INDICES.map((i) => (
          <div
            key={i}
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: COLORS.accent,
              opacity: dotDelay(i),
            }}
          />
        ))}
      </div>
      <span style={{ fontSize: 16, color: COLORS.muted, fontWeight: 500 }}>
        {label}
      </span>
    </div>
  );
};
