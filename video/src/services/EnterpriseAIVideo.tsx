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
// Tagline appears at 280, hold for ~3s = 370 frames total (~12.3s)
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
          >
            {/* User asks a question */}
            <Sequence from={20} layout="none">
              <UserMessage>
                ¿Cuál es la política de devoluciones para clientes enterprise con contrato anual?
              </UserMessage>
            </Sequence>

            {/* Thinking */}
            <Sequence from={65} layout="none">
              <SystemMessage>
                <ThinkingIndicator
                  enterFrame={0}
                  exitFrame={65}
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
                    background: 'rgba(118, 75, 162, 0.06)',
                    border: `1px solid rgba(118, 75, 162, 0.15)`,
                  }}
                >
                  <GradientText fontSize={18} fontWeight={600}>
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
