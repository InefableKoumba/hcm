import { Target, Heart, Scale, FileText } from 'lucide-react'
import Image from 'next/image'

export default function Preamble() {
  const preambleSections = [
    {
      icon: Target,
      title: 'Notre Objet',
      content: 'Inclusion et mobilité pour tous',
      color: '#0052a3',
    },
    {
      icon: Heart,
      title: 'Notre Mission',
      content: 'Améliorer la mobilité au Congo',
      color: '#00a86b',
    },
    {
      icon: Scale,
      title: 'Nos Engagements',
      content: 'Respect des droits internationaux',
      color: '#0052a3',
    },
    {
      icon: FileText,
      title: 'Notre Cadre',
      content: 'Fondation à but non lucratif',
      color: '#00a86b',
    },
  ]

  return (
    <section className="section bg-white py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <FileText size={18} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Fondation</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">PRÉAMBULE</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
          {/* Left Image */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/promotion/IMG_6689-min.JPG"
                alt="Fondation HandiMobilité Congo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              {preambleSections.map((section, index) => {
                const IconComponent = section.icon
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div
                      className="p-3 rounded-lg mb-3 w-fit"
                      style={{ backgroundColor: `${section.color}15` }}
                    >
                      <IconComponent size={24} color={section.color} strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: section.color }}>
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">{section.content}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section with Image */}
        <div className="mt-12 flex justify-center items-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-hero rounded-full text-white shadow-lg">
            <Heart size={20} fill="currentColor" />
            <span className="font-semibold">Fondation à but non lucratif</span>
          </div>
        </div>
      </div>
    </section>
  )
}
