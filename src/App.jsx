import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import MapSection from './components/Map'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App(){
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <main className="max-w-7xl mx-auto px-4">
        <Services />
        <Products />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppButton phone="5561998680050" message="Olá! Gostaria de mais informações sobre as promoções." />
    </div>
  )
}
