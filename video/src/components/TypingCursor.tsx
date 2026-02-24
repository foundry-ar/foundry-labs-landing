import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { COLORS } from '../theme';

export const TypingCursor: React.FC<{
  color?: string;
}> = ({ color = COLORS.accent }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame % 30, [0, 10, 15, 25, 30], [1, 1, 0, 0, 1]);

  return (
    <span
      style={{
        display: 'inline-block',
        width: 2,
        height: '1.1em',
        backgroundColor: color,
        opacity,
        marginLeft: 2,
        verticalAlign: 'text-bottom',
      }}
    />
  );
};

export const useTypingText = (
  fullText: string,
  startFrame: number,
  charsPerFrame: number = 1.5,
) => {
  const frame = useCurrentFrame();
  const elapsed = Math.max(0, frame - startFrame);
  const charCount = Math.min(Math.floor(elapsed * charsPerFrame), fullText.length);
  const isTyping = charCount < fullText.length;
  const isDone = charCount >= fullText.length;
  return { text: fullText.slice(0, charCount), isTyping, isDone };
};
