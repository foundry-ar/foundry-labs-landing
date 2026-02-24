import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS, FONT, FPS } from '../theme';
import { DotGrid } from '../components/DotGrid';
import { ChatShell, UserMessage, SystemMessage } from '../components/ChatShell';
import { AnswerCard } from '../components/AnswerCards';
import { SourceChipRow } from '../components/SourceChips';
import { FadeIn } from '../components/FadeIn';
import { TypingCursor, useTypingText } from '../components/TypingCursor';
import { ThinkingIndicator } from '../components/ThinkingIndicator';

const QUESTION = "What's the standard turbine configuration for Line 4500?";
const CPS = 1.7;

export const Scene3Augment: React.FC = () => {
  const frame = useCurrentFrame();
  const totalFrames = 7 * FPS;

  const fadeIn = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const fadeOut = interpolate(frame, [totalFrames - 10, totalFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const captionProgress = interpolate(frame, [3, 14], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const { text, isTyping, isDone } = useTypingText(QUESTION, 20, CPS);
  const typingDoneFrame = Math.ceil(QUESTION.length / CPS) + 20;
  const thinkingStart = typingDoneFrame + 3;
  const answerStart = thinkingStart + 45;
  const showAnswer = frame >= answerStart;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        opacity: fadeIn * fadeOut,
        fontFamily: FONT.sans,
      }}
    >
      <DotGrid />

      <div
        style={{
          position: 'absolute',
          top: 56,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 20,
          opacity: captionProgress,
          transform: `translateY(${(1 - captionProgress) * 8}px)`,
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.9)',
            borderRadius: 20,
            padding: '8px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: COLORS.success,
            }}
          />
          <span style={{ fontSize: 13, color: COLORS.secondary, fontWeight: 500 }}>
            New engineer. First week.
          </span>
        </div>
      </div>

      <ChatShell enterFrame={6}>
        <UserMessage>
          <span>{text}</span>
          {isTyping && <TypingCursor />}
        </UserMessage>

        {isDone && !showAnswer && (
          <ThinkingIndicator enterFrame={thinkingStart} exitFrame={answerStart} />
        )}

        {showAnswer && (
          <SystemMessage>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <AnswerCard
                enterFrame={answerStart}
                fields={[
                  { label: 'Standard', value: '4 turbines', highlight: true },
                  { label: 'Variant', value: 'High-capacity: 6 turbines' },
                ]}
              />

              <FadeIn enterFrame={answerStart} delay={12}>
                <SourceChipRow
                  enterFrame={answerStart}
                  stagger={4}
                  chips={[
                    { icon: '📖', label: 'Technical Manual v3.2' },
                    { icon: '📂', label: 'Project Delta Industries 2022' },
                  ]}
                />
              </FadeIn>
            </div>
          </SystemMessage>
        )}
      </ChatShell>
    </AbsoluteFill>
  );
};
