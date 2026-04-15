import React from 'react';
import { AbsoluteFill, Sequence, spring, useCurrentFrame } from 'remotion';
import { COLORS, FONT, FPS, GRADIENTS, SHADOWS } from '../theme';
import { DotGrid } from '../components/DotGrid';
import { FadeIn } from '../components/FadeIn';
import { GradientText } from '../components/GradientText';

/* ── Scattered spreadsheets converging into a normalized table (EN) ── */

type SourceSheet = {
  filename: string;
  headers: string[];
  rows: string[][];
  x: number;
  y: number;
  rotation: number;
};

const SOURCES: SourceSheet[] = [
  {
    filename: 'quotes_march.xlsx',
    headers: ['Client', 'Amount', 'Status'],
    rows: [
      ['Acme Inc', '$45,000', 'Pending'],
      ['Globex', '$12,500', 'Approved'],
      ['Initech', '$87,300', 'Sent'],
      ['Umbrella', '$32,100', 'Pending'],
    ],
    x: -560,
    y: -40,
    rotation: -3.5,
  },
  {
    filename: 'production_floor.xlsx',
    headers: ['Batch', 'Client', 'Operator'],
    rows: [
      ['L-114', 'Globex', 'A. Ruiz'],
      ['L-115', 'Initech', 'M. Diaz'],
      ['L-116', 'Acme Inc', 'L. Soto'],
    ],
    x: 0,
    y: -220,
    rotation: 2.5,
  },
  {
    filename: 'shipping_logistics.xlsx',
    headers: ['ID', 'Carrier', 'ETA'],
    rows: [
      ['DH-901288', 'DHL', '04/12'],
      ['FX-447', 'FedEx', '04/14'],
      ['ML-220', 'UPS', '04/15'],
    ],
    x: 560,
    y: -40,
    rotation: -2.5,
  },
];

const UNIFIED_HEADERS = ['ID', 'Client', 'Status', 'Total', 'Sources'];
const UNIFIED_ROWS: string[][] = [
  ['ACM-001', 'Acme Inc', 'Quoting', '$45,000', 'Sales + Production'],
  ['GLO-014', 'Globex Corp', 'In production', '$12,500', '3 systems'],
  ['INI-022', 'Initech', 'Delivered', '$87,300', '3 systems'],
  ['UMB-007', 'Umbrella', 'Quoting', '$32,100', 'Sales'],
];

const EXPANDED_ROW_INDEX = 1;
const EXPANDED_DETAILS = [
  {
    label: 'Quoting',
    items: [
      ['Amount', '$12,500'],
      ['Approved by', 'M. Lopez'],
      ['Date', '04/03/2026'],
    ] as const,
  },
  {
    label: 'Production',
    items: [
      ['Batch', 'L-114'],
      ['Operator', 'A. Ruiz'],
      ['Status', 'In progress'],
    ] as const,
  },
  {
    label: 'Delivery',
    items: [
      ['ETA', '04/12/2026'],
      ['Carrier', 'DHL'],
      ['Tracking', 'DH-901288'],
    ] as const,
  },
];

const SourceSheetCard: React.FC<{
  sheet: SourceSheet;
  enterFrame: number;
  convergeFrame: number;
}> = ({ sheet, enterFrame, convergeFrame }) => {
  const frame = useCurrentFrame();
  const enter = spring({
    frame: frame - enterFrame,
    fps: FPS,
    config: { damping: 22, stiffness: 110, mass: 0.8 },
  });
  const converge = spring({
    frame: frame - convergeFrame,
    fps: FPS,
    config: { damping: 26, stiffness: 80, mass: 0.9 },
  });

  const x = sheet.x * (1 - converge);
  const y = sheet.y * (1 - converge);
  const rotation = sheet.rotation * (1 - converge);
  const scale = (0.92 + enter * 0.08) * (1 - converge * 0.55);
  const opacity = enter * (1 - converge);

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '42%',
        width: 360,
        marginLeft: -180,
        transform: `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`,
        transformOrigin: 'center',
        opacity,
        background: COLORS.white,
        borderRadius: 10,
        boxShadow: SHADOWS.card,
        border: `1px solid ${COLORS.panelBorderSubtle}`,
        overflow: 'hidden',
        fontFamily: FONT.sans,
      }}
    >
      <div
        style={{
          background: '#1F2937',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 3,
            background: GRADIENTS.cardTopAccent,
          }}
        />
        <span style={{ color: '#E5E7EB', fontSize: 14, fontWeight: 500 }}>
          {sheet.filename}
        </span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.25)',
              }}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${sheet.headers.length}, 1fr)`,
          background: '#F3F4F6',
          borderBottom: '1px solid #E5E7EB',
        }}
      >
        {sheet.headers.map((h, i) => (
          <div
            key={i}
            style={{
              padding: '10px 12px',
              fontSize: 13,
              fontWeight: 600,
              color: COLORS.text,
              borderRight: i < sheet.headers.length - 1 ? '1px solid #E5E7EB' : 'none',
            }}
          >
            {h}
          </div>
        ))}
      </div>
      {sheet.rows.map((row, ri) => (
        <div
          key={ri}
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${sheet.headers.length}, 1fr)`,
            borderBottom: ri < sheet.rows.length - 1 ? '1px solid #F3F4F6' : 'none',
            background: ri % 2 === 0 ? COLORS.white : '#FAFBFC',
          }}
        >
          {row.map((cell, ci) => (
            <div
              key={ci}
              style={{
                padding: '9px 12px',
                fontSize: 13,
                color: COLORS.secondary,
                borderRight: ci < row.length - 1 ? '1px solid #F3F4F6' : 'none',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const UnifiedTable: React.FC<{
  rowsStartFrame: number;
  expandFrame: number;
  title: string;
  liveLabel: string;
  detailLabel: string;
}> = ({ rowsStartFrame, expandFrame, title, liveLabel, detailLabel }) => {
  const frame = useCurrentFrame();
  const enter = spring({
    frame,
    fps: FPS,
    config: { damping: 26, stiffness: 90, mass: 0.9 },
  });
  const expand = spring({
    frame: frame - expandFrame,
    fps: FPS,
    config: { damping: 28, stiffness: 90, mass: 1 },
  });

  return (
    <div
      style={{
        width: 920,
        background: COLORS.white,
        borderRadius: 14,
        boxShadow: SHADOWS.cardHover,
        border: `1px solid ${COLORS.accentBorder}`,
        overflow: 'hidden',
        opacity: enter,
        transform: `translateY(${(1 - enter) * 24}px)`,
        fontFamily: FONT.sans,
      }}
    >
      <div
        style={{
          background: GRADIENTS.ctaBg,
          padding: '16px 22px',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          color: COLORS.white,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="white" strokeWidth="1.6" />
          <path d="M3 9h18M9 4v16" stroke="white" strokeWidth="1.6" />
        </svg>
        <div style={{ fontSize: 17, fontWeight: 600 }}>{title}</div>
        <div
          style={{
            fontSize: 11,
            padding: '3px 10px',
            borderRadius: 12,
            background: 'rgba(255,255,255,0.18)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 0.8,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399' }} />
          {liveLabel}
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr 160px 140px 200px',
          background: '#F8F9FC',
          borderBottom: '1px solid #E5E7EB',
        }}
      >
        {UNIFIED_HEADERS.map((h, i) => (
          <div
            key={i}
            style={{
              padding: '12px 18px',
              fontSize: 11,
              fontWeight: 700,
              color: COLORS.muted,
              textTransform: 'uppercase',
              letterSpacing: 0.8,
            }}
          >
            {h}
          </div>
        ))}
      </div>

      {UNIFIED_ROWS.map((row, rowIdx) => {
        const rowEnter = spring({
          frame: frame - (rowsStartFrame + rowIdx * 8),
          fps: FPS,
          config: { damping: 26, stiffness: 130, mass: 0.7 },
        });
        const isExpanded = rowIdx === EXPANDED_ROW_INDEX;
        const expandedBg = isExpanded ? Math.min(1, expand * 1.5) : 0;
        return (
          <React.Fragment key={rowIdx}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr 160px 140px 200px',
                borderBottom: '1px solid #F3F4F6',
                background:
                  expandedBg > 0
                    ? `rgba(118,75,162,${0.06 * expandedBg})`
                    : COLORS.white,
                opacity: rowEnter,
                transform: `translateX(${(1 - rowEnter) * -8}px)`,
                position: 'relative',
              }}
            >
              {isExpanded && (
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 3,
                    background: GRADIENTS.accentLine,
                    opacity: expandedBg,
                  }}
                />
              )}
              {row.map((cell, ci) => (
                <div
                  key={ci}
                  style={{
                    padding: '14px 18px',
                    fontSize: 14,
                    color: ci === 0 ? COLORS.accent : COLORS.text,
                    fontWeight: ci === 0 ? 600 : 400,
                    fontFamily: ci === 0 ? 'ui-monospace, monospace' : FONT.sans,
                  }}
                >
                  {cell}
                </div>
              ))}
              {isExpanded && expandedBg > 0.1 && (
                <div
                  style={{
                    position: 'absolute',
                    right: 18,
                    top: '50%',
                    transform: `translateY(-50%) rotate(${expand * 180}deg)`,
                    color: COLORS.accent,
                    opacity: expandedBg,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
            {isExpanded && (
              <div
                style={{
                  overflow: 'hidden',
                  maxHeight: expand * 220,
                  opacity: expand,
                  background:
                    'linear-gradient(180deg, rgba(118,75,162,0.04) 0%, rgba(118,75,162,0.08) 100%)',
                  borderBottom: '1px solid #F3F4F6',
                }}
              >
                <div style={{ padding: '20px 32px' }}>
                  <div
                    style={{
                      fontSize: 11,
                      color: COLORS.muted,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      marginBottom: 14,
                      fontWeight: 600,
                    }}
                  >
                    {detailLabel}
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: 14,
                    }}
                  >
                    {EXPANDED_DETAILS.map((src, i) => (
                      <div
                        key={i}
                        style={{
                          background: COLORS.white,
                          borderRadius: 8,
                          padding: '12px 16px',
                          border: `1px solid ${COLORS.panelBorderSubtle}`,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 10,
                            fontWeight: 700,
                            color: COLORS.accent,
                            textTransform: 'uppercase',
                            letterSpacing: 1,
                            marginBottom: 8,
                          }}
                        >
                          {src.label}
                        </div>
                        {src.items.map(([k, v], j) => (
                          <div
                            key={j}
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              fontSize: 12,
                              padding: '3px 0',
                            }}
                          >
                            <span style={{ color: COLORS.muted }}>{k}</span>
                            <span style={{ color: COLORS.text, fontWeight: 500 }}>
                              {v}
                            </span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export const SYSTEMS_EN_DURATION = 370;

export const SystemsEngineeringVideoEn: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily: FONT.sans }}>
      <DotGrid opacity={0.08} />

      <AbsoluteFill
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: 70,
        }}
      >
        <Sequence from={6} layout="none">
          <FadeIn enterFrame={0}>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 2,
                color: COLORS.accent,
                fontFamily: FONT.sans,
              }}
            >
              From scattered systems to a single source of truth
            </div>
          </FadeIn>
        </Sequence>
      </AbsoluteFill>

      <AbsoluteFill>
        <SourceSheetCard sheet={SOURCES[0]} enterFrame={20} convergeFrame={150} />
        <SourceSheetCard sheet={SOURCES[1]} enterFrame={36} convergeFrame={150} />
        <SourceSheetCard sheet={SOURCES[2]} enterFrame={52} convergeFrame={150} />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 60,
        }}
      >
        <Sequence from={175} layout="none">
          <UnifiedTable
            rowsStartFrame={20}
            expandFrame={70}
            title="Unified system"
            liveLabel="live"
            detailLabel="Normalized data • 3 sources"
          />
        </Sequence>
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: 70,
        }}
      >
        <Sequence from={300} layout="none">
          <FadeIn enterFrame={0}>
            <div
              style={{
                padding: '18px 28px',
                borderRadius: 14,
                background: 'rgba(118,75,162,0.06)',
                border: '1px solid rgba(118,75,162,0.15)',
              }}
            >
              <GradientText fontSize={28} fontWeight={600}>
                Your company runs without depending on you.
              </GradientText>
            </div>
          </FadeIn>
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
