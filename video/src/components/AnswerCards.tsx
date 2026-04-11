import React from 'react';
import { spring, useCurrentFrame } from 'remotion';
import { COLORS, FONT, FPS, SHADOWS } from '../theme';

interface AnswerField {
  label: string;
  value: string;
  highlight?: boolean;
}

export const AnswerCard: React.FC<{
  fields: AnswerField[];
  enterFrame?: number;
  delay?: number;
}> = ({ fields, enterFrame = 0, delay = 0 }) => {
  const frame = useCurrentFrame();

  const progress = spring({
    frame: frame - enterFrame - delay,
    fps: FPS,
    config: { damping: 26, stiffness: 100, mass: 0.8 },
  });

  return (
    <div
      style={{
        background: COLORS.white,
        borderRadius: 12,
        border: `1px solid ${COLORS.panelBorderSubtle}`,
        padding: '18px 22px',
        opacity: progress,
        transform: `translateY(${(1 - progress) * 4}px)`,
        fontFamily: FONT.sans,
        boxShadow: SHADOWS.panel,
      }}
    >
      {fields.map((field, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            gap: 12,
            marginBottom: i < fields.length - 1 ? 10 : 0,
            alignItems: 'baseline',
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: COLORS.muted,
              textTransform: 'uppercase',
              letterSpacing: 1.2,
              minWidth: 90,
              flexShrink: 0,
            }}
          >
            {field.label}
          </span>
          <span
            style={{
              fontSize: 19,
              color: field.highlight ? COLORS.accent : COLORS.text,
              fontWeight: field.highlight ? 600 : 400,
              lineHeight: 1.5,
            }}
          >
            {field.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export const ProjectRow: React.FC<{
  name: string;
  year: string;
  enterFrame?: number;
  delay?: number;
}> = ({ name, year, enterFrame = 0, delay = 0 }) => {
  const frame = useCurrentFrame();

  const progress = spring({
    frame: frame - enterFrame - delay,
    fps: FPS,
    config: { damping: 26, stiffness: 100, mass: 0.8 },
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: COLORS.white,
        borderRadius: 10,
        border: `1px solid ${COLORS.panelBorderSubtle}`,
        padding: '12px 18px',
        opacity: progress,
        transform: `translateX(${(1 - progress) * 4}px)`,
        fontFamily: FONT.sans,
        boxShadow: SHADOWS.panel,
      }}
    >
      <span style={{ fontSize: 19, color: COLORS.text, fontWeight: 500 }}>{name}</span>
      <span style={{ fontSize: 16, color: COLORS.muted }}>{year}</span>
    </div>
  );
};
