export function GradientText({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: 'var(--gradient-brand)',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </span>
  )
}
