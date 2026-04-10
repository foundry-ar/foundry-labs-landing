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
import { FoundryClose } from './FoundryClose';

const CLOSE_START = 370;
const CLOSE_DURATION = 120;

export const ENTERPRISE_EN_DURATION = CLOSE_START + CLOSE_DURATION;

export const EnterpriseAIVideoEn: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily: FONT.sans }}>
      <DotGrid opacity={0.08} />

      <Sequence from={0} durationInFrames={CLOSE_START} layout="none">
        <AbsoluteFill>
          <ChatShell
            enterFrame={0}
            sidebarItems={[
              { title: 'Return policy', active: true },
              { title: 'Onboarding process' },
              { title: 'Enterprise SLA' },
              { title: 'Pricing guide 2025' },
            ]}
            sidebarLabel="Recent queries"
            inputPlaceholder="Ask your company..."
          >
            <Sequence from={20} layout="none">
              <UserMessage>
                What is the return policy for enterprise clients with an annual contract?
              </UserMessage>
            </Sequence>

            <Sequence from={65} layout="none">
              <SystemMessage>
                <ThinkingIndicator
                  enterFrame={0}
                  exitFrame={65}
                  label="Searching internal documents…"
                />
              </SystemMessage>
            </Sequence>

            <Sequence from={130} layout="none">
              <SystemMessage label="Answer with sources">
                <AnswerCard
                  enterFrame={0}
                  fields={[
                    { label: 'Window', value: '30 days from invoicing', highlight: true },
                    { label: 'Condition', value: 'Product unused and in original packaging' },
                    { label: 'Exception', value: 'Annual contract clients: 60 days, no packaging requirement' },
                    { label: 'Approval', value: 'Automatic up to USD 5,000 — Management above that amount' },
                  ]}
                />

                <Sequence from={30} layout="none">
                  <div style={{ marginTop: 14 }}>
                    <SourceChipRow
                      enterFrame={0}
                      chips={[
                        { icon: '📄', label: 'Commercial Policy v4.2' },
                        { icon: '📋', label: 'Enterprise Framework Agreement' },
                        { icon: '✉️', label: 'Management Memo (Mar 2025)' },
                      ]}
                    />
                  </div>
                </Sequence>

                <Sequence from={60} layout="none">
                  <div style={{ marginTop: 14 }}>
                    <SourceChipRow
                      enterFrame={0}
                      chips={[
                        { icon: '↗️', label: 'Open full policy', variant: 'action' },
                        { icon: '📧', label: 'Send summary to client', variant: 'action' },
                      ]}
                    />
                  </div>
                </Sequence>
              </SystemMessage>
            </Sequence>

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
                    Your company answers with its own knowledge.
                  </GradientText>
                </div>
              </FadeIn>
            </Sequence>
          </ChatShell>
        </AbsoluteFill>
      </Sequence>

      <Sequence from={CLOSE_START} durationInFrames={CLOSE_DURATION}>
        <FoundryClose />
      </Sequence>
    </AbsoluteFill>
  );
};
