import { ServiceCard } from './ServiceCard'

const services = [
  {
    title: 'AI Integration',
    description:
      'Modernize your existing tools and workflows with AI that actually fits. We augment your team — not replace them.',
  },
  {
    title: 'Web & Landing Pages',
    description:
      'High-performance, conversion-focused web experiences. Design, motion, and code — all in-house.',
  },
  {
    title: 'Software Architecture',
    description:
      'Scalable, maintainable systems for companies that need to build right the first time. From MVPs to production infrastructure.',
  },
  {
    title: 'Workflow Automation',
    description:
      'Automate the grunt work. We connect your tools, kill the repetitive tasks, and free your team to do real work.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-surface relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl font-medium tracking-tight">What we build</h2>
          <span className="text-sm uppercase tracking-widest text-gray-400">Systems over services.</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
