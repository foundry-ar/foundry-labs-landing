import React from 'react';
import { AbsoluteFill, Sequence, spring, useCurrentFrame, interpolate } from 'remotion';
import { COLORS, FONT, FPS } from '../theme';
import { FadeIn } from '../components/FadeIn';
import { GradientText } from '../components/GradientText';

/* ── Mobile WhatsApp: phone frame + agent steps below ── */

const WaMessage: React.FC<{
  text: string;
  time: string;
  from: 'customer' | 'agent';
  enterFrame?: number;
}> = ({ text, time, from, enterFrame = 0 }) => {
  const frame = useCurrentFrame();
  const progress = spring({ frame: frame - enterFrame, fps: FPS, config: { damping: 28, stiffness: 140, mass: 0.6 } });
  const isCustomer = from === 'customer';
  return (
    <div style={{ display: 'flex', justifyContent: isCustomer ? 'flex-start' : 'flex-end', marginBottom: 12, opacity: progress, transform: `translateY(${(1 - progress) * 4}px)` }}>
      <div style={{ maxWidth: '82%', background: isCustomer ? '#ffffff' : '#dcf8c6', borderRadius: 16, padding: '14px 18px 8px', boxShadow: '0 1px 2px rgba(0,0,0,0.08)', fontFamily: FONT.sans }}>
        <span style={{ fontSize: 30, color: '#111', lineHeight: 1.4, display: 'block' }}>{text}</span>
        <span style={{ fontSize: 20, color: '#999', display: 'block', textAlign: 'right', marginTop: 4 }}>{time}</span>
      </div>
    </div>
  );
};

const TypingBubble: React.FC<{ enterFrame?: number; exitFrame?: number }> = ({ enterFrame = 0, exitFrame = Infinity }) => {
  const frame = useCurrentFrame();
  const appear = spring({ frame: frame - enterFrame, fps: FPS, config: { damping: 26, stiffness: 120, mass: 0.6 } });
  const gone = frame >= exitFrame;
  const fadeOut = gone ? interpolate(frame, [exitFrame, exitFrame + 6], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) : 1;
  const dotOpacity = (i: number) => {
    const cycle = (frame - enterFrame) % 24;
    return interpolate(cycle, [i * 5, i * 5 + 6, i * 5 + 12], [0.3, 1, 0.3], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12, opacity: appear * fadeOut }}>
      <div style={{ background: '#dcf8c6', borderRadius: 16, padding: '16px 22px', display: 'flex', gap: 7 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: '#6b7280', opacity: dotOpacity(i) }} />
        ))}
      </div>
    </div>
  );
};

const WaInputBar: React.FC<{ placeholder: string }> = ({ placeholder }) => (
  <div style={{ background: '#f0f0f0', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
    <div style={{ flex: 1, background: '#ffffff', borderRadius: 999, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
      <span style={{ flex: 1, color: '#8696a0', fontSize: 24, fontFamily: FONT.sans }}>{placeholder}</span>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
      </svg>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    </div>
    <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#075e54', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    </div>
  </div>
);

const AgentStep: React.FC<{ number: string; label: string; detail: string }> = ({ number, label, detail }) => (
  <div style={{ display: 'flex', gap: 22, marginBottom: 28 }}>
    <span style={{ fontSize: 44, fontWeight: 700, color: COLORS.accent, fontFamily: FONT.sans, minWidth: 60 }}>{number}</span>
    <div>
      <div style={{ fontSize: 46, fontWeight: 600, color: COLORS.text, marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 36, color: COLORS.secondary, lineHeight: 1.4 }}>{detail}</div>
    </div>
  </div>
);

export const WHATSAPP_MOBILE_DURATION = 440;

export const WhatsAppAgentVideoMobile: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily: FONT.sans }}>
      {/* Phone frame — centered, compact */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 40 }}>
        <div
          style={{
            width: 840,
            height: 1200,
            borderRadius: 48,
            overflow: 'hidden',
            background: '#e5ddd5',
            border: '8px solid #1a1a1a',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 24px 48px rgba(0,0,0,0.1)',
          }}
        >
          {/* WhatsApp header */}
          <div style={{ background: '#075e54', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: COLORS.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontSize: 24, fontWeight: 700 }}>F</span>
            </div>
            <div>
              <div style={{ color: '#fff', fontSize: 28, fontWeight: 600 }}>TechStore Soporte</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 22 }}>en línea</div>
            </div>
          </div>

          {/* Chat */}
          <div
            style={{
              flex: 1,
              padding: '20px 18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23c5bfb2\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          >
            <Sequence from={15} layout="none">
              <WaMessage from="customer" text="Hola, compré una notebook ayer y no me llegó el código de seguimiento" time="10:23" enterFrame={0} />
            </Sequence>
            <Sequence from={60} layout="none">
              <TypingBubble enterFrame={0} exitFrame={50} />
            </Sequence>
            <Sequence from={110} layout="none">
              <WaMessage from="agent" text="¡Hola! Encontré tu pedido #4821. Tu notebook ya fue despachada. El código de seguimiento es AR-29481-TX. 📦" time="10:23" enterFrame={0} />
            </Sequence>
            <Sequence from={195} layout="none">
              <WaMessage from="customer" text="¿Cuándo llega?" time="10:24" enterFrame={0} />
            </Sequence>
            <Sequence from={230} layout="none">
              <TypingBubble enterFrame={0} exitFrame={40} />
            </Sequence>
            <Sequence from={270} layout="none">
              <WaMessage from="agent" text="Según el tracking, la entrega estimada es el jueves 12 entre las 9 y 14 hs. ¿Necesitás algo más?" time="10:24" enterFrame={0} />
            </Sequence>
          </div>

          <WaInputBar placeholder="Mensaje" />
        </div>
      </div>

      {/* Agent steps below the phone */}
      <div style={{ padding: '40px 56px 0' }}>
        <Sequence from={110} layout="none">
          <FadeIn enterFrame={0}>
            <div style={{ fontSize: 32, fontWeight: 600, color: COLORS.muted, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 26 }}>
              Lo que hace el agente
            </div>
          </FadeIn>
        </Sequence>

        <Sequence from={125} layout="none">
          <FadeIn enterFrame={0}>
            <AgentStep number="01" label="Identifica al cliente" detail="Cruza el número de WhatsApp con la base de datos de pedidos" />
          </FadeIn>
        </Sequence>

        <Sequence from={140} layout="none">
          <FadeIn enterFrame={0}>
            <AgentStep number="02" label="Busca la información" detail="Consulta el sistema de despacho y obtiene el tracking en tiempo real" />
          </FadeIn>
        </Sequence>

        <Sequence from={270} layout="none">
          <FadeIn enterFrame={0}>
            <AgentStep number="03" label="Resuelve sin escalar" detail="Responde con datos precisos — sin intervención humana" />
          </FadeIn>
        </Sequence>

        <Sequence from={340} layout="none">
          <FadeIn enterFrame={0}>
            <div style={{ marginTop: 20, padding: '24px 30px', borderRadius: 22, background: 'rgba(184,99,46,0.06)', border: '1px solid rgba(184,99,46,0.15)' }}>
              <GradientText fontSize={42} fontWeight={600}>
                Soporte 24/7, sin equipo extra.
              </GradientText>
            </div>
          </FadeIn>
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
