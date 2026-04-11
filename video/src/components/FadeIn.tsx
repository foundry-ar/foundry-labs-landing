import React from 'react';
import { spring, useCurrentFrame } from 'remotion';
import { FPS } from '../theme';

export const FadeIn: React.FC<{
  children: React.ReactNode;
  enterFrame?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  style?: React.CSSProperties;
}> = ({
  children,
  enterFrame = 0,
  delay = 0,
  direction = 'up',
  distance = 6,
  style,
}) => {
  const frame = useCurrentFrame();

  const progress = spring({
    frame: frame - enterFrame - delay,
    fps: FPS,
    config: { damping: 26, stiffness: 100, mass: 0.8 },
  });

  const transforms: Record<string, string> = {
    up: `translateY(${(1 - progress) * distance}px)`,
    down: `translateY(${(1 - progress) * -distance}px)`,
    left: `translateX(${(1 - progress) * distance}px)`,
    right: `translateX(${(1 - progress) * -distance}px)`,
    none: '',
  };

  return (
    <div
      style={{
        opacity: progress,
        transform: transforms[direction],
        ...style,
      }}
    >
      {children}
    </div>
  );
};
