import React from 'react';
import { AbsoluteFill, Sequence, spring, useCurrentFrame } from 'remotion';
import { COLORS, EXCEL, FONT, FPS, GRADIENTS } from '../theme';
import { DotGrid } from '../components/DotGrid';
import { FadeIn } from '../components/FadeIn';
import { GradientText } from '../components/GradientText';

/* ── "La misma venta. Dos realidades." ──
 *
 * Left column (Sin Foundry): 3 Excel files — clientes, ventas, stock.
 * A floating cursor jumps between them manually typing each update.
 *
 * Right column (Con Foundry): a single Foundry panel. A form fills in,
 * the user clicks "Confirmar venta", and four sync items cascade in.
 */

export const SYSTEMS_DURATION = 370;

// ─── Types ──────────────────────────────────────────────────────

type EditableCell = {
  text: string;
  before?: string;
  typedAt?: number;
  typingDuration?: number;
};
type Cell = string | EditableCell;

// ─── Cursor SVG ─────────────────────────────────────────────────

const Cursor: React.FC<{ x: number; y: number; visible: boolean }> = ({
  x,
  y,
  visible,
}) => (
  <svg
    width={22}
    height={26}
    viewBox="0 0 22 26"
    style={{
      position: 'absolute',
      left: x,
      top: y,
      opacity: visible ? 1 : 0,
      filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.3))',
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

  const cols = `32px repeat(${headers.length}, 1fr)`;

  return (
    <div
      style={{
        width,
        background: COLORS.white,
        borderRadius: 8,
        border: `1px solid ${EXCEL.gridlineStrong}`,
        boxShadow:
          '0 10px 26px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)',
        overflow: 'hidden',
        opacity: enter,
        transform: `translateY(${(1 - enter) * 12}px)`,
        fontFamily: FONT.sans,
      }}
    >
      {/* Title bar */}
      <div
        style={{
          background: EXCEL.green,
          padding: '8px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          color: COLORS.white,
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: 3,
            background: COLORS.white,
            color: EXCEL.green,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 14,
            fontWeight: 900,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            lineHeight: 1,
          }}
        >
          X
        </div>
        <span style={{ fontSize: 13, fontWeight: 600 }}>{filename}</span>
      </div>

      {/* Column-letter strip */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: cols,
          background: EXCEL.greenRibbon,
          borderBottom: `1px solid ${EXCEL.greenRibbonBorder}`,
          fontSize: 10,
          fontWeight: 600,
          color: EXCEL.rowHeaderText,
        }}
      >
        <div
          style={{
            padding: '3px 0',
            borderRight: `1px solid ${EXCEL.greenRibbonBorder}`,
          }}
        />
        {headers.map((_, i) => (
          <div
            key={i}
            style={{
              padding: '3px 0',
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
            padding: '7px 0',
            textAlign: 'center',
            fontSize: 10,
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
              padding: '7px 12px',
              fontSize: 12,
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
              padding: '7px 0',
              textAlign: 'center',
              fontSize: 10,
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
                  padding: '7px 12px',
                  fontSize: 12,
                  color: COLORS.text,
                  borderRight:
                    ci < row.length - 1 ? `1px solid ${EXCEL.gridline}` : 'none',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  position: 'relative',
                  outline: highlighted ? `2px solid ${COLORS.accentBlue}` : 'none',
                  outlineOffset: -2,
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
                      width: 1,
                      height: 12,
                      background: COLORS.text,
                      marginLeft: 1,
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label
        style={{
          fontSize: 11,
          color: COLORS.muted,
          textTransform: 'uppercase',
          letterSpacing: 0.8,
          fontWeight: 600,
        }}
      >
        {label}
      </label>
      <div
        style={{
          padding: '12px 14px',
          background: chars > 0 ? '#F8F9FC' : COLORS.white,
          border: `1px solid ${active ? COLORS.accentBorder : '#E5E7EB'}`,
          borderRadius: 8,
          fontSize: 15,
          fontWeight: accent ? 700 : 500,
          color: accent ? COLORS.accent : COLORS.text,
          minHeight: 22,
          boxShadow: active ? `0 0 0 3px ${COLORS.accentMuted}` : 'none',
        }}
      >
        {visible}
        {active && (
          <span
            style={{
              display: 'inline-block',
              width: 1,
              height: 15,
              background: COLORS.text,
              marginLeft: 1,
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
        borderRadius: 14,
        boxShadow: '0 22px 48px rgba(0,0,0,0.09), 0 4px 12px rgba(0,0,0,0.04)',
        border: `1px solid ${COLORS.accentBorder}`,
        overflow: 'hidden',
        opacity: enter,
        transform: `translateY(${(1 - enter) * 20}px)`,
        fontFamily: FONT.sans,
      }}
    >
      {/* Header */}
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
        <span
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: 2,
            padding: '3px 9px',
            background: 'rgba(255,255,255,0.16)',
            borderRadius: 5,
          }}
        >
          FOUNDRY
        </span>
        <div style={{ fontSize: 17, fontWeight: 600 }}>{title}</div>
      </div>

      {/* Form */}
      <div
        style={{
          padding: '22px 26px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
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
            marginTop: 8,
            padding: '14px 22px',
            background: GRADIENTS.ctaBg,
            borderRadius: 10,
            color: COLORS.white,
            fontSize: 14,
            fontWeight: 600,
            textAlign: 'center',
            letterSpacing: 0.3,
            transform: `scale(${pressed ? 0.96 : 1})`,
            boxShadow: pressed
              ? '0 2px 6px rgba(0,0,0,0.15)'
              : '0 10px 22px rgba(184, 99, 46, 0.22)',
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
        gap: 10,
        marginTop: 20,
        padding: '16px 18px',
        background: 'rgba(184, 99, 46, 0.04)',
        border: `1px dashed ${COLORS.accentBorder}`,
        borderRadius: 12,
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
              gap: 12,
              opacity: p,
              transform: `translateX(${(1 - p) * -14}px)`,
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: COLORS.success,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: COLORS.white,
                fontSize: 11,
                fontWeight: 900,
                flexShrink: 0,
              }}
            >
              ✓
            </div>
            <span style={{ fontSize: 14, color: COLORS.text, fontWeight: 500 }}>
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
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 2,
      color: variant === 'manual' ? '#B91C1C' : COLORS.accent,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    }}
  >
    <div
      style={{
        width: 8,
        height: 8,
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
        gap: 8,
        padding: '8px 14px',
        background: isWarn ? 'rgba(220, 38, 38, 0.06)' : COLORS.accentMuted,
        border: `1px solid ${
          isWarn ? 'rgba(220, 38, 38, 0.2)' : COLORS.accentBorder
        }`,
        borderRadius: 20,
        fontSize: 13,
        fontWeight: 600,
        color: isWarn ? '#B91C1C' : COLORS.accent,
        opacity: p,
        transform: `translateY(${(1 - p) * 8}px)`,
      }}
    >
      <span>{icon}</span>
      {text}
    </div>
  );
};

// ─── Main composition ──────────────────────────────────────────

export const SystemsEngineeringVideo: React.FC = () => {
  const frame = useCurrentFrame();

  // Cursor keyframe path (canvas-absolute pixels).
  // Sheets start around y=184; each data row ≈ 26px tall.
  const path: { at: number; x: number; y: number }[] = [
    { at: 34, x: 180, y: 250 },
    { at: 46, x: 262, y: 325 }, // clientes: cliente cell
    { at: 66, x: 528, y: 325 }, // clientes: teléfono
    { at: 86, x: 790, y: 325 }, // clientes: email
    { at: 102, x: 262, y: 498 }, // ventas: factura
    { at: 122, x: 528, y: 498 }, // ventas: cliente
    { at: 140, x: 790, y: 498 }, // ventas: total
    { at: 165, x: 528, y: 670 }, // stock: disponible
    { at: 250, x: 528, y: 670 }, // hold
    { at: 290, x: 620, y: 670 }, // drift
  ];

  let cx = path[0].x;
  let cy = path[0].y;
  if (frame < path[0].at) {
    cx = path[0].x;
    cy = path[0].y;
  } else {
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
  const cursorVisible = frame >= 30 && frame < 295;

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily: FONT.sans }}>
      <DotGrid opacity={0.08} />

      {/* Top label */}
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
              }}
            >
              La misma venta. Dos realidades.
            </div>
          </FadeIn>
        </Sequence>
      </AbsoluteFill>

      {/* Vertical divider */}
      <div
        style={{
          position: 'absolute',
          left: 960,
          top: 140,
          width: 1,
          height: 780,
          background: `linear-gradient(180deg, transparent, ${EXCEL.gridlineStrong} 15%, ${EXCEL.gridlineStrong} 85%, transparent)`,
        }}
      />

      {/* LEFT column — Sin Foundry */}
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 150,
          width: 820,
        }}
      >
        <Sequence from={10} layout="none">
          <FadeIn enterFrame={0}>
            <ColumnLabel label="Sin Foundry" variant="manual" />
          </FadeIn>
        </Sequence>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            marginTop: 18,
          }}
        >
          <ExcelSheet
            filename="clientes.xlsx"
            headers={['Cliente', 'Teléfono', 'Email']}
            width={820}
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
            width={820}
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
            width={820}
            enterFrame={22}
            rows={[
              ['Widget-B', '27', '10'],
              ['Widget-C', '55', '20'],
              [
                'Widget-A',
                {
                  text: '38',
                  before: '42',
                  typedAt: 165,
                  typingDuration: 20,
                },
                '15',
              ],
            ]}
          />
        </div>

        {/* Warning badges */}
        <div style={{ marginTop: 22, display: 'flex', gap: 10 }}>
          <MetaBadge icon="⏱" text="≈ 3 minutos" variant="warn" enterFrame={280} />
          <MetaBadge
            icon="⚠"
            text="3 archivos · fácil errar"
            variant="warn"
            enterFrame={288}
          />
        </div>
      </div>

      {/* Cursor over the left column */}
      <Cursor x={cx} y={cy} visible={cursorVisible} />

      {/* RIGHT column — Con Foundry */}
      <div
        style={{
          position: 'absolute',
          left: 1000,
          top: 150,
          width: 820,
        }}
      >
        <Sequence from={10} layout="none">
          <FadeIn enterFrame={0}>
            <ColumnLabel label="Con Foundry" variant="foundry" />
          </FadeIn>
        </Sequence>

        <div style={{ marginTop: 18 }}>
          <FoundryPanel
            enterFrame={25}
            width={820}
            title="Nueva venta"
            fieldLabels={['Cliente', 'Producto', 'Total']}
            fieldValues={['Acme SA', 'Widget-A × 4', '$12.500']}
            submitLabel="Confirmar venta"
            submitAt={98}
          />
        </div>

        <SyncChecklist
          startFrame={115}
          width={820}
          items={[
            'Cliente sincronizado',
            'Venta registrada',
            'Stock ajustado (−4 u.)',
            'Factura emitida',
          ]}
        />

        <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
          <MetaBadge icon="⚡" text="≈ 2 segundos" variant="good" enterFrame={180} />
          <MetaBadge
            icon="✓"
            text="1 acción · sin errores"
            variant="good"
            enterFrame={188}
          />
        </div>
      </div>

      {/* Tagline */}
      <AbsoluteFill
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: 56,
        }}
      >
        <Sequence from={300} layout="none">
          <FadeIn enterFrame={0}>
            <div
              style={{
                padding: '18px 28px',
                borderRadius: 14,
                background: 'rgba(184, 99, 46, 0.06)',
                border: '1px solid rgba(184, 99, 46, 0.18)',
              }}
            >
              <GradientText fontSize={28} fontWeight={600}>
                Tu empresa opera sin depender de vos.
              </GradientText>
            </div>
          </FadeIn>
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
