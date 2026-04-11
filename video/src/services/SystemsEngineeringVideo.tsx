import React from 'react';
import { AbsoluteFill, Sequence, spring, useCurrentFrame } from 'remotion';
import { COLORS, FONT, FPS, SHADOWS } from '../theme';
import { DotGrid } from '../components/DotGrid';
import { FadeIn } from '../components/FadeIn';
import { GradientText } from '../components/GradientText';

/* ── Before/After flow visualization ── */

const StatusBadge: React.FC<{
  label: string;
  color: string;
  bg: string;
}> = ({ label, color, bg }) => (
  <span
    style={{
      fontSize: 10,
      fontWeight: 600,
      color,
      background: bg,
      borderRadius: 20,
      padding: '3px 10px',
      textTransform: 'uppercase',
      letterSpacing: 0.8,
    }}
  >
    {label}
  </span>
);

const ProcessCard: React.FC<{
  title: string;
  items: string[];
  status: { label: string; color: string; bg: string };
  enterFrame?: number;
  highlight?: boolean;
}> = ({ title, items, status, enterFrame = 0, highlight = false }) => {
  const frame = useCurrentFrame();
  const progress = spring({
    frame: frame - enterFrame,
    fps: FPS,
    config: { damping: 24, stiffness: 120, mass: 0.7 },
  });

  return (
    <div
      style={{
        background: highlight ? COLORS.white : 'rgba(255,255,255,0.7)',
        borderRadius: 12,
        border: highlight
          ? `1px solid ${COLORS.accentBorder}`
          : `1px solid ${COLORS.panelBorderSubtle}`,
        padding: '16px 20px',
        opacity: progress,
        transform: `translateY(${(1 - progress) * 4}px)`,
        boxShadow: highlight ? SHADOWS.card : SHADOWS.panel,
        fontFamily: FONT.sans,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: COLORS.text }}>{title}</span>
        <StatusBadge {...status} />
      </div>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            fontSize: 13,
            color: COLORS.secondary,
            lineHeight: 1.6,
            display: 'flex',
            gap: 8,
            alignItems: 'baseline',
          }}
        >
          <span style={{ color: COLORS.muted }}>•</span>
          {item}
        </div>
      ))}
    </div>
  );
};

const ArrowDown: React.FC<{ enterFrame?: number }> = ({ enterFrame = 0 }) => {
  const frame = useCurrentFrame();
  const progress = spring({
    frame: frame - enterFrame,
    fps: FPS,
    config: { damping: 24, stiffness: 120, mass: 0.6 },
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '8px 0',
        opacity: progress,
      }}
    >
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 5v14m0 0l-7-7m7 7l7-7"
          stroke={COLORS.accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const PhaseLabel: React.FC<{
  label: string;
  variant: 'before' | 'after';
  enterFrame?: number;
}> = ({ label, variant, enterFrame = 0 }) => {
  const frame = useCurrentFrame();
  const progress = spring({
    frame: frame - enterFrame,
    fps: FPS,
    config: { damping: 26, stiffness: 120, mass: 0.6 },
  });

  const isBefore = variant === 'before';
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: 2,
        color: isBefore ? '#dc2626' : COLORS.accent,
        marginBottom: 16,
        opacity: progress,
        fontFamily: FONT.sans,
      }}
    >
      {label}
    </div>
  );
};

/* ── Composition ── */
// Tagline appears at 290, hold for ~2.5s = 370 frames total (~12.3s)
export const SYSTEMS_DURATION = 370;

export const SystemsEngineeringVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily: FONT.sans }}>
      <DotGrid opacity={0.08} />

      <AbsoluteFill>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: 100,
              padding: '100px 100px 0',
            }}
          >
            {/* ── Left column: BEFORE ── */}
            <div style={{ width: 440, flexShrink: 0 }}>
              <Sequence from={8} layout="none">
                <PhaseLabel label="Antes" variant="before" enterFrame={0} />
              </Sequence>

              <Sequence from={22} layout="none">
                <ProcessCard
                  title="Cotización"
                  items={['Excel compartido por email', 'El gerente aprueba por WhatsApp', '3-5 días para cerrar']}
                  status={{ label: 'Manual', color: '#dc2626', bg: 'rgba(220,38,38,0.08)' }}
                  enterFrame={0}
                />
              </Sequence>

              <Sequence from={45} layout="none">
                <ArrowDown enterFrame={0} />
              </Sequence>

              <Sequence from={52} layout="none">
                <ProcessCard
                  title="Producción"
                  items={['Orden verbal al piso', 'Sin trazabilidad de materiales', 'Depende de 1 persona']}
                  status={{ label: 'Frágil', color: '#d97706', bg: 'rgba(217,119,6,0.08)' }}
                  enterFrame={0}
                />
              </Sequence>

              <Sequence from={75} layout="none">
                <ArrowDown enterFrame={0} />
              </Sequence>

              <Sequence from={82} layout="none">
                <ProcessCard
                  title="Entrega"
                  items={['Sin seguimiento post-venta', 'Reclamos por teléfono', 'Sin datos para mejorar']}
                  status={{ label: 'Opaco', color: '#dc2626', bg: 'rgba(220,38,38,0.08)' }}
                  enterFrame={0}
                />
              </Sequence>
            </div>

            {/* ── Right column: AFTER ── */}
            <div style={{ width: 440, flexShrink: 0 }}>
              <Sequence from={140} layout="none">
                <PhaseLabel label="Después" variant="after" enterFrame={0} />
              </Sequence>

              <Sequence from={155} layout="none">
                <ProcessCard
                  title="Cotización"
                  items={[
                    'Formulario web → cotización automática',
                    'Aprobación digital con firma',
                    'Cerrado en horas, no días',
                  ]}
                  status={{ label: 'Automático', color: COLORS.accent, bg: COLORS.accentMuted }}
                  enterFrame={0}
                  highlight
                />
              </Sequence>

              <Sequence from={178} layout="none">
                <ArrowDown enterFrame={0} />
              </Sequence>

              <Sequence from={185} layout="none">
                <ProcessCard
                  title="Producción"
                  items={[
                    'Orden generada al sistema',
                    'Trazabilidad completa de materiales',
                    'Cualquiera del equipo puede operar',
                  ]}
                  status={{ label: 'Delegable', color: COLORS.accent, bg: COLORS.accentMuted }}
                  enterFrame={0}
                  highlight
                />
              </Sequence>

              <Sequence from={208} layout="none">
                <ArrowDown enterFrame={0} />
              </Sequence>

              <Sequence from={215} layout="none">
                <ProcessCard
                  title="Entrega"
                  items={[
                    'Tracking automático al cliente',
                    'Encuesta post-entrega',
                    'Dashboard de métricas en tiempo real',
                  ]}
                  status={{ label: 'Medible', color: COLORS.accent, bg: COLORS.accentMuted }}
                  enterFrame={0}
                  highlight
                />
              </Sequence>

              <Sequence from={290} layout="none">
                <FadeIn enterFrame={0}>
                  <div
                    style={{
                      marginTop: 20,
                      padding: '16px 20px',
                      borderRadius: 12,
                      background: 'rgba(118, 75, 162, 0.06)',
                      border: `1px solid rgba(118, 75, 162, 0.15)`,
                    }}
                  >
                    <GradientText fontSize={20} fontWeight={600}>
                      Tu empresa opera sin depender de vos.
                    </GradientText>
                  </div>
                </FadeIn>
              </Sequence>
            </div>
          </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
