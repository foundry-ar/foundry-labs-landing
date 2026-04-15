import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  spring,
} from 'remotion';
import { COLORS, FONT, FPS } from '../theme';
import { DotGrid } from '../components/DotGrid';
import { FadeIn } from '../components/FadeIn';
import { GradientText } from '../components/GradientText';

const ITEMS: Array<
  | { type: 'file'; name: string; ext: string }
  | { type: 'email'; subject: string }
> = [
  { type: 'file', name: 'FINAL_v3_REAL.par', ext: 'par' },
  { type: 'email', subject: 'RE: RE: RE: shaft extension update' },
  { type: 'file', name: 'BOM_v5_revised.xlsx', ext: 'xlsx' },
  { type: 'email', subject: 'FW: Atlas Steel specs — see attached' },
  { type: 'file', name: 'Assembly_MASTER_2.step', ext: 'step' },
  { type: 'email', subject: 'Quick question on Line 4500' },
  { type: 'file', name: 'Notes_meeting_mar12.docx', ext: 'docx' },
  { type: 'email', subject: 'Updated BOM — please review!!' },
  { type: 'file', name: 'Shaft_drawing_OLD.pdf', ext: 'pdf' },
  { type: 'email', subject: 'RE: FW: housing dimensions??' },
  { type: 'file', name: 'Quote_AtlasSteel_v2_FINAL.xlsx', ext: 'xlsx' },
  { type: 'email', subject: 'Turbine specs — need sign-off' },
  { type: 'file', name: 'Drawing_housing_REV_C.pdf', ext: 'pdf' },
  { type: 'email', subject: 'RE: weld procedure for Line 4500' },
  { type: 'file', name: 'Capacity_calcs_DRAFT.xlsx', ext: 'xlsx' },
  { type: 'email', subject: 'FW: FW: customer change request' },
  { type: 'file', name: 'Motor_selection_v4_FINAL.par', ext: 'par' },
  { type: 'email', subject: 'Meeting notes — drive shaft review' },
];

const EXT_COLORS: Record<string, string> = {
  par: '#3D6A96',
  xlsx: '#059669',
  step: '#d97706',
  docx: '#818cf8',
  pdf: '#ef4444',
};

const CX = 960;
const CY = 540;
const RX = 780;
const RY = 420;
const START_ANGLE = -Math.PI / 2;

const FileIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 18,
  color = '#3D6A96',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M4 4a2 2 0 012-2h8l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" fill={color} opacity={0.12} />
    <path d="M4 4a2 2 0 012-2h8l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M14 2v6h6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const EnvelopeIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 18,
  color = '#4285F4',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <rect x="2" y="4" width="20" height="16" rx="3" fill={color} opacity={0.12} />
    <rect x="2" y="4" width="20" height="16" rx="3" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M2 7l10 6 10-6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const OrbitChip: React.FC<{
  index: number;
  total: number;
  delay: number;
  children: React.ReactNode;
}> = ({ index, total, delay, children }) => {
  const frame = useCurrentFrame();

  const scale = spring({
    frame: frame - delay,
    fps: FPS,
    config: { damping: 14, stiffness: 140, mass: 0.5 },
  });

  const opacity = spring({
    frame: frame - delay,
    fps: FPS,
    config: { damping: 32, stiffness: 100, mass: 0.6 },
  });

  const angle = START_ANGLE + (index / total) * Math.PI * 2;
  const x = CX + Math.cos(angle) * RX;
  const y = CY + Math.sin(angle) * RY;

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity: opacity * 0.85,
        fontFamily: FONT.sans,
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </div>
  );
};

const ChipShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'rgba(255,255,255,0.7)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.9)',
      borderRadius: 10,
      padding: '12px 20px',
    }}
  >
    {children}
  </div>
);

export const Scene1Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const totalFrames = 6 * FPS;

  const fadeOut = interpolate(frame, [totalFrames - 12, totalFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, opacity: fadeOut }}>
      <DotGrid />

      {ITEMS.map((item, i) => (
        <OrbitChip key={i} index={i} total={ITEMS.length} delay={i * 4}>
          <ChipShell>
            {item.type === 'file' ? (
              <>
                <FileIcon size={20} color={EXT_COLORS[item.ext] || COLORS.muted} />
                <span style={{ fontSize: 17, color: COLORS.secondary, fontWeight: 500 }}>
                  {item.name}
                </span>
              </>
            ) : (
              <>
                <EnvelopeIcon size={20} color="#4285F4" />
                <span style={{ fontSize: 17, color: COLORS.secondary, fontWeight: 400 }}>
                  {item.subject}
                </span>
              </>
            )}
          </ChipShell>
        </OrbitChip>
      ))}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        <FadeIn enterFrame={20} delay={0}>
          <div
            style={{
              fontSize: 52,
              fontWeight: 300,
              color: COLORS.text,
              fontFamily: FONT.sans,
              textAlign: 'center',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
            }}
          >
            Engineering lives in{' '}
            <GradientText fontSize={52} fontWeight={600} useSerif>
              too many places.
            </GradientText>
          </div>
        </FadeIn>

        <FadeIn enterFrame={20} delay={12}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: COLORS.secondary,
              fontFamily: FONT.sans,
              textAlign: 'center',
              marginTop: 16,
              letterSpacing: '0.025em',
            }}
          >
            Folders. Emails. Tribal knowledge.
          </div>
        </FadeIn>
      </div>
    </AbsoluteFill>
  );
};
