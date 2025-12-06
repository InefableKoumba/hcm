'use client'

import { Bus, BookOpen, CircleUser, Megaphone, Building, Wrench } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const iconMap = {
  Bus,
  BookOpen,
  CircleUser,
  Megaphone,
  Building,
  Wrench,
}

interface Project {
  id?: string
  title: string
  description: string
  icon: string
  status: string
  color: string
  image?:
    | {
        url?: string
        alt?: string
      }
    | string
    | null
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/projects?limit=100&sort=order&depth=2')
        if (response.ok) {
          const data = await response.json()
          setProjects(data.docs || [])
        }
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    }
    fetchProjects()
  }, [])

  // Fallback data if no projects in CMS
  const fallbackProjects: Project[] = [
    {
      title: 'Accessibilité des Transports',
      description:
        "Amélioration de l'accessibilité des transports publics avec installation de rampes et équipements adaptés.",
      icon: 'Bus',
      status: 'En cours',
      color: '#0052a3',
    },
    {
      title: 'Formation Professionnelle',
      description:
        "Programmes de formation et d'insertion professionnelle pour les personnes en situation de handicap.",
      icon: 'BookOpen',
      status: 'Actif',
      color: '#00a86b',
    },
    {
      title: 'Équipements Mobiles',
      description:
        'Distribution de fauteuils roulants, béquilles et autres équipements de mobilité aux personnes dans le besoin.',
      icon: 'CircleUser',
      status: 'Actif',
      color: '#0052a3',
    },
    {
      title: 'Sensibilisation',
      description:
        "Campagnes de sensibilisation pour changer les mentalités et promouvoir l'inclusion dans la société.",
      icon: 'Megaphone',
      status: 'En cours',
      color: '#00a86b',
    },
    {
      title: 'Infrastructure Accessible',
      description:
        "Travaux d'aménagement pour rendre les bâtiments publics et privés accessibles à tous.",
      icon: 'Building',
      status: 'Planifié',
      color: '#0052a3',
    },
    {
      title: 'Support Technique',
      description:
        "Service d'assistance technique et de conseil pour l'aménagement d'espaces accessibles.",
      icon: 'Wrench',
      status: 'Actif',
      color: '#00a86b',
    },
  ]

  const displayProjects = projects.length > 0 ? projects : fallbackProjects

  const getStatusStyles = (status: string) => {
    if (status === 'Actif') {
      return 'bg-secondary-light text-secondary border-secondary/30'
    } else if (status === 'En cours') {
      return 'bg-primary-light text-primary border-primary/30'
    }
    return 'bg-gray-100 text-gray-600 border-gray-200'
  }

  return (
    <section id="projets" className="section bg-white py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Projets</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les projets que nous développons pour améliorer l&apos;accessibilité et
            l&apos;inclusion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => {
            const iconName = project.icon || 'Bus'
            const IconComponent = iconMap[iconName as keyof typeof iconMap] || Bus
            const color = project.color || '#0052a3'
            const status = project.status || 'Planifié'
            const title = project.title
            const description = project.description
            const image =
              project.image && typeof project.image === 'object' && 'url' in project.image
                ? project.image
                : null

            return (
              <div
                key={project.id || index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
              >
                {image && image.url && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={image.url}
                      alt={title || 'Project image'}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="p-3 rounded-lg shrink-0"
                      style={{ backgroundColor: `${color}15` }}
                    >
                      <IconComponent size={28} color={color} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getStatusStyles(status)}`}
                    >
                      {status}
                    </span>
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
