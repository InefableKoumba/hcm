import { Target, Rocket, Handshake } from 'lucide-react'
import Image from 'next/image'

export default function Mission() {
  return (
    <section id="apropos" className="section bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="section-title animate-fade-in">Notre Mission</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Image Section */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1582213782179-e0d9f806862e?q=80&w=2070&auto=format&fit=crop"
              alt="Mission d'inclusion et de mobilité"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="order-1 lg:order-2">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Promouvoir, soutenir et développer des initiatives pour améliorer la mobilité des
              personnes en situation de handicap. Nous croyons en une société inclusive où chaque
              individu peut accéder aux mêmes opportunités et vivre avec dignité.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Notre engagement se traduit par des actions concrètes sur le terrain, des partenariats
              stratégiques et une vision à long terme pour transformer les défis en opportunités
              d&apos;inclusion.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary-light rounded-lg">
                <Target size={24} className="text-primary" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Inclusion Totale</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Contribuer à la pleine inclusion des personnes en situation de handicap dans tous les
              aspects de la vie sociale, économique et culturelle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-secondary/30 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-secondary-light rounded-lg">
                <Rocket size={24} className="text-secondary" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Mobilité Améliorée</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Développer des solutions innovantes pour faciliter le déplacement et l&apos;accès aux
              services essentiels pour les personnes à mobilité réduite.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary-light rounded-lg">
                <Handshake size={24} className="text-primary" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Partenariats Solides</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Travailler en collaboration avec les institutions, entreprises et organisations pour
              créer un écosystème inclusif et accessible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
