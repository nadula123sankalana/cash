'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Benefits from '@/components/Benefits'
import Testimonials from '@/components/Testimonials'
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
      <FinalCTA />
      <Footer />
    </main>
  )
}

