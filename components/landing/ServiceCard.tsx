interface ServiceCardProps {
  title: string
  description: string
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div
      className="group relative block p-8 rounded-xl backdrop-blur-[10px] border border-white/80 no-underline transition-[transform,background-color,box-shadow,border-color] duration-300 ease-out overflow-hidden bg-white/60 hover:-translate-y-[5px] hover:bg-white/90 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:border-[#ddd]"
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
        style={{ backgroundImage: 'var(--gradient-accent)' }}
      />
      <h4 className="text-xl font-semibold mb-2 text-ink">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed mt-4">{description}</p>
    </div>
  )
}
