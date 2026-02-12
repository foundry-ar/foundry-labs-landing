import Image from 'next/image'

const logos = [
  { src: '/rgg.svg', alt: 'RGG', width: 120, height: 40 },
  { src: '/lb-finanzas.png', alt: 'LB Finanzas', width: 120, height: 40 },
  { src: '/paytient.svg', alt: 'Paytient', width: 120, height: 40 },
  { src: '/homevision.svg', alt: 'HomeVision', width: 120, height: 40 },
  { src: '/eve.png', alt: 'Eve', width: 120, height: 40 },
]

export function LogoBar() {
  return (
    <section className="py-16 px-6 bg-surface relative z-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-8">
          Previously at
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
