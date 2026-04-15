import React from 'react';
import { AbsoluteFill, Sequence, interpolate, spring, useCurrentFrame } from 'remotion';
import { COLORS, EXCEL, FONT, FPS, GRADIENTS } from '../theme';
import { FadeIn } from '../components/FadeIn';
import { GradientText } from '../components/GradientText';

/* ── Mobile: stacked "Sin Foundry" vs "Con Foundry".
 *
 * Top half: 3 Excel sheets edited manually with a floating cursor.
 * Bottom half: a Foundry panel that syncs on one click.
 */

export const SYSTEMS_MOBILE_DURATION = 370;

// ─── Types ──────────────────────────────────────────────────────

type EditableCell = {
  text: string;
  before?: string;
  typedAt?: number;
  typingDuration?: number;
};
type Cell = string | EditableCell;

// ─── Cursor ─────────────────────────────────────────────────────

const Cursor: React.FC<{ x: number; y: number; visible: boolean }> = ({
  x,
  y,
  visible,
}) => (
  <svg
    width={34}
    height={40}
    viewBox="0 0 22 26"
    style={{
      position: 'absolute',
      left: x,
      top: y,
      opacity: visible ? 1 : 0,
      filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.3))',
      pointerEvents: 'none',
      zIndex: 50,
    }}
  >
    <path
      d="M2 2 L18 13 L10.5 14.5 L15 22.5 L11.5 24 L7 16 L2 20 Z"
      fill="#111"
      stroke="#fff"
      strokeWidth={1.4}
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Excel sheet ────────────────────────────────────────────────

const ExcelSheet: React.FC<{
  filename: string;
  headers: string[];
  rows: Cell[][];
  width: number;
  enterFrame: number;
}> = ({ filename, headers, rows, width, enterFrame }) => {
  const frame = useCurrentFrame();
  const enter = spring({
    frame: frame - enterFrame,
    fps: FPS,
    config: { damping: 22, stiffness: 110, mass: 0.8 },
  });

  const cols = `52px repeat(${headers.length}, 1fr)`;

  return (
    <div
      style={{
        width,
        background: COLORS.white,
        borderRadius: 12,
        border: `1px solid ${EXCEL.gridlineStrong}`,
        boxShadow:
          '0 16px 36px rgba(0,0,0,0.09), 0 3px 8px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        opacity: enter,
        transform: `translateY(${(1 - enter) * 16}px)`,
        fontFamily: FONT.sans,
      }}
    >
      {/* Title bar */}
      <div
        style={{
          background: EXCEL.green,
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          color: COLORS.white,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
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
          {filename}
        </span>
      </div>

      {/* Column-letter strip */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: cols,
          background: EXCEL.greenRibbon,
          borderBottom: `1px solid ${EXCEL.greenRibbonBorder}`,
          fontSize: 15,
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
        {headers.map((_, i) => (
          <div
            key={i}
            style={{
              padding: '6px 0',
              textAlign: 'center',
              borderRight:
                i < headers.length - 1
                  ? `1px solid ${EXCEL.greenRibbonBorder}`
                  : 'none',
            }}
          >
            {String.fromCharCode(65 + i)}
          </div>
        ))}
      </div>

      {/* Header row */}
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
            padding: '11px 0',
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 600,
            color: EXCEL.rowHeaderText,
            background: EXCEL.greenRibbon,
            borderRight: `1px solid ${EXCEL.greenRibbonBorder}`,
          }}
        >
          1
        </div>
        {headers.map((h, i) => (
          <div
            key={i}
            style={{
              padding: '11px 16px',
              fontSize: 19,
              fontWeight: 700,
              color: COLORS.text,
              borderRight:
                i < headers.length - 1 ? `1px solid ${EXCEL.gridline}` : 'none',
            }}
          >
            {h}
          </div>
        ))}
      </div>

      {/* Data rows */}
      {rows.map((row, ri) => (
        <div
          key={ri}
          style={{
            display: 'grid',
            gridTemplateColumns: cols,
            borderBottom:
              ri < rows.length - 1 ? `1px solid ${EXCEL.gridline}` : 'none',
          }}
        >
          <div
            style={{
              padding: '11px 0',
              textAlign: 'center',
              fontSize: 15,
              fontWeight: 600,
              color: EXCEL.rowHeaderText,
              background: EXCEL.greenRibbon,
              borderRight: `1px solid ${EXCEL.greenRibbonBorder}`,
            }}
          >
            {ri + 2}
          </div>
          {row.map((cell, ci) => {
            const cellObj: EditableCell =
              typeof cell === 'string' ? { text: cell } : cell;

            let visible = cellObj.text;
            let typingActive = false;
            let highlighted = false;

            if (cellObj.typedAt !== undefined) {
              const start = cellObj.typedAt;
              const dur = cellObj.typingDuration ?? 20;
              const before = cellObj.before ?? '';
              const eraseDur = before ? Math.round(dur * 0.4) : 0;
              const typeDur = dur - eraseDur;

              if (frame < start) {
                visible = before;
              } else if (frame < start + eraseDur) {
                const t = (frame - start) / eraseDur;
                const chars = Math.ceil(before.length * (1 - t));
                visible = before.slice(0, chars);
                typingActive = true;
                highlighted = true;
              } else if (frame < start + dur) {
                const t = (frame - start - eraseDur) / typeDur;
                const chars = Math.floor(t * cellObj.text.length);
                visible = cellObj.text.slice(0, chars);
                typingActive = true;
                highlighted = true;
              } else if (frame < start + dur + 10) {
                highlighted = true;
              }
            }

            return (
              <div
                key={ci}
                style={{
                  padding: '11px 16px',
                  fontSize: 19,
                  color: COLORS.text,
                  borderRight:
                    ci < row.length - 1 ? `1px solid ${EXCEL.gridline}` : 'none',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  position: 'relative',
                  outline: highlighted ? `3px solid ${COLORS.accentBlue}` : 'none',
                  outlineOffset: -3,
                  background: highlighted
                    ? 'rgba(61, 106, 150, 0.08)'
                    : 'transparent',
                }}
              >
                {visible}
                {typingActive && (
                  <span
                    style={{
                      display: 'inline-block',
                      width: 2,
                      height: 19,
                      background: COLORS.text,
                      marginLeft: 2,
                      verticalAlign: 'middle',
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

// ─── Foundry panel ──────────────────────────────────────────────

const FormField: React.FC<{
  label: string;
  value: string;
  fillAt: number;
  fillDuration?: number;
  accent?: boolean;
}> = ({ label, value, fillAt, fillDuration = 18, accent = false }) => {
  const frame = useCurrentFrame();
  const raw = Math.max(0, Math.min(1, (frame - fillAt) / fillDuration));
  const chars = frame < fillAt ? 0 : Math.floor(raw * value.length);
  const visible = value.slice(0, chars);
  const active = frame >= fillAt && frame < fillAt + fillDuration;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <label
        style={{
          fontSize: 16,
          color: COLORS.muted,
          textTransform: 'uppercase',
          letterSpacing: 1,
          fontWeight: 600,
        }}
      >
        {label}
      </label>
      <div
        style={{
          padding: '18px 22px',
          background: chars > 0 ? '#F8F9FC' : COLORS.white,
          border: `2px solid ${active ? COLORS.accentBorder : '#E5E7EB'}`,
          borderRadius: 12,
          fontSize: 24,
          fontWeight: accent ? 700 : 500,
          color: accent ? COLORS.accent : COLORS.text,
          minHeight: 32,
          boxShadow: active ? `0 0 0 5px ${COLORS.accentMuted}` : 'none',
        }}
      >
        {visible}
        {active && (
          <span
            style={{
              display: 'inline-block',
              width: 2,
              height: 24,
              background: COLORS.text,
              marginLeft: 2,
              verticalAlign: 'middle',
            }}
          />
        )}
      </div>
    </div>
  );
};

const FoundryPanel: React.FC<{
  enterFrame: number;
  width: number;
  title: string;
  fieldLabels: [string, string, string];
  fieldValues: [string, string, string];
  submitLabel: string;
  submitAt: number;
}> = ({
  enterFrame,
  width,
  title,
  fieldLabels,
  fieldValues,
  submitLabel,
  submitAt,
}) => {
  const frame = useCurrentFrame();
  const enter = spring({
    frame: frame - enterFrame,
    fps: FPS,
    config: { damping: 24, stiffness: 100, mass: 0.9 },
  });
  const pressed = frame >= submitAt && frame < submitAt + 8;

  return (
    <div
      style={{
        width,
        background: COLORS.white,
        borderRadius: 20,
        boxShadow: '0 32px 64px rgba(0,0,0,0.10), 0 6px 16px rgba(0,0,0,0.05)',
        border: `1px solid ${COLORS.accentBorder}`,
        overflow: 'hidden',
        opacity: enter,
        transform: `translateY(${(1 - enter) * 28}px)`,
        fontFamily: FONT.sans,
      }}
    >
      {/* Header */}
      <div
        style={{
          background: GRADIENTS.ctaBg,
          padding: '22px 30px',
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          color: COLORS.white,
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: 2,
            padding: '5px 12px',
            background: 'rgba(255,255,255,0.16)',
            borderRadius: 6,
          }}
        >
          FOUNDRY
        </span>
        <div style={{ fontSize: 26, fontWeight: 600 }}>{title}</div>
      </div>

      <div
        style={{
          padding: '28px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        <FormField label={fieldLabels[0]} value={fieldValues[0]} fillAt={enterFrame + 12} />
        <FormField label={fieldLabels[1]} value={fieldValues[1]} fillAt={enterFrame + 32} />
        <FormField
          label={fieldLabels[2]}
          value={fieldValues[2]}
          fillAt={enterFrame + 52}
          fillDuration={12}
          accent
        />

        <div
          style={{
            marginTop: 12,
            padding: '22px 28px',
            background: GRADIENTS.ctaBg,
            borderRadius: 14,
            color: COLORS.white,
            fontSize: 22,
            fontWeight: 600,
            textAlign: 'center',
            letterSpacing: 0.5,
            transform: `scale(${pressed ? 0.96 : 1})`,
            boxShadow: pressed
              ? '0 3px 8px rgba(0,0,0,0.15)'
              : '0 14px 30px rgba(184, 99, 46, 0.22)',
          }}
        >
          {submitLabel}
        </div>
      </div>
    </div>
  );
};

// ─── Sync checklist ─────────────────────────────────────────────

const SyncChecklist: React.FC<{
  startFrame: number;
  items: string[];
  width: number;
}> = ({ startFrame, items, width }) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        width,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        marginTop: 26,
        padding: '22px 26px',
        background: 'rgba(184, 99, 46, 0.04)',
        border: `1px dashed ${COLORS.accentBorder}`,
        borderRadius: 16,
      }}
    >
      {items.map((item, i) => {
        const p = spring({
          frame: frame - (startFrame + i * 10),
          fps: FPS,
          config: { damping: 22, stiffness: 140 },
        });
        return (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              opacity: p,
              transform: `translateX(${(1 - p) * -20}px)`,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: COLORS.success,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: COLORS.white,
                fontSize: 17,
                fontWeight: 900,
                flexShrink: 0,
              }}
            >
              ✓
            </div>
            <span style={{ fontSize: 22, color: COLORS.text, fontWeight: 500 }}>
              {item}
            </span>
          </div>
        );
      })}
    </div>
  );
};

// ─── Column label + meta badge ──────────────────────────────────

const ColumnLabel: React.FC<{
  label: string;
  variant: 'manual' | 'foundry';
}> = ({ label, variant }) => (
  <div
    style={{
      fontSize: 18,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 2,
      color: variant === 'manual' ? '#B91C1C' : COLORS.accent,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
    }}
  >
    <div
      style={{
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: variant === 'manual' ? '#DC2626' : COLORS.accent,
      }}
    />
    {label}
  </div>
);

const MetaBadge: React.FC<{
  icon: string;
  text: string;
  variant: 'warn' | 'good';
  enterFrame: number;
}> = ({ icon, text, variant, enterFrame }) => {
  const frame = useCurrentFrame();
  const p = spring({
    frame: frame - enterFrame,
    fps: FPS,
    config: { damping: 22, stiffness: 120 },
  });
  const isWarn = variant === 'warn';
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        padding: '12px 20px',
        background: isWarn ? 'rgba(220, 38, 38, 0.06)' : COLORS.accentMuted,
        border: `1px solid ${
          isWarn ? 'rgba(220, 38, 38, 0.2)' : COLORS.accentBorder
        }`,
        borderRadius: 28,
        fontSize: 19,
        fontWeight: 600,
        color: isWarn ? '#B91C1C' : COLORS.accent,
        opacity: p,
        transform: `translateY(${(1 - p) * 10}px)`,
      }}
    >
      <span>{icon}</span>
      {text}
    </div>
  );
};

// ─── Main composition ──────────────────────────────────────────

export const SystemsEngineeringVideoMobile: React.FC = () => {
  const frame = useCurrentFrame();

  const phase1Opacity = interpolate(
    frame,
    [0, 18, 175, 195],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
  const phase2Opacity = interpolate(
    frame,
    [175, 195, 370],
    [0, 1, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Mobile cursor path. Sheets width=960, left=60, centered.
  // Each sheet ≈ 236 tall (title 44 + strip 24 + header 38 + 3×42 rows + borders).
  // Row 4 center relative to sheet top ≈ 44+24+38+42+42+21 = 211.
  //   sheet 1 y=240 → row 4 center = 451
  //   sheet 2 y=516 → row 4 center = 727
  //   sheet 3 y=792 → row 4 center = 1003
  // Col centers (52px row-number gutter + 3×303):
  //   A: 60 + 52 + 151 = 263
  //   B: 566
  //   C: 869
  const path: { at: number; x: number; y: number }[] = [
    { at: 34, x: 140, y: 340 },
    { at: 46, x: 263, y: 451 },
    { at: 66, x: 566, y: 451 },
    { at: 86, x: 869, y: 451 },
    { at: 102, x: 263, y: 727 },
    { at: 122, x: 566, y: 727 },
    { at: 140, x: 869, y: 727 },
    { at: 160, x: 566, y: 1003 },
    { at: 178, x: 566, y: 1003 },
  ];

  let cx = path[0].x;
  let cy = path[0].y;
  if (frame >= path[0].at) {
    for (let i = 0; i < path.length - 1; i++) {
      const a = path[i];
      const b = path[i + 1];
      if (frame >= a.at && frame <= b.at) {
        const t = (frame - a.at) / (b.at - a.at);
        const ease = t * t * (3 - 2 * t);
        cx = a.x + (b.x - a.x) * ease;
        cy = a.y + (b.y - a.y) * ease;
        break;
      } else if (frame > b.at && i === path.length - 2) {
        cx = b.x;
        cy = b.y;
      }
    }
  }
  const cursorVisible = frame >= 30 && frame < 180;

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily: FONT.sans }}>
      {/* Persistent top title */}
      <AbsoluteFill
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: 80,
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
                textAlign: 'center',
                padding: '0 40px',
              }}
            >
              La misma venta. Dos realidades.
            </div>
          </FadeIn>
        </Sequence>
      </AbsoluteFill>

      {/* Sub-label: Sin Foundry (phase 1) */}
      <AbsoluteFill
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: 150,
          opacity: phase1Opacity,
        }}
      >
        <ColumnLabel label="Sin Foundry" variant="manual" />
      </AbsoluteFill>

      {/* Sub-label: Con Foundry (phase 2) */}
      <AbsoluteFill
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: 150,
          opacity: phase2Opacity,
        }}
      >
        <ColumnLabel label="Con Foundry" variant="foundry" />
      </AbsoluteFill>

      {/* Phase 1 — Sin Foundry */}
      <AbsoluteFill style={{ opacity: phase1Opacity }}>
        <div
          style={{
            position: 'absolute',
            left: 60,
            top: 240,
            width: 960,
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
          }}
        >
          <ExcelSheet
            filename="clientes.xlsx"
            headers={['Cliente', 'Teléfono', 'Email']}
            width={960}
            enterFrame={18}
            rows={[
              ['Globex', '+54 11 4123', 'ventas@globex.com'],
              ['Initech', '+54 11 5892', 'contacto@initech.com'],
              [
                { text: 'Acme SA', typedAt: 46, typingDuration: 16 },
                { text: '+54 11 2891', typedAt: 64, typingDuration: 18 },
                { text: 'acme@acme.com', typedAt: 84, typingDuration: 20 },
              ],
            ]}
          />

          <ExcelSheet
            filename="ventas.xlsx"
            headers={['Factura', 'Cliente', 'Total']}
            width={960}
            enterFrame={20}
            rows={[
              ['F-2043', 'Globex', '$8.300'],
              ['F-2044', 'Initech', '$24.100'],
              [
                { text: 'F-2045', typedAt: 102, typingDuration: 14 },
                { text: 'Acme SA', typedAt: 120, typingDuration: 14 },
                { text: '$12.500', typedAt: 138, typingDuration: 14 },
              ],
            ]}
          />

          <ExcelSheet
            filename="stock.xlsx"
            headers={['Producto', 'Disponible', 'Mínimo']}
            width={960}
            enterFrame={22}
            rows={[
              ['Widget-B', '27', '10'],
              ['Widget-C', '55', '20'],
              [
                'Widget-A',
                { text: '38', before: '42', typedAt: 158, typingDuration: 16 },
                '15',
              ],
            ]}
          />
        </div>

        <div
          style={{
            position: 'absolute',
            left: 60,
            top: 1100,
            display: 'flex',
            gap: 14,
            flexWrap: 'wrap',
          }}
        >
          <MetaBadge icon="⏱" text="≈ 3 minutos" variant="warn" enterFrame={150} />
          <MetaBadge icon="⚠" text="fácil errar" variant="warn" enterFrame={158} />
        </div>

        <Cursor x={cx} y={cy} visible={cursorVisible} />
      </AbsoluteFill>

      {/* Phase 2 — Con Foundry */}
      <AbsoluteFill style={{ opacity: phase2Opacity }}>
        <div
          style={{
            position: 'absolute',
            left: 60,
            top: 240,
            width: 960,
          }}
        >
          <FoundryPanel
            enterFrame={180}
            width={960}
            title="Nueva venta"
            fieldLabels={['Cliente', 'Producto', 'Total']}
            fieldValues={['Acme SA', 'Widget-A × 4', '$12.500']}
            submitLabel="Confirmar venta"
            submitAt={252}
          />

          <SyncChecklist
            startFrame={265}
            width={960}
            items={[
              'Cliente sincronizado',
              'Venta registrada',
              'Stock ajustado (−4 u.)',
              'Factura emitida',
            ]}
          />

          <div style={{ marginTop: 22, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <MetaBadge icon="⚡" text="≈ 2 segundos" variant="good" enterFrame={305} />
            <MetaBadge
              icon="✓"
              text="1 acción · sin errores"
              variant="good"
              enterFrame={313}
            />
          </div>
        </div>
      </AbsoluteFill>

      {/* Tagline */}
      <AbsoluteFill
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: 80,
        }}
      >
        <Sequence from={320} layout="none">
          <FadeIn enterFrame={0}>
            <div
              style={{
                padding: '22px 32px',
                borderRadius: 18,
                background: 'rgba(184, 99, 46, 0.06)',
                border: '1px solid rgba(184, 99, 46, 0.18)',
                margin: '0 40px',
              }}
            >
              <GradientText fontSize={32} fontWeight={600}>
                Tu empresa opera sin depender de vos.
              </GradientText>
            </div>
          </FadeIn>
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
