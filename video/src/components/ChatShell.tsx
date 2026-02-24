import React from 'react';
import { spring, useCurrentFrame } from 'remotion';
import { COLORS, FONT, FPS } from '../theme';

const SIDEBAR_W = 260;

const DEFAULT_SIDEBAR_ITEMS: SidebarItem[] = [
  { title: 'Atlas Steel — Line 4500', active: true },
  { title: 'Nordic Metals capacity review' },
  { title: 'FerroWorks 2023 specs' },
  { title: 'Weld procedure standards' },
];

interface SidebarItem {
  title: string;
  active?: boolean;
}

const ChatBubbleIcon: React.FC = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path
      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PencilIcon: React.FC = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path
      d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SendArrowIcon: React.FC = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 19V5m0 0l-7 7m7-7l7 7"
      stroke="#b0b0b0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChatShell: React.FC<{
  children: React.ReactNode;
  enterFrame?: number;
  sidebarItems?: SidebarItem[];
  sidebarLabel?: string;
  inputPlaceholder?: string;
}> = ({
  children,
  enterFrame = 0,
  sidebarItems = DEFAULT_SIDEBAR_ITEMS,
  sidebarLabel = 'Recent',
  inputPlaceholder = 'Ask Foundry...',
}) => {
  const frame = useCurrentFrame();

  const progress = spring({
    frame: frame - enterFrame,
    fps: FPS,
    config: { damping: 28, stiffness: 120, mass: 0.8 },
  });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: FONT.sans,
        opacity: progress,
        transform: `translateY(${(1 - progress) * 24}px)`,
      }}
    >
      <div
        style={{
          width: 1560,
          height: 820,
          display: 'flex',
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow:
            '0 25px 60px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06)',
        }}
      >
        {/* ── Sidebar ── */}
        <div
          style={{
            width: SIDEBAR_W,
            background: '#171717',
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0,
            borderRight: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Traffic lights + new-chat */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '18px 16px 14px',
            }}
          >
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
            </div>
            <div style={{ color: '#ececec', display: 'flex' }}>
              <PencilIcon />
            </div>
          </div>

          {/* Section label */}
          <div
            style={{
              padding: '14px 16px 8px',
              fontSize: 11,
              fontWeight: 600,
              color: '#666',
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            {sidebarLabel}
          </div>

          {/* History items */}
          {sidebarItems.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 14px',
                margin: '1px 8px',
                borderRadius: 8,
                background: item.active ? '#2a2a2a' : 'transparent',
                color: item.active ? '#ececec' : '#888',
                fontSize: 13,
                fontWeight: item.active ? 500 : 400,
              }}
            >
              <ChatBubbleIcon />
              <span
                style={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* ── Main area ── */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            background: '#ffffff',
          }}
        >
          {/* Top bar */}
          <div
            style={{
              height: 52,
              borderBottom: '1px solid #ebebeb',
              display: 'flex',
              alignItems: 'center',
              padding: '0 28px',
              gap: 5,
            }}
          >
            <span style={{ fontSize: 15, fontWeight: 600, color: '#111' }}>
              Foundry
            </span>
            <svg
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              style={{ marginTop: 2 }}
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="#999"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, padding: '28px 72px', overflow: 'hidden' }}>
            {children}
          </div>

          {/* Input bar */}
          <div style={{ padding: '6px 72px 18px' }}>
            <div
              style={{
                background: '#f4f4f4',
                border: '1px solid #e0e0e0',
                borderRadius: 24,
                padding: '14px 16px 14px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: 14, color: '#aaa', fontWeight: 400 }}>
                {inputPlaceholder}
              </span>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  background: '#e5e5e5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <SendArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Message components ── */

export const UserMessage: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
    <div
      style={{
        background: '#f4f4f4',
        borderRadius: 20,
        padding: '12px 18px',
        maxWidth: '80%',
        color: '#111',
        fontSize: 16,
        lineHeight: 1.5,
        fontWeight: 400,
        fontFamily: FONT.sans,
      }}
    >
      {children}
    </div>
  </div>
);

export const SystemMessage: React.FC<{
  children: React.ReactNode;
  label?: string;
}> = ({ children, label }) => (
  <div style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: COLORS.accent,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        marginTop: 2,
      }}
    >
      <span style={{ color: '#fff', fontSize: 12, fontWeight: 700 }}>F</span>
    </div>
    <div style={{ flex: 1 }}>
      {label && (
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: COLORS.accent,
            textTransform: 'uppercase',
            letterSpacing: 1.5,
            marginBottom: 10,
          }}
        >
          {label}
        </div>
      )}
      {children}
    </div>
  </div>
);
