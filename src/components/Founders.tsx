'use client'

import Image from 'next/image'
import { Users, X } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Founder {
  id?: string
  name: string
  role: string
  image?:
    | {
        url?: string
        alt?: string
      }
    | string
    | null
  bio?: string
}

const defaultFounders: Founder[] = [
  {
    name: 'OMINGA Maixent',
    role: 'Président',
    image: '/assets/founders/ominga.JPG',
  },
  {
    name: 'Anga Jean-Dominique',
    role: 'Vice-président',
    image: '/assets/founders/anga.JPG',
  },
  {
    name: "L'Hoir Cattaneo Timothée",
    role: 'Secrétaire général',
    image: '/assets/founders/cattaneo.JPG',
  },
  {
    name: 'OYABIKI Goldrich',
    role: 'Secrétaire, responsable communication & marketing',
    image: '/assets/founders/goldrich.JPG',
  },
]

export default function Founders() {
  const [founders, setFounders] = useState<Founder[]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    async function fetchFounders() {
      try {
        const response = await fetch('/api/founders?limit=100&sort=order&depth=2')
        if (response.ok) {
          const data = await response.json()
          setFounders(data.docs || [])
        }
      } catch (error) {
        console.error('Error fetching founders:', error)
      }
    }
    fetchFounders()
  }, [])

  const displayFounders = founders.length > 0 ? founders : defaultFounders

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }
  return (
    <section id="fondateurs" className="section bg-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-6">
            <Users size={32} className="text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Fondateurs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            L&apos;équipe dirigeante qui guide la fondation vers ses objectifs d&apos;inclusion et
            de mobilité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayFounders.map((founder, index) => {
            const imageUrl =
              typeof founder.image === 'string'
                ? founder.image
                : founder.image && typeof founder.image === 'object' && 'url' in founder.image
                  ? founder.image.url || ''
                  : ''

            return (
              <div
                key={founder.id || index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
              >
                {imageUrl && (
                  <div
                    className="relative h-64 w-full cursor-pointer group"
                    onClick={() => handleImageClick(imageUrl)}
                  >
                    <Image
                      src={imageUrl}
                      alt={founder.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium">
                        Cliquer pour agrandir
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-sm text-primary font-medium">{founder.role}</p>
                  {founder.bio && (
                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">{founder.bio}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Fermer"
          >
            <X size={32} />
          </button>
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Image agrandie"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  )
}
