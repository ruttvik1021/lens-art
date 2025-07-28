"use client"

import { useEffect } from "react"

export function SmoothScrollHandler() {
  useEffect(() => {
    // Handle hash links on page load
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const elementId = hash.substring(1)
        const element = document.getElementById(elementId)
        if (element) {
          const navHeight = 80
          const elementPosition = element.offsetTop - navHeight

          setTimeout(() => {
            window.scrollTo({
              top: elementPosition,
              behavior: "smooth",
            })
          }, 100)
        }
      }
    }

    // Handle initial load with hash
    handleHashChange()

    // Handle hash changes
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return null
}
