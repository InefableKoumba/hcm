'use client'

import { ShipWheel, GraduationCap, Building2, HeartHandshake, Users, Award } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Action {
  id?: string
  title: string
  description: string
  icon: string
  color: string
  stats: string
  statsLabel: string
  image?:
    | {
        url?: string
        alt?: string
      }
    | string
    | null
}

export default function Actions() {
  const [actions, setActions] = useState<Action[]>([])

  useEffect(() => {
    async function fetchActions() {
      try {
        const response = await fetch('/api/actions?limit=100&sort=order&depth=2')
        if (response.ok) {
          const data = await response.json()
          setActions(data.docs || [])
        }
      } catch (error) {
        console.error('Error fetching actions:', error)
      }
    }
    fetchActions()
  }, [])

  const defaultActions: Action[] = [
    {
      title: "Distribution d'équipements de mobilité",
      description:
        'Nous distribuons gratuitement des fauteuils roulants, béquilles, déambulateurs et autres équipements de mobilité aux personnes en situation de handicap qui en ont besoin. Plus de 500 équipements distribués depuis notre création.',
      icon: 'ShipWheel',
      color: '#0052a3',
      stats: '500+',
      statsLabel: 'Équipements distribués',
      image: '/assets/promotion/IMG_6679-min.JPG',
    },
    {
      title: 'Programmes de formation',
      description:
        "Organisation de formations professionnelles et d'ateliers de développement de compétences pour favoriser l'insertion professionnelle des personnes en situation de handicap dans divers secteurs d'activité.",
      icon: 'GraduationCap',
      color: '#00a86b',
      stats: '200+',
      statsLabel: 'Personnes formées',
      image: '/assets/promotion/IMG_6689-min.JPG',
    },
    {
      title: "Aménagement d'infrastructures",
      description:
        "Travaux d'aménagement et d'accessibilité dans les bâtiments publics, écoles et espaces communautaires pour garantir l'accès à tous, incluant l'installation de rampes, ascenseurs et signalétique adaptée.",
      icon: 'Building2',
      color: '#0052a3',
      stats: '50+',
      statsLabel: 'Sites aménagés',
      image: '/assets/promotion/IMG_6693-min.JPG',
    },
    {
      title: 'Sensibilisation et plaidoyer',
      description:
        "Campagnes de sensibilisation dans les communautés, écoles et entreprises pour changer les mentalités, promouvoir l'inclusion et faire respecter les droits des personnes en situation de handicap.",
      icon: 'HeartHandshake',
      color: '#00a86b',
      stats: '100+',
      statsLabel: 'Campagnes réalisées',
    },
    {
      title: 'Support et accompagnement',
      description:
        'Accompagnement personnalisé des personnes en situation de handicap et de leurs familles dans leurs démarches administratives, médicales et sociales pour faciliter leur intégration.',
      icon: 'Users',
      color: '#0052a3',
      stats: '1000+',
      statsLabel: 'Personnes accompagnées',
    },
    {
      title: 'Partenariats stratégiques',
      description:
        "Développement de partenariats avec des institutions, entreprises et organisations pour créer un écosystème inclusif et pérenne en faveur de la mobilité et de l'inclusion.",
      icon: 'Award',
      color: '#00a86b',
      stats: '30+',
      statsLabel: 'Partenaires actifs',
    },
  ]

  const displayActions = actions.length > 0 ? actions : defaultActions

  return (
    <section id="actions" className="section bg-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Cover Image */}
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-16 shadow-lg">
          <Image
            src="/assets/promotion/IMG_6764-min.JPG"
            alt="Actions de la fondation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-4xl font-bold mb-2">Nos Actions</h2>
              <p className="text-lg max-w-2xl">
                Découvrez les actions concrètes que nous menons pour améliorer la mobilité et
                l&apos;inclusion des personnes en situation de handicap au Congo
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayActions.map((action, index) => {
            const iconName = action.icon || 'ShipWheel'
            const iconMap: Record<string, any> = {
              ShipWheel,
              GraduationCap,
              Building2,
              HeartHandshake,
              Users,
              Award,
            }
            const IconComponent = iconMap[iconName] || ShipWheel

            const imageUrl =
              typeof action.image === 'string'
                ? action.image
                : action.image && typeof action.image === 'object' && 'url' in action.image
                  ? action.image.url || ''
                  : null

            return (
              <div
                key={action.id || index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {imageUrl && (
                  <div className="relative h-48 w-full">
                    <Image src={imageUrl} alt={action.title} fill className="object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="p-3 rounded-lg shrink-0"
                      style={{ backgroundColor: `${action.color}15` }}
                    >
                      <IconComponent size={28} color={action.color} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{action.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{action.description}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-2xl font-bold" style={{ color: action.color }}>
                      {action.stats}
                    </div>
                    <div className="text-sm text-gray-600">{action.statsLabel}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
