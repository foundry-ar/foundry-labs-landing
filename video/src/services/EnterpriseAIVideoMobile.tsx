import React from 'react';
import { AbsoluteFill, Sequence, spring, useCurrentFrame, interpolate } from 'remotion';
import { COLORS, FONT, FPS } from '../theme';
import { FadeIn } from '../components/FadeIn';
import { GradientText } from '../components/GradientText';
import { ThinkingIndicator } from '../components/ThinkingIndicator';
import { useTypingText, TypingCursor } from '../components/TypingCursor';

/* ── Mobile chat UI (portrait, like Claude/ChatGPT mobile) ── */

const USER_QUESTION_ES = '¿Cuál es la política de devoluciones para clientes enterprise con contrato anual?';

const MobileUserBubble: React.FC<{
  children: React.ReactNode;
  enterFrame?: number;
}> = ({ children, enterFrame = 0 }) => {
  const frame = useCurrentFrame();
  const progress = spring({
    frame: frame - enterFrame,
    fps: FPS,
    config: { damping: 28, stiffness: 140, mass: 0.6 },
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: 24,
        opacity: progress,
        transform: `translateY(${(1 - progress) * 4}px)`,
      }}
    >
      <div
        style={{
          background: '#f4f4f4',
          borderRadius: 24,
          padding: '16px 22px',
          maxWidth: '85%',
          color: '#111',
          fontSize: 28,
          lineHeight: 1.5,
          fontWeight: 400,
          fontFamily: FONT.sans,
        }}
      >
        {children}
      </div>
    </div>
  );
};

const MobileAnswerField: React.FC<{
  label: string;
  value: string;
  highlight?: boolean;
  enterFrame?: number;
  delay?: number;
}> = ({ label, value, highlight = false, enterFrame = 0, delay = 0 }) => {
  const frame = useCurrentFrame();
  const progress = spring({
    frame: frame - enterFrame - delay,
    fps: FPS,
    config: { damping: 30, stiffness: 60, mass: 1 },
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        marginBottom: 16,
        opacity: progress,
      }}
    >
      <span
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: COLORS.muted,
          textTransform: 'uppercase',
          letterSpacing: 1.2,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: 28,
          color: highlight ? COLORS.accent : COLORS.text,
          fontWeight: highlight ? 600 : 400,
          lineHeight: 1.4,
        }}
      >
        {value}
      </span>
    </div>
  );
};

const MobileSourceChip: React.FC<{
  icon: string;
  label: string;
  enterFrame?: number;
  delay?: number;
}> = ({ icon, label, enterFrame = 0, delay = 0 }) => {
  const frame = useCurrentFrame();
  const progress = spring({
    frame: frame - enterFrame - delay,
    fps: FPS,
    config: { damping: 28, stiffness: 120, mass: 0.6 },
  });

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: COLORS.white,
        border: `1px solid ${COLORS.panelBorderSubtle}`,
        borderRadius: 24,
        padding: '10px 18px',
        opacity: progress,
        fontFamily: FONT.sans,
      }}
    >
      <span style={{ fontSize: 22 }}>{icon}</span>
      <span style={{ fontSize: 22, fontWeight: 500, color: COLORS.secondary }}>{label}</span>
    </div>
  );
};

const MobileInputBar: React.FC<{
  placeholder: string;
  typingText: string;
  typingStart: number;
  typingEnd: number;
}> = ({ placeholder, typingText, typingStart, typingEnd }) => {
  const frame = useCurrentFrame();
  const typing = useTypingText(typingText, typingStart, 1.2);
  const sentAlready = frame >= typingEnd;
  const showTyping = !sentAlready && frame >= typingStart;
  const displayText = showTyping ? typing.text : null;
  const isActive = showTyping && typing.isTyping;

  return (
    <div
      style={{
        background: isActive ? '#fff' : '#f4f4f4',
        border: `2px solid ${isActive ? '#ccc' : '#e0e0e0'}`,
        borderRadius: 32,
        padding: '18px 20px 18px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span style={{ fontSize: 26, color: displayText ? '#111' : '#aaa', fontWeight: 400, fontFamily: FONT.sans }}>
        {displayText || placeholder}
        {isActive && <TypingCursor color="#111" />}
      </span>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: displayText && !isActive ? '#111' : '#e5e5e5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 19V5m0 0l-7 7m7-7l7 7"
            stroke={displayText && !isActive ? '#fff' : '#b0b0b0'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

const MobileThinking: React.FC<{
  enterFrame?: number;
  exitFrame?: number;
  label: string;
}> = ({ enterFrame = 0, exitFrame = Infinity, label }) => {
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

  const dotOpacity = (i: number) => {
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
        gap: 14,
        opacity: appear * fadeOut,
        transform: `translateY(${(1 - appear) * 3}px)`,
        fontFamily: FONT.sans,
        padding: '6px 0',
      }}
    >
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: COLORS.accent,
              opacity: dotOpacity(i),
            }}
          />
        ))}
      </div>
      <span style={{ fontSize: 26, color: COLORS.muted, fontWeight: 500 }}>
        {label}
      </span>
    </div>
  );
};

/* ── Composition ── */
export const ENTERPRISE_MOBILE_DURATION = 350;

export const EnterpriseAIVideoMobile: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily: FONT.sans }}>
      {/* Phone frame */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 40 }}>
        <div
          style={{
            width: 820,
            height: 1440,
            borderRadius: 40,
            overflow: 'hidden',
            background: '#ffffff',
            border: '6px solid #1a1a1a',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          }}
        >
          {/* App header */}
          <div
            style={{
              padding: '14px 20px',
              borderBottom: '1px solid #ebebeb',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: COLORS.accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: '#fff', fontSize: 16, fontWeight: 700 }}>F</span>
            </div>
            <span style={{ fontSize: 22, fontWeight: 600, color: '#111' }}>Foundry</span>
          </div>

          {/* Chat area */}
          <div
            style={{
              flex: 1,
              padding: '16px 16px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
        {/* User message */}
        <Sequence from={80} layout="none">
          <MobileUserBubble enterFrame={0}>
            {USER_QUESTION_ES}
          </MobileUserBubble>
        </Sequence>

        {/* Thinking */}
        <Sequence from={95} durationInFrames={40} layout="none">
          <div style={{ display: 'flex', gap: 14, marginBottom: 24 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: COLORS.accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span style={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>F</span>
            </div>
            <MobileThinking enterFrame={0} exitFrame={35} label="Buscando en documentos internos…" />
          </div>
        </Sequence>

        {/* Answer */}
        <Sequence from={135} layout="none">
          <div style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: COLORS.accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span style={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>F</span>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: COLORS.accent,
                  textTransform: 'uppercase',
                  letterSpacing: 1.5,
                  marginBottom: 16,
                }}
              >
                Respuesta con fuentes
              </div>

              <div
                style={{
                  background: COLORS.white,
                  borderRadius: 16,
                  border: `1px solid ${COLORS.panelBorderSubtle}`,
                  padding: '20px 24px',
                  marginBottom: 16,
                }}
              >
                <MobileAnswerField label="Plazo" value="30 días desde la facturación" highlight enterFrame={0} />
                <MobileAnswerField label="Condición" value="Producto sin uso y en packaging original" enterFrame={0} delay={5} />
                <MobileAnswerField label="Excepción" value="Clientes con contrato anual: 60 días, sin condición de packaging" enterFrame={0} delay={10} />
                <MobileAnswerField label="Aprobación" value="Automática hasta USD 5.000" enterFrame={0} delay={15} />
              </div>

              <Sequence from={30} layout="none">
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 12 }}>
                  <MobileSourceChip icon="📄" label="Política Comercial v4.2" enterFrame={0} />
                  <MobileSourceChip icon="📋" label="Contrato Marco" enterFrame={0} delay={3} />
                </div>
              </Sequence>
            </div>
          </div>
        </Sequence>

          </div>

          {/* Input bar inside phone */}
          <div style={{ padding: '6px 16px 14px' }}>
            <MobileInputBar
              placeholder="Preguntale a tu empresa..."
              typingText={USER_QUESTION_ES}
              typingStart={5}
              typingEnd={80}
            />
          </div>
        </div>
      </div>

      {/* Tagline below phone */}
      <div style={{ padding: '40px 48px 0' }}>
        <Sequence from={260} layout="none">
          <FadeIn enterFrame={0}>
            <div
              style={{
                padding: '22px 28px',
                borderRadius: 16,
                background: 'rgba(184, 99, 46, 0.06)',
                border: `1px solid rgba(184, 99, 46, 0.15)`,
              }}
            >
              <GradientText fontSize={36} fontWeight={600}>
                Tu empresa responde con su propio conocimiento.
              </GradientText>
            </div>
          </FadeIn>
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
