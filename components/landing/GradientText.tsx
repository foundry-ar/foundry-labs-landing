export function GradientText({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={`animate-shimmer bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: 'var(--gradient-brand)',
        backgroundSize: '200% auto',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </span>
  )
}
