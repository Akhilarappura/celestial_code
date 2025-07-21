"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/images/gallery1.jpg",
    alt: "Training Session 1",
    title: "Youth Training Program",
  },
  {
    src: "/images/gallery2.jpg",
    alt: "Team Celebration",
    title: "Victory Celebration",
  },
  {
    src: "/images/gallery3.jpg",
    alt: "Academy Training",
    title: "Professional Training",
  },
  {
    src: "/images/gallery4.jpg",
    alt: "Match Action",
    title: "Match Day Action",
  },
  {
    src: "/images/gallery5.jpg",
    alt: "Coaching Session",
    title: "Individual Coaching",
  },
  {
    src: "/images/gallery6.jpg",
    alt: "Team Photo",
    title: "Academy Team 2023",
  },
  {
    src: "/images/gallery7.jpg",
    alt: "Team Photo",
    title: "Academy Team 2023",
  },
  {
    src: "/images/gallery8.jpg",
    alt: "Team Photo",
    title: "Academy Team 2023",
  },
  {
    src: "/images/gallery9.jpg",
    alt: "Team Photo",
    title: "Academy Team 2023",
  },
  {
    src: "/images/gallery7.jpg",
    alt: "Team Photo",
    title: "Academy Team 2023",
  },
  {
    src: "/images/gallery7.jpg",
    alt: "Team Photo",
    title: "Academy Team 2023",
  },
  {
    src: "/images/gallery7.jpg",
    alt: "Team Photo",
    title: "Academy Team 2023",
  },
  {
    src: "/images/gallery13.jpg",
    alt: "Team Photo",
    title: "Academy Team 2023",
  },
]

// Collage images for the bottom section
const collageImages = [
  {
    src: "/images/collage1.jpg",
    alt: "Training Excellence",
    title: "Training Excellence",
  },
  {
    src: "/images/collage2.jpg",
    alt: "Team Spirit",
    title: "Team Spirit",
  },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Gallery</h2>
          <div className="w-16 sm:w-24 h-1 bg-green-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing moments of excellence, teamwork, and the beautiful game
          </p>
        </div>

        {/* Main Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => openModal(index)}
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center px-4">
                    <div className="text-base sm:text-lg font-semibold mb-2">{image.title}</div>
                    <div className="text-xs sm:text-sm">Click to view</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Section: Left Image + Right Collage */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Large Image */}
          <div className="relative">
            <div className="relative h-96 sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/main-feature.jpg"
                alt="Academy Excellence"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">Excellence in Every Game</h3>
                <p className="text-sm sm:text-base opacity-90">
                  Our academy focuses on developing not just skilled players, but well-rounded individuals who excel
                  both on and off the field.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Collage */}
          <div className="space-y-6">
            {/* Top Collage Image */}
            <div className="relative h-48 sm:h-64 lg:h-72 rounded-xl overflow-hidden shadow-lg group">
              <Image
                src={collageImages[0].src || "/placeholder.svg"}
                alt={collageImages[0].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-start pl-6">
                <div className="text-white">
                  <h4 className="text-xl sm:text-2xl font-bold mb-2">{collageImages[0].title}</h4>
                  <p className="text-sm opacity-90">Professional training methods</p>
                </div>
              </div>
            </div>

            {/* Bottom Collage Image */}
            <div className="relative h-48 sm:h-64 lg:h-72 rounded-xl overflow-hidden shadow-lg group">
              <Image
                src={collageImages[1].src || "/placeholder.svg"}
                alt={collageImages[1].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-600/80 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-end pr-6">
                <div className="text-white text-right">
                  <h4 className="text-xl sm:text-2xl font-bold mb-2">{collageImages[1].title}</h4>
                  <p className="text-sm opacity-90">Building champions together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </Button>

            <div className="relative">
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto"
              />

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            <div className="text-center mt-4">
              <h3 className="text-white text-lg sm:text-xl font-semibold">{galleryImages[selectedImage].title}</h3>
              <p className="text-gray-300 text-sm mt-1">
                {selectedImage + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
