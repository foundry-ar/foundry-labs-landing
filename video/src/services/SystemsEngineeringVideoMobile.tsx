import React from 'react';
import { AbsoluteFill, Sequence, spring, useCurrentFrame } from 'remotion';
import { COLORS, FONT, FPS, SHADOWS } from '../theme';
import { FadeIn } from '../components/FadeIn';
import { GradientText } from '../components/GradientText';

/* ── Mobile: vertical stacked before/after ── */

const StatusBadge: React.FC<{ label: string; color: string; bg: string }> = ({ label, color, bg }) => (
  <span style={{ fontSize: 20, fontWeight: 600, color, background: bg, borderRadius: 20, padding: '4px 14px', textTransform: 'uppercase', letterSpacing: 0.8 }}>{label}</span>
);

const ProcessCard: React.FC<{
  title: string;
  items: string[];
  status: { label: string; color: string; bg: string };
  enterFrame?: number;
  highlight?: boolean;
}> = ({ title, items, status, enterFrame = 0, highlight = false }) => {
  const frame = useCurrentFrame();
  const progress = spring({ frame: frame - enterFrame, fps: FPS, config: { damping: 24, stiffness: 120, mass: 0.7 } });
  return (
    <div
      style={{
        background: highlight ? COLORS.white : 'rgba(255,255,255,0.7)',
        borderRadius: 16,
        border: highlight ? `1px solid ${COLORS.accentBorder}` : `1px solid ${COLORS.panelBorderSubtle}`,
        padding: '20px 24px',
        opacity: progress,
        transform: `translateY(${(1 - progress) * 4}px)`,
        boxShadow: highlight ? SHADOWS.card : SHADOWS.panel,
        fontFamily: FONT.sans,
        marginBottom: 12,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <span style={{ fontSize: 26, fontWeight: 600, color: COLORS.text }}>{title}</span>
        <StatusBadge {...status} />
      </div>
      {items.map((item, i) => (
        <div key={i} style={{ fontSize: 24, color: COLORS.secondary, lineHeight: 1.6, display: 'flex', gap: 10, alignItems: 'baseline' }}>
          <span style={{ color: COLORS.muted }}>•</span>
          {item}
        </div>
      ))}
    </div>
  );
};

const PhaseLabel: React.FC<{ label: string; variant: 'before' | 'after'; enterFrame?: number }> = ({ label, variant, enterFrame = 0 }) => {
  const frame = useCurrentFrame();
  const progress = spring({ frame: frame - enterFrame, fps: FPS, config: { damping: 26, stiffness: 120, mass: 0.6 } });
  return (
    <div style={{ fontSize: 20, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: variant === 'before' ? '#dc2626' : COLORS.accent, marginBottom: 16, opacity: progress, fontFamily: FONT.sans }}>
      {label}
    </div>
  );
};

export const SYSTEMS_MOBILE_DURATION = 370;

export const SystemsEngineeringVideoMobile: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily: FONT.sans }}>
      <div style={{ padding: '60px 32px 32px', display: 'flex', flexDirection: 'column' }}>
        {/* BEFORE */}
        <Sequence from={8} layout="none">
          <PhaseLabel label="Antes" variant="before" enterFrame={0} />
        </Sequence>

        <Sequence from={22} layout="none">
          <ProcessCard
            title="Cotización"
            items={['Excel por email', 'Aprobación por WhatsApp', '3-5 días']}
            status={{ label: 'Manual', color: '#dc2626', bg: 'rgba(220,38,38,0.08)' }}
            enterFrame={0}
          />
        </Sequence>

        <Sequence from={42} layout="none">
          <ProcessCard
            title="Producción"
            items={['Orden verbal', 'Sin trazabilidad', 'Depende de 1 persona']}
            status={{ label: 'Frágil', color: '#d97706', bg: 'rgba(217,119,6,0.08)' }}
            enterFrame={0}
          />
        </Sequence>

        <Sequence from={62} layout="none">
          <ProcessCard
            title="Entrega"
            items={['Sin seguimiento', 'Reclamos por teléfono', 'Sin datos']}
            status={{ label: 'Opaco', color: '#dc2626', bg: 'rgba(220,38,38,0.08)' }}
            enterFrame={0}
          />
        </Sequence>

        {/* AFTER */}
        <Sequence from={120} layout="none">
          <div style={{ marginTop: 20 }}>
            <PhaseLabel label="Después" variant="after" enterFrame={0} />
          </div>
        </Sequence>

        <Sequence from={135} layout="none">
          <ProcessCard
            title="Cotización"
            items={['Formulario → cotización automática', 'Aprobación digital', 'Cerrado en horas']}
            status={{ label: 'Automático', color: COLORS.accent, bg: COLORS.accentMuted }}
            enterFrame={0}
            highlight
          />
        </Sequence>

        <Sequence from={160} layout="none">
          <ProcessCard
            title="Producción"
            items={['Orden al sistema', 'Trazabilidad completa', 'Cualquiera opera']}
            status={{ label: 'Delegable', color: COLORS.accent, bg: COLORS.accentMuted }}
            enterFrame={0}
            highlight
          />
        </Sequence>

        <Sequence from={185} layout="none">
          <ProcessCard
            title="Entrega"
            items={['Tracking automático', 'Encuesta post-entrega', 'Dashboard en tiempo real']}
            status={{ label: 'Medible', color: COLORS.accent, bg: COLORS.accentMuted }}
            enterFrame={0}
            highlight
          />
        </Sequence>

        <Sequence from={280} layout="none">
          <FadeIn enterFrame={0}>
            <div style={{ marginTop: 16, padding: '18px 24px', borderRadius: 16, background: 'rgba(118,75,162,0.06)', border: '1px solid rgba(118,75,162,0.15)' }}>
              <GradientText fontSize={26} fontWeight={600}>
                Tu empresa opera sin depender de vos.
              </GradientText>
            </div>
          </FadeIn>
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
