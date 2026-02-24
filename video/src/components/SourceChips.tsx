import React from 'react';
import { spring, useCurrentFrame } from 'remotion';
import { COLORS, FONT, FPS } from '../theme';

export const SourceChip: React.FC<{
  icon?: string;
  label: string;
  enterFrame?: number;
  delay?: number;
  variant?: 'default' | 'action';
}> = ({ icon, label, enterFrame = 0, delay = 0, variant = 'default' }) => {
  const frame = useCurrentFrame();

  const progress = spring({
    frame: frame - enterFrame - delay,
    fps: FPS,
    config: { damping: 28, stiffness: 120, mass: 0.6 },
  });

  const isAction = variant === 'action';

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: isAction ? COLORS.accentMuted : COLORS.white,
        border: `1px solid ${isAction ? COLORS.accentBorder : COLORS.panelBorderSubtle}`,
        borderRadius: 20,
        padding: '7px 14px',
        opacity: progress,
        transform: `scale(${0.92 + progress * 0.08})`,
        fontFamily: FONT.sans,
      }}
    >
      {icon && <span style={{ fontSize: 13 }}>{icon}</span>}
      <span
        style={{
          fontSize: 12,
          fontWeight: 500,
          color: isAction ? COLORS.accent : COLORS.secondary,
        }}
      >
        {label}
      </span>
    </div>
  );
};

export const SourceChipRow: React.FC<{
  chips: Array<{ icon?: string; label: string; variant?: 'default' | 'action' }>;
  enterFrame?: number;
  stagger?: number;
}> = ({ chips, enterFrame = 0, stagger = 3 }) => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    {chips.map((chip, i) => (
      <SourceChip
        key={i}
        icon={chip.icon}
        label={chip.label}
        variant={chip.variant}
        enterFrame={enterFrame}
        delay={i * stagger}
      />
    ))}
  </div>
);
