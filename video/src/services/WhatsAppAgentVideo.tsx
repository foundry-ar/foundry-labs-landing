import React from 'react';
import { AbsoluteFill, Sequence, spring, useCurrentFrame, interpolate } from 'remotion';
import { COLORS, FONT, FPS, SHADOWS } from '../theme';
import { DotGrid } from '../components/DotGrid';
import { FadeIn } from '../components/FadeIn';
import { GradientText } from '../components/GradientText';

/* ── WhatsApp-style chat simulation ── */

const PHONE_W = 420;
const PHONE_H = 760;

const WaMessage: React.FC<{
  text: string;
  time: string;
  from: 'customer' | 'agent';
  enterFrame?: number;
}> = ({ text, time, from, enterFrame = 0 }) => {
  const frame = useCurrentFrame();
  const progress = spring({
    frame: frame - enterFrame,
    fps: FPS,
    config: { damping: 24, stiffness: 140, mass: 0.6 },
  });

  const isCustomer = from === 'customer';
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isCustomer ? 'flex-start' : 'flex-end',
        marginBottom: 8,
        opacity: progress,
        transform: `translateY(${(1 - progress) * 4}px)`,
      }}
    >
      <div
        style={{
          maxWidth: '78%',
          background: isCustomer ? '#ffffff' : '#dcf8c6',
          borderRadius: 10,
          padding: '8px 12px 4px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
          fontFamily: FONT.sans,
        }}
      >
        <span style={{ fontSize: 17, color: '#111', lineHeight: 1.45, display: 'block' }}>
          {text}
        </span>
        <span
          style={{
            fontSize: 12,
            color: '#999',
            display: 'block',
            textAlign: 'right',
            marginTop: 2,
          }}
        >
          {time}
        </span>
      </div>
    </div>
  );
};

const TypingBubble: React.FC<{ enterFrame?: number; exitFrame?: number }> = ({
  enterFrame = 0,
  exitFrame = Infinity,
}) => {
  const frame = useCurrentFrame();
  const appear = spring({
    frame: frame - enterFrame,
    fps: FPS,
    config: { damping: 26, stiffness: 120, mass: 0.6 },
  });
  const gone = frame >= exitFrame;
  const fadeOut = gone
    ? interpolate(frame, [exitFrame, exitFrame + 6], [1, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    : 1;

  const dotOpacity = (i: number) => {
    const cycle = (frame - enterFrame) % 24;
    return interpolate(cycle, [i * 5, i * 5 + 6, i * 5 + 12], [0.3, 1, 0.3], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: 8,
        opacity: appear * fadeOut,
      }}
    >
      <div
        style={{
          background: '#dcf8c6',
          borderRadius: 10,
          padding: '12px 16px',
          display: 'flex',
          gap: 4,
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#6b7280',
              opacity: dotOpacity(i),
            }}
          />
        ))}
      </div>
    </div>
  );
};

const PhoneFrame: React.FC<{ children: React.ReactNode; enterFrame?: number }> = ({
  children,
  enterFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const progress = spring({
    frame: frame - enterFrame,
    fps: FPS,
    config: { damping: 28, stiffness: 100, mass: 0.8 },
  });

  return (
    <div
      style={{
        width: PHONE_W,
        height: PHONE_H,
        borderRadius: 36,
        overflow: 'hidden',
        background: '#e5ddd5',
        boxShadow: SHADOWS.cardHover,
        border: '8px solid #1a1a1a',
        display: 'flex',
        flexDirection: 'column',
        opacity: progress,
        transform: `scale(${0.97 + progress * 0.03})`,
      }}
    >
      {/* WhatsApp header */}
      <div
        style={{
          background: '#075e54',
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: COLORS.accent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>F</span>
        </div>
        <div>
          <div style={{ color: '#fff', fontSize: 18, fontWeight: 600, fontFamily: FONT.sans }}>
            TechStore Soporte
          </div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontFamily: FONT.sans }}>
            en línea
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div
        style={{
          flex: 1,
          padding: '16px 12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23c5bfb2\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      >
        {children}
      </div>
    </div>
  );
};

const AgentStep: React.FC<{ number: string; label: string; detail: string }> = ({
  number,
  label,
  detail,
}) => (
  <div style={{ display: 'flex', gap: 14, marginBottom: 18 }}>
    <span
      style={{
        fontSize: 16,
        fontWeight: 700,
        color: COLORS.accent,
        fontFamily: FONT.sans,
        minWidth: 30,
      }}
    >
      {number}
    </span>
    <div>
      <div style={{ fontSize: 24, fontWeight: 600, color: COLORS.text, marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ fontSize: 19, color: COLORS.secondary, lineHeight: 1.5 }}>{detail}</div>
    </div>
  </div>
);

/* ── Main composition ── */
// Tagline appears at 340, hold for ~3s = 440 frames total (~14.7s)
export const WHATSAPP_DURATION = 440;

export const WhatsAppAgentVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily: FONT.sans }}>
      <DotGrid opacity={0.08} />

      <AbsoluteFill>
          {/* Phone — always centered */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <PhoneFrame enterFrame={0}>
              <Sequence from={15} layout="none">
                <WaMessage
                  from="customer"
                  text="Hola, compré una notebook ayer y no me llegó el código de seguimiento"
                  time="10:23"
                  enterFrame={0}
                />
              </Sequence>

              <Sequence from={60} layout="none">
                <TypingBubble enterFrame={0} exitFrame={50} />
              </Sequence>

              <Sequence from={110} layout="none">
                <WaMessage
                  from="agent"
                  text="¡Hola! Encontré tu pedido #4821. Tu notebook ya fue despachada. El código de seguimiento es AR-29481-TX. 📦"
                  time="10:23"
                  enterFrame={0}
                />
              </Sequence>

              <Sequence from={195} layout="none">
                <WaMessage
                  from="customer"
                  text="¿Cuándo llega?"
                  time="10:24"
                  enterFrame={0}
                />
              </Sequence>

              <Sequence from={230} layout="none">
                <TypingBubble enterFrame={0} exitFrame={40} />
              </Sequence>

              <Sequence from={270} layout="none">
                <WaMessage
                  from="agent"
                  text="Según el tracking, la entrega estimada es el jueves 12 entre las 9 y 14 hs. ¿Necesitás algo más?"
                  time="10:24"
                  enterFrame={0}
                />
              </Sequence>
            </PhoneFrame>
          </div>

          {/* Right: context panel — absolutely positioned so phone stays centered */}
          <div
            style={{
              position: 'absolute',
              top: 160,
              right: 80,
              width: 480,
            }}
          >
              <Sequence from={110} layout="none">
                <FadeIn enterFrame={0}>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: COLORS.muted,
                      textTransform: 'uppercase',
                      letterSpacing: 1.5,
                      marginBottom: 16,
                    }}
                  >
                    Lo que hace el agente
                  </div>
                </FadeIn>
              </Sequence>

              <Sequence from={125} layout="none">
                <FadeIn enterFrame={0}>
                  <AgentStep
                    number="01"
                    label="Identifica al cliente"
                    detail="Cruza el número de WhatsApp con la base de datos de pedidos"
                  />
                </FadeIn>
              </Sequence>

              <Sequence from={140} layout="none">
                <FadeIn enterFrame={0}>
                  <AgentStep
                    number="02"
                    label="Busca la información"
                    detail="Consulta el sistema de despacho y obtiene el tracking en tiempo real"
                  />
                </FadeIn>
              </Sequence>

              <Sequence from={270} layout="none">
                <FadeIn enterFrame={0}>
                  <AgentStep
                    number="03"
                    label="Resuelve sin escalar"
                    detail="Responde con datos precisos — sin intervención humana"
                  />
                </FadeIn>
              </Sequence>

              <Sequence from={340} layout="none">
                <FadeIn enterFrame={0}>
                  <div
                    style={{
                      marginTop: 28,
                      padding: '16px 20px',
                      borderRadius: 12,
                      background: 'rgba(118, 75, 162, 0.06)',
                      border: `1px solid rgba(118, 75, 162, 0.15)`,
                    }}
                  >
                    <GradientText fontSize={24} fontWeight={600}>
                      Soporte 24/7, sin equipo extra.
                    </GradientText>
                  </div>
                </FadeIn>
              </Sequence>
          </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
