import React from 'react'

export default function MapSection(){
  return (
    <section className="py-16" id="localizacao">
      <h2 className="text-2xl font-bold mb-6" data-aos="fade-up">Localização</h2>
      <div className="w-full h-64 rounded overflow-hidden shadow" data-aos="fade-up">
        <iframe
          title="Mapa HL Casa da Construção"
          width="100%"
          height="100%"
          frameBorder="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0!2d-46.6333!3d-23.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1"
          allowFullScreen>
        </iframe>
      </div>
    </section>
  )
}
