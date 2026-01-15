import React from 'react'

export default function WhatsAppButton({phone, message}){
  const msg = message ? `?text=${encodeURIComponent(message)}` : ''
  const href = `https://wa.me/${phone}${msg}`
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp" className="fixed right-4 bottom-4 z-50">
      <div className="w-14 h-14 rounded-full bg-brandYellow flex items-center justify-center shadow-lg text-brandBlue transform hover:scale-105 transition-transform" tabIndex="0">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M20.52 3.48A11.9 11.9 0 0012 0C5.373 0 0 5.373 0 12c0 2.116.55 4.074 1.6 5.82L0 24l6.4-1.64A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.24-6.2-3.48-8.52z" fill="#224A59"/>
        </svg>
      </div>
    </a>
  )
}
