"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Heart,
  Baby,
  Users,
  Calendar,
  User,
  Phone,
  Mail,
  MapPin,
  Send,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";
import { SmoothScrollHandler } from "@/components/smooth-scroll";
import { MobileNav } from "@/components/mobile-nav";
import { ScrollToTop } from "@/components/scroll-to-top";
import { useRouter } from "next/navigation";
import { smoothScrollTo } from "./layout";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    icon: Baby,
    title: "Child Photography",
    description:
      "Capturing the innocence and joy of childhood with playful and natural portraits.",
    image: "/child-photography-session.png",
    pricing: {
      basic: {
        price: 299,
        duration: "1 hour",
        photos: "15 edited photos",
        includes: ["Online gallery", "Print release"],
      },
      premium: {
        price: 499,
        duration: "2 hours",
        photos: "30 edited photos",
        includes: ["Online gallery", "Print release", "USB drive", "5 prints"],
      },
      deluxe: {
        price: 799,
        duration: "3 hours",
        photos: "50 edited photos",
        includes: [
          "Online gallery",
          "Print release",
          "USB drive",
          "10 prints",
          "Photo album",
        ],
      },
    },
  },
  {
    icon: Heart,
    title: "Maternity Photography",
    description:
      "Beautiful maternity sessions celebrating the miracle of life and motherhood.",
    image: "/serene-maternity-session.png",
    pricing: {
      basic: {
        price: 349,
        duration: "1 hour",
        photos: "20 edited photos",
        includes: ["Online gallery", "Print release"],
      },
      premium: {
        price: 549,
        duration: "1.5 hours",
        photos: "35 edited photos",
        includes: ["Online gallery", "Print release", "USB drive", "5 prints"],
      },
      deluxe: {
        price: 849,
        duration: "2 hours",
        photos: "50 edited photos",
        includes: [
          "Online gallery",
          "Print release",
          "USB drive",
          "10 prints",
          "Photo album",
        ],
      },
    },
  },
  {
    icon: Users,
    title: "Wedding Photography",
    description:
      "Documenting your special day with romantic and timeless wedding photography.",
    image: "/wedding-ceremony.png",
    pricing: {
      basic: {
        price: 1999,
        duration: "6 hours",
        photos: "100 edited photos",
        includes: ["Online gallery", "Print release", "Engagement session"],
      },
      premium: {
        price: 2999,
        duration: "8 hours",
        photos: "200 edited photos",
        includes: [
          "Online gallery",
          "Print release",
          "Engagement session",
          "USB drive",
          "Wedding album",
        ],
      },
      deluxe: {
        price: 4499,
        duration: "10 hours",
        photos: "300+ edited photos",
        includes: [
          "Online gallery",
          "Print release",
          "Engagement session",
          "USB drive",
          "Wedding album",
          "Second photographer",
        ],
      },
    },
  },
  {
    icon: User,
    title: "Portrait Photography",
    description:
      "Professional headshots and personal portraits that capture your unique personality.",
    image: "/professional-portrait.png",
    pricing: {
      basic: {
        price: 199,
        duration: "30 minutes",
        photos: "10 edited photos",
        includes: ["Online gallery", "Print release"],
      },
      premium: {
        price: 349,
        duration: "1 hour",
        photos: "20 edited photos",
        includes: ["Online gallery", "Print release", "USB drive"],
      },
      deluxe: {
        price: 549,
        duration: "1.5 hours",
        photos: "30 edited photos",
        includes: ["Online gallery", "Print release", "USB drive", "5 prints"],
      },
    },
  },
  {
    icon: Calendar,
    title: "Event Photography",
    description:
      "Comprehensive event coverage for corporate functions, parties, and celebrations.",
    image: "/celebration-event-photography.png",
    pricing: {
      basic: {
        price: 599,
        duration: "3 hours",
        photos: "50 edited photos",
        includes: ["Online gallery", "Print release"],
      },
      premium: {
        price: 899,
        duration: "5 hours",
        photos: "100 edited photos",
        includes: ["Online gallery", "Print release", "USB drive"],
      },
      deluxe: {
        price: 1299,
        duration: "8 hours",
        photos: "150+ edited photos",
        includes: [
          "Online gallery",
          "Print release",
          "USB drive",
          "Event highlights video",
        ],
      },
    },
  },
  {
    icon: Users,
    title: "Family Photography",
    description:
      "Warm family portraits that preserve precious moments and connections.",
    image: "/outdoor-family-session.png",
    pricing: {
      basic: {
        price: 399,
        duration: "1 hour",
        photos: "25 edited photos",
        includes: ["Online gallery", "Print release"],
      },
      premium: {
        price: 599,
        duration: "1.5 hours",
        photos: "40 edited photos",
        includes: ["Online gallery", "Print release", "USB drive", "5 prints"],
      },
      deluxe: {
        price: 899,
        duration: "2 hours",
        photos: "60 edited photos",
        includes: [
          "Online gallery",
          "Print release",
          "USB drive",
          "10 prints",
          "Photo album",
        ],
      },
    },
  },
];

const portfolioImages = [
  "/wedding-couple-portrait.png",
  "/child-playing-outdoors.png",
  "/maternity-silhouette-sunset.png",
  "/multigenerational-family-portrait.png",
  "/professional-headshot.png",
  "/event-celebration.png",
  "/newborn-baby-portrait.png",
  "/couple-engagement.png",
];

export default function PhotographyWebsite() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/photography-studio-equipment.png"
            alt="Photography Studio"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Capturing Life's
            <span className="text-rose-400 block">Beautiful Moments</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Professional photography services that tell your unique story
            through stunning visuals
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg"
              onClick={() => (window.location.href = "/portfolio")}
            >
              View Portfolio
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Photography Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Specializing in capturing life's most precious moments with
              artistic vision and professional expertise
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-4">
                      <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-rose-600 mr-3" />
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      {service.description}
                    </p>

                    {/* Pricing Preview */}
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Starting from:
                      </p>
                      <p className="text-2xl font-bold text-rose-600">
                        ${service.pricing.basic.price}
                      </p>
                      <p className="text-xs text-gray-500">
                        {service.pricing.basic.duration} •{" "}
                        {service.pricing.basic.photos}
                      </p>
                    </div>

                    {/* <Button
                      variant="outline"
                      className="w-full group-hover:bg-rose-600 group-hover:text-white transition-colors bg-transparent"
                      onClick={() =>
                        setSelectedService(
                          selectedService === index ? null : index
                        )
                      }
                    >
                      {selectedService === index
                        ? "Hide Pricing"
                        : "View Pricing"}
                    </Button> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Pricing Section */}
          {typeof selectedService === "number" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {Object.entries(services[selectedService].pricing).map(
                ([tier, details]) => (
                  <div
                    key={tier}
                    className="border border-gray-200 rounded-lg bg-white shadow-sm p-5 transition hover:shadow-md"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-semibold capitalize text-gray-800">
                        {tier}
                      </h4>
                      <span className="text-xl font-bold text-rose-600">
                        ${details.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">
                      {details.duration} • {details.photos}
                    </p>
                    <ul className="space-y-1">
                      {details.includes.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Portfolio
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              A collection of our finest work showcasing the beauty and emotion
              in every frame
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {portfolioImages.map((image, index) => (
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
                  alt={`Portfolio ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <Camera className="h-6 w-6 sm:h-8 sm:w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-rose-600 hover:bg-rose-700 text-white"
              onClick={() => (window.location.href = "/portfolio")}
            >
              View Full Portfolio
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Sarah Johnson",
                role: "Bride",
                image: "/client-sarah.png",
                text: "LensArt captured our wedding day perfectly! Every moment was beautifully documented, and we couldn't be happier with the results.",
              },
              {
                name: "Michael Chen",
                role: "New Father",
                image: "/client-michael.png",
                text: "The newborn session was incredible. They made us feel so comfortable and the photos are absolutely stunning. We'll treasure them forever.",
              },
              {
                name: "Emily Rodriguez",
                role: "Business Owner",
                image: "/client-emily.png",
                text: "Professional, creative, and delivered exactly what we needed for our corporate headshots. Highly recommend their services!",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-4 sm:p-6 h-full">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full mr-3 sm:mr-4 w-12 h-12 sm:w-15 sm:h-15"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic text-sm sm:text-base">
                      "{testimonial.text}"
                    </p>
                    <div className="flex text-yellow-400 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-sm sm:text-base">
                          ★
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Ready to capture your special moments? Let's discuss your
              photography needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6">
                  Send us a message
                </h3>
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="text-sm sm:text-base"
                    />
                    <Input
                      placeholder="Last Name"
                      className="text-sm sm:text-base"
                    />
                  </div>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    className="text-sm sm:text-base"
                  />
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    className="text-sm sm:text-base"
                  />
                  <Textarea
                    placeholder="Tell us about your photography needs..."
                    rows={4}
                    className="text-sm sm:text-base"
                  />
                  <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-rose-600 mr-3 sm:mr-4" />
                    <span className="text-base sm:text-lg">
                      +1 (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-rose-600 mr-3 sm:mr-4" />
                    <span className="text-base sm:text-lg">
                      hello@lensart.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-rose-600 mr-3 sm:mr-4" />
                    <span className="text-base sm:text-lg">
                      123 Photography St, Creative City, CC 12345
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-4">
                  Studio Hours
                </h4>
                <div className="space-y-2 text-gray-600 text-sm sm:text-base">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: By Appointment Only</p>
                </div>
              </div>

              <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden">
                <Image
                  src="/photography-studio-interior.png"
                  alt="Studio Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Camera className="h-6 w-6 sm:h-8 sm:w-8 text-rose-600" />
              <span className="text-xl sm:text-2xl font-bold">LensArt</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm sm:text-base">
                © 2024 LensArt Photography. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                Capturing moments, creating memories.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={portfolioImages[currentImageIndex] || "/placeholder.svg"}
              alt={`Portfolio ${currentImageIndex + 1}`}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation buttons */}
            <button
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) =>
                  prev === 0 ? portfolioImages.length - 1 : prev - 1
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
                  prev === portfolioImages.length - 1 ? 0 : prev + 1
                );
              }}
            >
              →
            </button>

            {/* Close button */}
            <button
              className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full"
              onClick={() => setLightboxOpen(false)}
            >
              ✕
            </button>

            {/* Image counter */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base">
              {currentImageIndex + 1} / {portfolioImages.length}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
