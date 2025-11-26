'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Benefits from '@/components/Benefits'
import Testimonials from '@/components/Testimonials'
import AuthorizationSection from '@/components/AuthorizationSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Process />
      <Benefits />
      <Testimonials />
      <AuthorizationSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}

