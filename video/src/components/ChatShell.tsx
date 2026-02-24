import React from 'react';
import { interpolate, useCurrentFrame, spring } from 'remotion';
import { COLORS, FONT, FPS, SHADOWS, GRADIENTS } from '../theme';

export const ChatShell: React.FC<{
  children: React.ReactNode;
  enterFrame?: number;
}> = ({ children, enterFrame = 0 }) => {
  const frame = useCurrentFrame();

  const progress = spring({
    frame: frame - enterFrame,
    fps: FPS,
    config: { damping: 28, stiffness: 120, mass: 0.8 },
  });

  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [24, 0]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: FONT.sans,
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div
        style={{
          width: 1200,
          background: COLORS.panel,
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: 16,
          border: `1px solid ${COLORS.panelBorder}`,
          overflow: 'hidden',
          boxShadow: SHADOWS.card,
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            height: 2,
            background: GRADIENTS.cardTopAccent,
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '14px 24px',
            borderBottom: `1px solid ${COLORS.panelBorderSubtle}`,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
          <span
            style={{
              marginLeft: 16,
              color: COLORS.secondary,
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 0.5,
            }}
          >
            Foundry
          </span>
        </div>
        <div style={{ padding: '28px 36px', overflow: 'hidden' }}>{children}</div>
      </div>
    </div>
  );
};

export const UserMessage: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
    <div
      style={{
        background: COLORS.black,
        borderRadius: 20,
        padding: '12px 20px',
        maxWidth: '85%',
        color: COLORS.white,
        fontSize: 17,
        lineHeight: 1.5,
        fontWeight: 400,
      }}
    >
      {children}
    </div>
  </div>
);

export const SystemMessage: React.FC<{
  children: React.ReactNode;
  label?: string;
}> = ({ children, label }) => (
  <div style={{ marginBottom: 20 }}>
    {label && (
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: COLORS.accent,
          textTransform: 'uppercase',
          letterSpacing: 1.5,
          marginBottom: 10,
        }}
      >
        {label}
      </div>
    )}
    {children}
  </div>
);
