import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FA] border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* SOBRE */}
          <div data-aos="fade-up">
            <h4 className="text-lg font-bold text-brandBlue mb-3">
              HL Casa da Construção
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tudo para sua obra, reforma e projetos. Materiais, ferramentas
              e soluções completas para construção civil.
            </p>
          </div>

          {/* CONTATO */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-lg font-bold text-brandBlue mb-3">
              Contato
            </h4>

            <ul className="text-sm text-gray-600 space-y-3">
              <li>📍 Setor Habitacional Vicente Pires - Quadra 04 Conj.8 Lote 01A Loja 02</li>

              <li>
                📞{" "}
                <a
                  href="tel:+5561998680050"
                  className="text-brandBlue hover:underline"
                >
                  (61) 99868-0050
                </a>
              </li>

              <li>
                ✉️{" "}
                <a
                  href="mailto:hl.assessoriadf@gmail.com"
                  className="text-brandBlue hover:underline"
                >
                  hl.assessoriadf@gmail.com
                </a>
              </li>

              <li>
                📸{" "}
                <a
                  href="https://www.instagram.com/hl.casadaconstrucao.df"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brandBlue hover:underline font-medium"
                >
                  @hl.casadaconstrucao.df
                </a>
              </li>
            </ul>
          </div>

          {/* ATENDIMENTO */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-bold text-brandBlue mb-3">
              Atendimento
            </h4>

            <p className="text-sm text-gray-600 mb-4">
              Atendimento rápido pelo WhatsApp:
            </p>

            <a
              href="https://wa.me/5561998680050"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                bg-[#25D366]
                text-white
                px-6
                py-3
                rounded-full
                font-semibold
                shadow
                transition
                hover:scale-105
              "
            >
              <svg className="w-7 h-7 mr-3 animate-pulse-slow" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
              Chamar no WhatsApp
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} HL Casa da Construção. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
