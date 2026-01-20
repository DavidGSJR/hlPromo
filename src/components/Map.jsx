import React from "react";

export default function MapSection() {
  return (
    <section className="py-20 bg-gray-50" id="localizacao">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="font-heading text-2xl font-bold text-center mb-4 text-brandBlue"
          data-aos="fade-up"
        >
          Onde Estamos
        </h2>

        <p
          className="font-heading text-center text-gray-600 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Visite a HL Casa da Construção DF e confira nossas promoções de perto
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* MAPA */}
          <div
            className="w-full h-[320px] rounded-2xl overflow-hidden shadow-md border border-gray-200"
            data-aos="fade-up"
          >
            <iframe
              title="Mapa HL Casa da Construção"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330.0187839358538!2d-48.03793620355429!3d-15.826962255122767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a393aa90b1525%3A0x224a09051a011505!2sHL%20CASA%20DA%20CONSTRU%C3%87%C3%83O%20DF!5e0!3m2!1spt-BR!2sbr!4v1768775425807!5m2!1spt-BR!2sbr"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* INFORMAÇÕES */}
          <div data-aos="fade-up" data-aos-delay="150">
            <h3 className="font-heading text-xl font-semibold mb-3 text-gray-800">
              HL Casa da Construção DF
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Estamos localizados em uma região de fácil acesso, prontos para
              atender você com os melhores materiais para sua obra ou reforma.
            </p>

            <p className="text-gray-700 mb-6">
              📍 <strong>Endereço:</strong> Setor Habitacional Vicente Pires - Quadra 04 Conj.8 Lote 01A Loja 02
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=-15.826962,-48.037936"
              target="_blank"
              rel="noreferrer"
              className="font-heading inline-flex items-center justify-center bg-brandBlue text-white px-6 py-3 rounded-full font-semibold transition hover:opacity-90"
            >
              Ver rota no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
