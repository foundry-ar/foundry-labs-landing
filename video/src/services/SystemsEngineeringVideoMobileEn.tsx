import React from 'react';
import { AbsoluteFill, Sequence, spring, useCurrentFrame } from 'remotion';
import { COLORS, EXCEL, FONT, FPS, GRADIENTS, SHADOWS } from '../theme';
import { FadeIn } from '../components/FadeIn';
import { GradientText } from '../components/GradientText';

/* ── Mobile EN: scattered spreadsheets converging into a normalized table ── */

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
    ],
    x: -120,
    y: -540,
    rotation: -3,
  },
  {
    filename: 'production_floor.xlsx',
    headers: ['Batch', 'Client', 'Operator'],
    rows: [
      ['L-114', 'Globex', 'A. Ruiz'],
      ['L-115', 'Initech', 'M. Diaz'],
      ['L-116', 'Acme Inc', 'L. Soto'],
    ],
    x: 120,
    y: -180,
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
    x: -100,
    y: 180,
    rotation: -2,
  },
];

const UNIFIED_HEADERS = ['ID', 'Client', 'Status', 'Total'];
const UNIFIED_ROWS: string[][] = [
  ['ACM-001', 'Acme Inc', 'Quoting', '$45,000'],
  ['GLO-014', 'Globex Corp', 'In production', '$12,500'],
  ['INI-022', 'Initech', 'Delivered', '$87,300'],
  ['UMB-007', 'Umbrella', 'Quoting', '$32,100'],
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

  const cols = `58px repeat(${sheet.headers.length}, 1fr)`;

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: 740,
        marginLeft: -370,
        transform: `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`,
        transformOrigin: 'center',
        opacity,
        background: COLORS.white,
        borderRadius: 10,
        boxShadow: '0 22px 48px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.05)',
        border: `1px solid ${EXCEL.gridlineStrong}`,
        overflow: 'hidden',
        fontFamily: FONT.sans,
      }}
    >
      {/* Excel title bar */}
      <div
        style={{
          background: EXCEL.green,
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          color: COLORS.white,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 5,
            background: COLORS.white,
            color: EXCEL.green,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 22,
            fontWeight: 900,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            lineHeight: 1,
          }}
        >
          X
        </div>
        <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: 0.2 }}>
          {sheet.filename}
        </span>
      </div>

      {/* Column-letter strip */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: cols,
          background: EXCEL.greenRibbon,
          borderBottom: `1px solid ${EXCEL.greenRibbonBorder}`,
          fontSize: 16,
          fontWeight: 600,
          color: EXCEL.rowHeaderText,
        }}
      >
        <div
          style={{
            padding: '6px 0',
            borderRight: `1px solid ${EXCEL.greenRibbonBorder}`,
          }}
        />
        {sheet.headers.map((_, i) => (
          <div
            key={i}
            style={{
              padding: '6px 0',
              textAlign: 'center',
              borderRight:
                i < sheet.headers.length - 1
                  ? `1px solid ${EXCEL.greenRibbonBorder}`
                  : 'none',
            }}
          >
            {String.fromCharCode(65 + i)}
          </div>
        ))}
      </div>

      {/* Column-name row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: cols,
          background: COLORS.white,
          borderBottom: `1px solid ${EXCEL.gridlineStrong}`,
        }}
      >
        <div
          style={{
            padding: '14px 0',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 600,
            color: EXCEL.rowHeaderText,
            background: EXCEL.greenRibbon,
            borderRight: `1px solid ${EXCEL.greenRibbonBorder}`,
          }}
        >
          1
        </div>
        {sheet.headers.map((h, i) => (
          <div
            key={i}
            style={{
              padding: '14px 18px',
              fontSize: 22,
              fontWeight: 700,
              color: COLORS.text,
              borderRight:
                i < sheet.headers.length - 1 ? `1px solid ${EXCEL.gridline}` : 'none',
            }}
          >
            {h}
          </div>
        ))}
      </div>

      {/* Data rows */}
      {sheet.rows.map((row, ri) => (
        <div
          key={ri}
          style={{
            display: 'grid',
            gridTemplateColumns: cols,
            borderBottom:
              ri < sheet.rows.length - 1 ? `1px solid ${EXCEL.gridline}` : 'none',
          }}
        >
          <div
            style={{
              padding: '14px 0',
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 600,
              color: EXCEL.rowHeaderText,
              background: EXCEL.greenRibbon,
              borderRight: `1px solid ${EXCEL.greenRibbonBorder}`,
            }}
          >
            {ri + 2}
          </div>
          {row.map((cell, ci) => (
            <div
              key={ci}
              style={{
                padding: '14px 18px',
                fontSize: 22,
                color: COLORS.text,
                borderRight:
                  ci < row.length - 1 ? `1px solid ${EXCEL.gridline}` : 'none',
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
        width: 980,
        background: COLORS.white,
        borderRadius: 20,
        boxShadow: SHADOWS.cardHover,
        border: `1px solid ${COLORS.accentBorder}`,
        overflow: 'hidden',
        opacity: enter,
        transform: `translateY(${(1 - enter) * 32}px)`,
        fontFamily: FONT.sans,
      }}
    >
      <div
        style={{
          background: GRADIENTS.ctaBg,
          padding: '24px 30px',
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          color: COLORS.white,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="white" strokeWidth="1.6" />
          <path d="M3 9h18M9 4v16" stroke="white" strokeWidth="1.6" />
        </svg>
        <div style={{ fontSize: 26, fontWeight: 600 }}>{title}</div>
        <div
          style={{
            marginLeft: 'auto',
            fontSize: 16,
            padding: '6px 14px',
            borderRadius: 18,
            background: 'rgba(255,255,255,0.18)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 0.8,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#34d399' }} />
          {liveLabel}
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '160px 1fr 220px 180px',
          background: '#F8F9FC',
          borderBottom: '1px solid #E5E7EB',
        }}
      >
        {UNIFIED_HEADERS.map((h, i) => (
          <div
            key={i}
            style={{
              padding: '16px 22px',
              fontSize: 16,
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
                gridTemplateColumns: '160px 1fr 220px 180px',
                borderBottom: '1px solid #F3F4F6',
                background:
                  expandedBg > 0
                    ? `rgba(184,99,46,${0.06 * expandedBg})`
                    : COLORS.white,
                opacity: rowEnter,
                transform: `translateX(${(1 - rowEnter) * -10}px)`,
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
                    width: 4,
                    background: GRADIENTS.accentLine,
                    opacity: expandedBg,
                  }}
                />
              )}
              {row.map((cell, ci) => (
                <div
                  key={ci}
                  style={{
                    padding: '20px 22px',
                    fontSize: 22,
                    color: ci === 0 ? COLORS.accent : COLORS.text,
                    fontWeight: ci === 0 ? 600 : 400,
                    fontFamily: ci === 0 ? 'ui-monospace, monospace' : FONT.sans,
                  }}
                >
                  {cell}
                </div>
              ))}
            </div>
            {isExpanded && (
              <div
                style={{
                  overflow: 'hidden',
                  maxHeight: expand * 540,
                  opacity: expand,
                  background:
                    'linear-gradient(180deg, rgba(184,99,46,0.04) 0%, rgba(184,99,46,0.08) 100%)',
                  borderBottom: '1px solid #F3F4F6',
                }}
              >
                <div style={{ padding: '24px 32px' }}>
                  <div
                    style={{
                      fontSize: 16,
                      color: COLORS.muted,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      marginBottom: 18,
                      fontWeight: 600,
                    }}
                  >
                    {detailLabel}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 12,
                    }}
                  >
                    {EXPANDED_DETAILS.map((src, i) => (
                      <div
                        key={i}
                        style={{
                          background: COLORS.white,
                          borderRadius: 12,
                          padding: '16px 20px',
                          border: `1px solid ${COLORS.panelBorderSubtle}`,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: COLORS.accent,
                            textTransform: 'uppercase',
                            letterSpacing: 1,
                            marginBottom: 10,
                          }}
                        >
                          {src.label}
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                          {src.items.map(([k, v], j) => (
                            <div key={j} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                              <span style={{ color: COLORS.muted, fontSize: 14 }}>{k}</span>
                              <span style={{ color: COLORS.text, fontSize: 18, fontWeight: 500 }}>
                                {v}
                              </span>
                            </div>
                          ))}
                        </div>
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

export const SYSTEMS_MOBILE_EN_DURATION = 370;

export const SystemsEngineeringVideoMobileEn: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily: FONT.sans }}>
      <AbsoluteFill
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: 90,
        }}
      >
        <Sequence from={6} layout="none">
          <FadeIn enterFrame={0}>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 2,
                color: COLORS.accent,
                fontFamily: FONT.sans,
                textAlign: 'center',
                padding: '0 40px',
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
          paddingTop: 80,
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
          paddingBottom: 90,
        }}
      >
        <Sequence from={300} layout="none">
          <FadeIn enterFrame={0}>
            <div
              style={{
                padding: '24px 36px',
                borderRadius: 18,
                background: 'rgba(184,99,46,0.06)',
                border: '1px solid rgba(184,99,46,0.15)',
                margin: '0 40px',
              }}
            >
              <GradientText fontSize={36} fontWeight={600}>
                Your company runs without depending on you.
              </GradientText>
            </div>
          </FadeIn>
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
