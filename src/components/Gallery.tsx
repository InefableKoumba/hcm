'use client'

import Image from 'next/image'
import { X, Images } from 'lucide-react'
import { useState, useEffect } from 'react'

const galleryImages = [
  '/assets/promotion/IMG_6679-min.JPG',
  '/assets/promotion/IMG_6689-min.JPG',
  '/assets/promotion/IMG_6690-min.JPG',
  '/assets/promotion/IMG_6693-min.JPG',
  '/assets/promotion/IMG_6764-min.JPG',
  '/assets/promotion/IMG_6770-min.JPG',
  '/assets/promotion/IMG_6771-min.JPG',
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return
    const currentIndex = galleryImages.indexOf(selectedImage)
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % galleryImages.length
      setSelectedImage(galleryImages[nextIndex])
    } else {
      const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
      setSelectedImage(galleryImages[prevIndex])
    }
  }

  useEffect(() => {
    if (!selectedImage) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = galleryImages.indexOf(selectedImage)
        const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
        setSelectedImage(galleryImages[prevIndex])
      } else if (e.key === 'ArrowRight') {
        const currentIndex = galleryImages.indexOf(selectedImage)
        const nextIndex = (currentIndex + 1) % galleryImages.length
        setSelectedImage(galleryImages[nextIndex])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  return (
    <section id="galerie" className="section bg-white py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-6">
            <Images size={32} className="text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galerie</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos activités et événements en images
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((imageUrl, index) => {
            // Bento grid pattern: varying sizes for visual interest
            const getGridClasses = (idx: number) => {
              if (idx === 0) {
                // First image: large, spans 2 columns and 2 rows
                return 'md:col-span-2 md:row-span-2'
              } else if (idx === 1) {
                // Second image: spans 2 columns
                return 'md:col-span-2'
              } else if (idx === 2) {
                // Third image: spans 1 column
                return 'md:col-span-1'
              } else if (idx === 3) {
                // Fourth image: spans 1 column
                return 'md:col-span-1'
              } else if (idx === 4) {
                // Fifth image: spans 1 column
                return 'md:col-span-1'
              } else if (idx === 5) {
                // Sixth image: large, spans 2 columns and 2 rows
                return 'md:col-span-2'
              } else if (idx === 6) {
                // Seventh image: spans 1 column
                return 'md:col-span-1'
              } else {
                // Default: single cell
                return ''
              }
            }

            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${getGridClasses(
                  index,
                )}`}
                onClick={() => handleImageClick(imageUrl)}
              >
                <Image
                  src={imageUrl}
                  alt={`Image de promotion ${index + 1}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium">
                    Voir l&apos;image
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
            aria-label="Fermer"
          >
            <X size={32} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('prev')
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2 text-2xl font-bold"
            aria-label="Image précédente"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('next')
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2 text-2xl font-bold"
            aria-label="Image suivante"
          >
            ›
          </button>
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Image de la galerie"
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
