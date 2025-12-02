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
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-white hover:text-accent-cyan transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-white hover:text-accent-cyan transition-colors">
              Why Choose Us
            </a>
            <a href="#testimonials" className="text-white hover:text-accent-cyan transition-colors">
              Testimonials
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

