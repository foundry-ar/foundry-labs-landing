import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring } from 'remotion';
import { COLORS, FONT, FPS, SHADOWS } from '../theme';
import { DotGrid } from '../components/DotGrid';
import { ChatShell, UserMessage, SystemMessage } from '../components/ChatShell';
import { AnswerCard, ProjectRow } from '../components/AnswerCards';
import { FadeIn } from '../components/FadeIn';
import { TypingCursor } from '../components/TypingCursor';
import { ThinkingIndicator } from '../components/ThinkingIndicator';

const Q1 =
  '¿Por qué se extendió el eje de transmisión en la Línea de Procesamiento 4500 — Atlas Steel — 2021?';
const Q2 =
  'Mostrá otros proyectos donde se modificó la longitud del housing por aumentos de capacidad.';

const THINKING_LABEL = 'Buscando archivos y emails…';

const TOTAL_SECONDS = 20;

const Q1_TYPE_START = 6;
const Q1_CPS = 2.30;
const Q1_TYPE_END = Math.ceil(Q1.length / Q1_CPS) + Q1_TYPE_START;
const Q1_THINK_START = Q1_TYPE_END + 3;
const Q1_ANSWER_START = Q1_THINK_START + 50;

const CHIP_HIGHLIGHT_START = Q1_ANSWER_START + 107;
const EMAIL_PANEL_IN = CHIP_HIGHLIGHT_START + 10;
const EMAIL_PANEL_OUT = EMAIL_PANEL_IN + 143;

const SCROLL_START = EMAIL_PANEL_OUT + 17;
const SCROLL_END = SCROLL_START + 20;
const Q2_TYPE_START = SCROLL_START + 5;
const Q2_CPS = 2.67;
const Q2_TYPE_END = Math.ceil(Q2.length / Q2_CPS) + Q2_TYPE_START;
const Q2_THINK_START = Q2_TYPE_END + 3;
const Q2_ANSWER_START = Q2_THINK_START + 50;

const MOCK_EMAILS = [
  {
    from: 'J. Lindqvist',
    date: '12 mar 2021',
    subject: 'RE: Extensión del eje — Línea 4500',
    snippet:
      'Confirmado con el equipo: extensión de 300mm para soportar perfiles de 6.5m. Spec Rev B adjunta.',
  },
  {
    from: 'S. Nakamura',
    date: '10 mar 2021',
    subject: 'Atlas Steel — solicitud de cambio de capacidad',
    snippet:
      'Atlas necesita procesar perfiles de 6.5m en Línea 4500. El eje actual solo soporta 6.0m máx.',
  },
  {
    from: 'M. Torres',
    date: '28 feb 2021',
    subject: 'FW: Revisión housing Línea 4500',
    snippet:
      'Las dimensiones del housing están bien para la extensión. No se requieren cambios de ese lado.',
  },
];

const EmailPanel: React.FC<{ enterFrame: number; exitFrame: number }> = ({
  enterFrame,
  exitFrame,
}) => {
  const frame = useCurrentFrame();

  const slideIn = spring({
    frame: frame - enterFrame,
    fps: FPS,
    config: { damping: 24, stiffness: 100, mass: 0.7 },
  });

  const fadeOut = interpolate(frame, [exitFrame, exitFrame + 12], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const opacity = slideIn * fadeOut;
  const translateX = interpolate(slideIn, [0, 1], [60, 0]);

  if (frame < enterFrame) return null;

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
        zIndex: 30,
        opacity,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.08)',
        }}
      />

      <div
        style={{
          width: 700,
          background: COLORS.white,
          borderRadius: 16,
          border: `1px solid ${COLORS.panelBorderSubtle}`,
          boxShadow: SHADOWS.cardHover,
          overflow: 'hidden',
          transform: `translateX(${translateX}px)`,
          position: 'relative',
        }}
      >
        <div
          style={{
            padding: '16px 24px',
            borderBottom: `1px solid ${COLORS.panelBorderSubtle}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 16 }}>📧</span>
            <span
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: COLORS.text,
                fontFamily: FONT.sans,
              }}
            >
              Emails relacionados
            </span>
            <span
              style={{
                fontSize: 12,
                color: COLORS.muted,
                fontFamily: FONT.sans,
              }}
            >
              3 resultados
            </span>
          </div>
          <span
            style={{
              fontSize: 11,
              color: COLORS.accent,
              fontWeight: 500,
              fontFamily: FONT.sans,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            Atlas Steel — Línea 4500
          </span>
        </div>

        {MOCK_EMAILS.map((email, i) => {
          const rowProgress = spring({
            frame: frame - enterFrame - 8 - i * 5,
            fps: FPS,
            config: { damping: 26, stiffness: 100, mass: 0.6 },
          });

          return (
            <div
              key={i}
              style={{
                padding: '14px 24px',
                borderBottom:
                  i < MOCK_EMAILS.length - 1
                    ? `1px solid ${COLORS.panelBorderSubtle}`
                    : 'none',
                opacity: rowProgress,
                transform: `translateY(${(1 - rowProgress) * 8}px)`,
                fontFamily: FONT.sans,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 4,
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.text }}>
                  {email.from}
                </span>
                <span style={{ fontSize: 12, color: COLORS.muted }}>{email.date}</span>
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: COLORS.text,
                  marginBottom: 4,
                }}
              >
                {email.subject}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: COLORS.secondary,
                  lineHeight: 1.4,
                }}
              >
                {email.snippet}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Scene2ConversationEs: React.FC = () => {
  const frame = useCurrentFrame();
  const totalFrames = TOTAL_SECONDS * FPS;

  const fadeIn = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const fadeOut = interpolate(frame, [totalFrames - 12, totalFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const q1Elapsed = Math.max(0, frame - Q1_TYPE_START);
  const q1Chars = Math.min(Math.floor(q1Elapsed * Q1_CPS), Q1.length);
  const q1Text = Q1.slice(0, q1Chars);
  const q1Typing = q1Chars < Q1.length && frame >= Q1_TYPE_START;
  const q1Done = q1Chars >= Q1.length;

  const showQ1Thinking = q1Done && frame >= Q1_THINK_START && frame < Q1_ANSWER_START;
  const showQ1Answer = frame >= Q1_ANSWER_START;

  const chipGlow =
    frame >= CHIP_HIGHLIGHT_START && frame < EMAIL_PANEL_OUT
      ? interpolate(
          frame,
          [CHIP_HIGHLIGHT_START, CHIP_HIGHLIGHT_START + 8],
          [0, 1],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
        )
      : 0;

  const scrollY = interpolate(frame, [SCROLL_START, SCROLL_END], [0, -40], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const q2Elapsed = Math.max(0, frame - Q2_TYPE_START);
  const q2Chars = Math.min(Math.floor(q2Elapsed * Q2_CPS), Q2.length);
  const q2Text = Q2.slice(0, q2Chars);
  const q2Typing = q2Chars < Q2.length && frame >= Q2_TYPE_START;
  const q2Done = q2Chars >= Q2.length;

  const showQ2Thinking = q2Done && frame >= Q2_THINK_START && frame < Q2_ANSWER_START;
  const showQ2Answer = frame >= Q2_ANSWER_START;

  const scroll2Y = interpolate(
    frame,
    [Q2_ANSWER_START, Q2_ANSWER_START + 20],
    [0, -30],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );

  const totalScroll = scrollY + scroll2Y;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        opacity: fadeIn * fadeOut,
        fontFamily: FONT.sans,
      }}
    >
      <DotGrid />
      <ChatShell
        enterFrame={2}
        sidebarLabel="Recientes"
        inputPlaceholder="Preguntale a Foundry..."
        sidebarItems={[
          { title: 'Atlas Steel — Línea 4500', active: true },
          { title: 'Nordic Metals — revisión capacidad' },
          { title: 'FerroWorks 2023 — especificaciones' },
          { title: 'Estándares de soldadura' },
        ]}
      >
        <div style={{ transform: `translateY(${totalScroll}px)` }}>
          <UserMessage>
            <span>{q1Text}</span>
            {q1Typing && <TypingCursor />}
          </UserMessage>

          {showQ1Thinking && (
            <ThinkingIndicator
              enterFrame={Q1_THINK_START}
              exitFrame={Q1_ANSWER_START}
              label={THINKING_LABEL}
            />
          )}

          {showQ1Answer && (
            <SystemMessage label="Respuestas con fuentes">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <AnswerCard
                  enterFrame={Q1_ANSWER_START}
                  fields={[
                    {
                      label: 'Proyecto',
                      value: 'Atlas Steel — Línea de Procesamiento 4500 (2021)',
                    },
                    {
                      label: 'Cambio',
                      value: 'Eje de transmisión extendido 300mm',
                      highlight: true,
                    },
                    {
                      label: 'Razón',
                      value: 'Necesario para soportar perfiles de 6.5m (original soportaba 6.0m)',
                    },
                    {
                      label: 'Fuentes',
                      value: 'Email (12 mar 2021) + PDF Spec (Rev B)',
                    },
                  ]}
                />
                <FadeIn enterFrame={Q1_ANSWER_START} delay={12}>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        background:
                          chipGlow > 0
                            ? `rgba(118, 75, 162, ${0.08 + chipGlow * 0.15})`
                            : COLORS.accentMuted,
                        border: `1px solid ${
                          chipGlow > 0
                            ? `rgba(118, 75, 162, ${0.2 + chipGlow * 0.4})`
                            : COLORS.accentBorder
                        }`,
                        borderRadius: 20,
                        padding: '7px 14px',
                        transform: chipGlow > 0 ? `scale(${1 + chipGlow * 0.05})` : undefined,
                        boxShadow:
                          chipGlow > 0
                            ? `0 0 ${chipGlow * 12}px rgba(118, 75, 162, ${chipGlow * 0.25})`
                            : 'none',
                        fontFamily: FONT.sans,
                      }}
                    >
                      <span style={{ fontSize: 13 }}>📧</span>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: COLORS.accent,
                        }}
                      >
                        Abrir email
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        background: COLORS.accentMuted,
                        border: `1px solid ${COLORS.accentBorder}`,
                        borderRadius: 20,
                        padding: '7px 14px',
                        fontFamily: FONT.sans,
                      }}
                    >
                      <span style={{ fontSize: 13 }}>📁</span>
                      <span style={{ fontSize: 12, fontWeight: 500, color: COLORS.accent }}>
                        Abrir carpeta del proyecto
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        background: COLORS.accentMuted,
                        border: `1px solid ${COLORS.accentBorder}`,
                        borderRadius: 20,
                        padding: '7px 14px',
                        fontFamily: FONT.sans,
                      }}
                    >
                      <span style={{ fontSize: 13 }}>📋</span>
                      <span style={{ fontSize: 12, fontWeight: 500, color: COLORS.accent }}>
                        Ver lista de piezas
                      </span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </SystemMessage>
          )}

          {frame >= Q2_TYPE_START && (
            <UserMessage>
              <span>{q2Text}</span>
              {q2Typing && <TypingCursor />}
            </UserMessage>
          )}

          {showQ2Thinking && (
            <ThinkingIndicator
              enterFrame={Q2_THINK_START}
              exitFrame={Q2_ANSWER_START}
              label={THINKING_LABEL}
            />
          )}

          {showQ2Answer && (
            <SystemMessage>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <ProjectRow name="Nordic Metals" year="2020" enterFrame={Q2_ANSWER_START} delay={0} />
                <ProjectRow name="Atlas Steel" year="2021" enterFrame={Q2_ANSWER_START} delay={4} />
                <ProjectRow name="FerroWorks" year="2023" enterFrame={Q2_ANSWER_START} delay={8} />
              </div>

              <FadeIn enterFrame={Q2_ANSWER_START} delay={14}>
                <div
                  style={{
                    marginTop: 14,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    background: COLORS.successMuted,
                    border: `1px solid rgba(5, 150, 105, 0.15)`,
                    borderRadius: 20,
                    padding: '9px 16px',
                    width: 'fit-content',
                  }}
                >
                  <span style={{ fontSize: 13 }}>💡</span>
                  <span style={{ fontSize: 13, color: COLORS.success, fontWeight: 500 }}>
                    Patrón: Aumento de capacidad &gt; 8%
                  </span>
                </div>
              </FadeIn>
            </SystemMessage>
          )}
        </div>
      </ChatShell>

      <EmailPanel enterFrame={EMAIL_PANEL_IN} exitFrame={EMAIL_PANEL_OUT} />
    </AbsoluteFill>
  );
};
