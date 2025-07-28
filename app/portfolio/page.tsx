"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 60, transition: { duration: 0.6 } },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export enum PortfolioCategory {
  Weddings = "weddings",
  Portraits = "portraits",
  Family = "family",
  Events = "events",
}

const portfolioCategories: Record<
  PortfolioCategory,
  {
    title: string;
    description: string;
    images: string[];
  }
> = {
  [PortfolioCategory.Weddings]: {
    title: "Wedding Photography",
    description: "Capturing love stories and magical moments",
    images: [
      "/wedding-ceremony-outdoor.png",
      "/wedding-couple-dancing.png",
      "/wedding-rings-detail.png",
      "/wedding-reception-celebration.png",
      "/wedding-bride-portrait.png",
      "/wedding-couple-sunset.png",
      "/wedding-ceremony-kiss.png",
      "/wedding-party-group.png",
    ],
  },
  [PortfolioCategory.Portraits]: {
    title: "Portrait Photography",
    description: "Professional headshots and personal portraits",
    images: [
      "/portrait-business-woman.png",
      "/portrait-creative-artist.png",
      "/portrait-senior-executive.png",
      "/portrait-young-professional.png",
      "/portrait-outdoor-natural.png",
      "/portrait-studio-dramatic.png",
      "/portrait-lifestyle-casual.png",
      "/portrait-corporate-team.png",
    ],
  },
  [PortfolioCategory.Family]: {
    title: "Family & Children",
    description: "Precious moments with loved ones",
    images: [
      "/family-beach-vacation.png",
      "/children-playground-fun.png",
      "/family-holiday-portrait.png",
      "/newborn-sleeping-peacefully.png",
      "/siblings-playing-together.png",
      "/family-picnic-park.png",
      "/children-birthday-celebration.png",
      "/grandparents-grandchildren.png",
    ],
  },
  [PortfolioCategory.Events]: {
    title: "Event Photography",
    description: "Corporate events and special celebrations",
    images: [
      "/corporate-conference-speaker.png",
      "/birthday-party-celebration.png",
      "/graduation-ceremony.png",
      "/corporate-team-building.png",
      "/anniversary-celebration.png",
      "/product-launch-event.png",
      "/charity-gala-dinner.png",
      "/business-networking-event.png",
    ],
  },
};

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>(
    PortfolioCategory.Weddings
  );

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = portfolioCategories[selectedCategory].images;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 bg-gradient-to-br from-rose-50 to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Portfolio
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Explore our photography work across different styles and moments.
              Each image tells a story worth remembering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-6 sm:py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {Object.entries(portfolioCategories).map(([key, { title }]) => (
              <Button
                key={key}
                variant={selectedCategory === key ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(key as PortfolioCategory);
                }}
              >
                {title}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {portfolioCategories[selectedCategory].title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              {portfolioCategories[selectedCategory].description}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            key={selectedCategory}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${selectedCategory} ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <Camera className="h-6 w-6 sm:h-8 sm:w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Create Your Own Story?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Let's discuss how we can capture your special moments with care
              and creativity.
            </p>
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-rose-600 hover:bg-rose-700 text-white"
                onClick={() => {
                  setTimeout(() => {
                    if (window.location.pathname === "/") {
                      const element = document.getElementById("contact");
                      if (element) {
                        const navHeight = 80;
                        const elementPosition = element.offsetTop - navHeight;
                        window.scrollTo({
                          top: elementPosition,
                          behavior: "smooth",
                        });
                      }
                    }
                  }, 100);
                }}
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={`Portfolio ${currentImageIndex + 1}`}
              width={1000}
              height={700}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {images.length > 1 && (
              <>
                <button
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) =>
                      prev === 0 ? images.length - 1 : prev - 1
                    );
                  }}
                >
                  ←
                </button>
                <button
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) =>
                      prev === images.length - 1 ? 0 : prev + 1
                    );
                  }}
                >
                  →
                </button>
              </>
            )}

            <button
              className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full"
              onClick={() => setLightboxOpen(false)}
            >
              ✕
            </button>

            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
