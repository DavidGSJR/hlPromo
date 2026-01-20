import {
  Plug,
  Droplet,
  HardHat,
  Hammer,
  Zap,
  Brush,
  Home,
  FileText,
  Building2,
  Ruler
} from "lucide-react";

const services = [
  { title: "Elétrica", icon: Plug },
  { title: "Hidráulica", icon: Droplet },
  { title: "EPI", icon: HardHat },
  { title: "Ferramentas Manuais", icon: Hammer },
  { title: "Ferramentas Elétricas", icon: Zap },
  { title: "Produtos de Limpeza", icon: Brush },
  { title: "Utilidades para Casa", icon: Home },
  { title: "Xerox, Consulta IPTU, IPVA, ETC", icon: FileText },
  { title: "Construção Civil", icon: Building2 },
  { title: "Execução de Obras e Projetos", icon: Ruler }
];

const Services = () => {
  return (
    <section id="servicos" className="bg-[#F8F9FA] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div
          data-aos="fade-up"
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl font-bold text-[#224A59]">
            O que você encontra aqui
          </h2>
          <p className="font-heading mt-4 text-gray-600 max-w-2xl mx-auto">
            Produtos e serviços completos para sua obra, reforma ou projeto.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="
                  bg-white
                  rounded-2xl
                  p-6
                  shadow-sm
                  hover:shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <div className="
                  w-12
                  h-12
                  mb-4
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#F2BC1B]/20
                ">
                  <Icon className="w-6 h-6 text-[#224A59]" />
                </div>

                <h3 className="text-[#224A59] font-semibold text-sm">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
