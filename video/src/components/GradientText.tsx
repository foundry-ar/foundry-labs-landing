import React from 'react';
import { GRADIENTS, FONT } from '../theme';

export const GradientText: React.FC<{
  children: React.ReactNode;
  fontSize?: number;
  fontWeight?: number;
  useSerif?: boolean;
  style?: React.CSSProperties;
}> = ({ children, fontSize = 56, fontWeight = 600, useSerif = false, style }) => (
  <span
    style={{
      background: GRADIENTS.accentText,
      backgroundSize: '200% auto',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontSize,
      fontWeight,
      fontFamily: useSerif ? FONT.serif : FONT.sans,
      fontStyle: useSerif ? 'italic' : 'normal',
      lineHeight: 1.1,
      ...style,
    }}
  >
    {children}
  </span>
);
