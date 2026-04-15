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
    <div style={{ display: 'flex', justifyContent: isCustomer ? 'flex-start' : 'flex-end', marginBottom: 8, opacity: progress, transform: `translateY(${(1 - progress) * 4}px)` }}>
      <div style={{ maxWidth: '82%', background: isCustomer ? '#ffffff' : '#dcf8c6', borderRadius: 12, padding: '10px 14px 6px', boxShadow: '0 1px 2px rgba(0,0,0,0.08)', fontFamily: FONT.sans }}>
        <span style={{ fontSize: 22, color: '#111', lineHeight: 1.4, display: 'block' }}>{text}</span>
        <span style={{ fontSize: 16, color: '#999', display: 'block', textAlign: 'right', marginTop: 2 }}>{time}</span>
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
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8, opacity: appear * fadeOut }}>
      <div style={{ background: '#dcf8c6', borderRadius: 12, padding: '12px 16px', display: 'flex', gap: 5 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: '#6b7280', opacity: dotOpacity(i) }} />
        ))}
      </div>
    </div>
  );
};

const AgentStep: React.FC<{ number: string; label: string; detail: string }> = ({ number, label, detail }) => (
  <div style={{ display: 'flex', gap: 14, marginBottom: 18 }}>
    <span style={{ fontSize: 28, fontWeight: 700, color: COLORS.accent, fontFamily: FONT.sans, minWidth: 36 }}>{number}</span>
    <div>
      <div style={{ fontSize: 32, fontWeight: 600, color: COLORS.text, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 26, color: COLORS.secondary, lineHeight: 1.4 }}>{detail}</div>
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
            width: 620,
            height: 920,
            borderRadius: 40,
            overflow: 'hidden',
            background: '#e5ddd5',
            border: '6px solid #1a1a1a',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          }}
        >
          {/* WhatsApp header */}
          <div style={{ background: '#075e54', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: COLORS.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontSize: 16, fontWeight: 700 }}>F</span>
            </div>
            <div>
              <div style={{ color: '#fff', fontSize: 20, fontWeight: 600 }}>TechStore Soporte</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16 }}>en línea</div>
            </div>
          </div>

          {/* Chat */}
          <div
            style={{
              flex: 1,
              padding: '14px 12px',
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
        </div>
      </div>

      {/* Agent steps below the phone */}
      <div style={{ padding: '30px 48px 0' }}>
        <Sequence from={110} layout="none">
          <FadeIn enterFrame={0}>
            <div style={{ fontSize: 24, fontWeight: 600, color: COLORS.muted, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 18 }}>
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
            <div style={{ marginTop: 10, padding: '16px 20px', borderRadius: 16, background: 'rgba(184,99,46,0.06)', border: '1px solid rgba(184,99,46,0.15)' }}>
              <GradientText fontSize={30} fontWeight={600}>
                Soporte 24/7, sin equipo extra.
              </GradientText>
            </div>
          </FadeIn>
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
