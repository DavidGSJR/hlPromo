import { categories } from "../data/Categories";

const Services = () => {
  return (
    <section className="bg-[#F8F9FA] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#224A59]">
            Tudo para sua Construção
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Encontre materiais, ferramentas e soluções completas para sua obra,
            reforma ou projeto.
          </p>
        </div>

        <div className="
          grid
          grid-cols-2
          md:grid-cols-4
          auto-rows-[200px]
          gap-6
        ">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`
                relative
                overflow-hidden
                rounded-2xl
                shadow-lg
                group
                ${item.span}
              `}
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

              <div className="
                absolute inset-0
                bg-black/40
                flex items-end
                p-6
              ">
                <h3 className="
                  text-white
                  text-lg
                  font-semibold
                  drop-shadow
                ">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
