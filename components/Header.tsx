'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-primary shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-heading font-bold text-white">
              Fund Rise Capital
            </h1>
          </div>
        </div>
      </nav>
    </header>
  )
}

