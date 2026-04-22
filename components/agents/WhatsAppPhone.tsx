'use client'

import { useEffect, useRef } from 'react'

interface Message {
  from: 'customer' | 'agent'
  text: string
}

interface WhatsAppPhoneProps {
  messages: readonly Message[]
  /** How many messages to show (controlled from outside) */
  visibleCount: number
  /** Show typing indicator */
  showTyping?: boolean
}

function TypingIndicator() {
  return (
    <div className="flex justify-end mb-2">
      <div className="bg-[#dcf8c6] rounded-[10px] px-3 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-[6px] h-[6px] rounded-full bg-gray-400"
              style={{
                animation: 'typing-dot 1.2s ease-in-out infinite',
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ChatBubble({ message }: { message: Message }) {
  const isCustomer = message.from === 'customer'

  return (
    <div
      className={`flex mb-2 animate-[fade-in_0.3s_ease-out_both] ${
        isCustomer ? 'justify-start' : 'justify-end'
      }`}
    >
      <div
        className={`max-w-[78%] rounded-[10px] px-3 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.08)] ${
          isCustomer ? 'bg-white' : 'bg-[#dcf8c6]'
        }`}
      >
        <span className="text-[13px] md:text-[14px] text-ink leading-[1.45] block whitespace-pre-line">
          {message.text}
        </span>
        <span className="text-[10px] text-gray-400 block text-right mt-0.5">10:42</span>
      </div>
    </div>
  )
}

export function WhatsAppPhone({ messages, visibleCount, showTyping = false }: WhatsAppPhoneProps) {
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll chat (contained, never bubbles to page)
  useEffect(() => {
    const el = chatContainerRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [visibleCount, showTyping])

  return (
    <div className="w-full max-w-[320px] md:max-w-[340px] mx-auto">
      <div className="relative bg-[#efeae2] rounded-[2rem] border-[6px] border-gray-800 shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">
        {/* Status bar */}
        <div className="bg-[#075e54] px-4 py-2 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-white/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          </div>
          <div>
            <div className="text-white text-sm font-medium">Foundry Agent</div>
            <div className="text-white/60 text-[10px]">online</div>
          </div>
        </div>

        {/* Chat area */}
        <div ref={chatContainerRef} className="h-[380px] md:h-[420px] overflow-y-auto p-3">
          {messages.slice(0, visibleCount).map((msg, i) => (
            <ChatBubble key={i} message={msg} />
          ))}
          {showTyping && <TypingIndicator />}
        </div>

        {/* Input bar */}
        <div className="bg-[#f0f0f0] px-3 py-2 flex items-center gap-2 border-t border-gray-200">
          <div className="flex-1 bg-white rounded-full px-4 py-2 text-[12px] text-gray-400">
            Message
          </div>
          <div className="w-8 h-8 rounded-full bg-[#075e54] flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.239 1.816-13.239 1.817-.011 7.912z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
