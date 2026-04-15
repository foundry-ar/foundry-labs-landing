import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { COLORS, FONT, FPS } from '../theme';
import { DotGrid } from '../components/DotGrid';
import { ChatShell, UserMessage, SystemMessage } from '../components/ChatShell';
import { AnswerCard } from '../components/AnswerCards';
import { ThinkingIndicator } from '../components/ThinkingIndicator';
import { SourceChipRow } from '../components/SourceChips';
import { FadeIn } from '../components/FadeIn';
import { GradientText } from '../components/GradientText';

/* ── Enterprise AI: internal knowledge base demo ── */
// Timeline:
// 0-5: ChatShell appears
// 5-45: User types in input bar
// 45: Message sent (input clears, user message appears)
// 75-125: Thinking indicator
// 130+: Answer with sources
// 280+: Tagline
const USER_QUESTION = '¿Cuál es la política de devoluciones para clientes enterprise con contrato anual?';

export const ENTERPRISE_DURATION = 370;

export const EnterpriseAIVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily: FONT.sans }}>
      <DotGrid opacity={0.08} />

      <AbsoluteFill>
          <ChatShell
            enterFrame={0}
            sidebarItems={[
              { title: 'Política de devoluciones', active: true },
              { title: 'Proceso de onboarding' },
              { title: 'SLA clientes enterprise' },
              { title: 'Guía de precios 2025' },
            ]}
            sidebarLabel="Consultas recientes"
            inputPlaceholder="Preguntale a tu empresa..."
            inputTypingText={USER_QUESTION}
            inputTypingStart={5}
            inputTypingEnd={45}
          >
            {/* User message appears after "sending" */}
            <Sequence from={45} layout="none">
              <UserMessage>
                {USER_QUESTION}
              </UserMessage>
            </Sequence>

            {/* Thinking — disappears before the answer */}
            <Sequence from={75} durationInFrames={55} layout="none">
              <SystemMessage>
                <ThinkingIndicator
                  enterFrame={0}
                  exitFrame={50}
                  label="Buscando en documentos internos…"
                />
              </SystemMessage>
            </Sequence>

            {/* Answer */}
            <Sequence from={130} layout="none">
              <SystemMessage label="Respuesta con fuentes">
                <AnswerCard
                  enterFrame={0}
                  fields={[
                    { label: 'Plazo', value: '30 días desde la facturación', highlight: true },
                    { label: 'Condición', value: 'Producto sin uso y en packaging original' },
                    { label: 'Excepción', value: 'Clientes con contrato anual: 60 días, sin condición de packaging' },
                    { label: 'Aprobación', value: 'Automática hasta USD 5.000 — Gerencia arriba de ese monto' },
                  ]}
                />

                <Sequence from={30} layout="none">
                  <div style={{ marginTop: 14 }}>
                    <SourceChipRow
                      enterFrame={0}
                      chips={[
                        { icon: '📄', label: 'Política Comercial v4.2' },
                        { icon: '📋', label: 'Contrato Marco Enterprise' },
                        { icon: '✉️', label: 'Memo Gerencia (Mar 2025)' },
                      ]}
                    />
                  </div>
                </Sequence>

                <Sequence from={60} layout="none">
                  <div style={{ marginTop: 14 }}>
                    <SourceChipRow
                      enterFrame={0}
                      chips={[
                        { icon: '↗️', label: 'Abrir política completa', variant: 'action' },
                        { icon: '📧', label: 'Enviar resumen al cliente', variant: 'action' },
                      ]}
                    />
                  </div>
                </Sequence>
              </SystemMessage>
            </Sequence>

            {/* Tagline */}
            <Sequence from={280} layout="none">
              <FadeIn enterFrame={0}>
                <div
                  style={{
                    marginTop: 12,
                    padding: '14px 20px',
                    borderRadius: 12,
                    background: 'rgba(184, 99, 46, 0.06)',
                    border: `1px solid rgba(184, 99, 46, 0.15)`,
                  }}
                >
                  <GradientText fontSize={24} fontWeight={600}>
                    Tu empresa responde con su propio conocimiento.
                  </GradientText>
                </div>
              </FadeIn>
            </Sequence>
          </ChatShell>
        </AbsoluteFill>
    </AbsoluteFill>
  );
};
