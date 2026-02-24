import React from 'react';
import { AbsoluteFill } from 'remotion';

export const DotGrid: React.FC<{ opacity?: number }> = ({ opacity = 0.15 }) => (
  <AbsoluteFill
    style={{
      backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)',
      backgroundSize: '40px 40px',
      opacity,
      pointerEvents: 'none',
    }}
  />
);
