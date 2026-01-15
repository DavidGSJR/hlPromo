import React from 'react'

const services = [
  {title: 'Materiais de Construção', desc: 'Cimento, areia, tijolos e muito mais.'},
  {title: 'Ferramentas', desc: 'Ferramentas manuais e elétricas das melhores marcas.'},
  {title: 'Reformas', desc: 'Assessoria para pequenas e médias reformas.'}
]

export default function Services(){
  return (
    <section className="py-16" id="servicos">
      <h2 className="text-2xl font-bold mb-6" data-aos="fade-up">Serviços Oferecidos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map(s=> (
          <div key={s.title} data-aos="fade-up" className="p-6 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-brandBlue text-white flex items-center justify-center">🏗️</div>
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
