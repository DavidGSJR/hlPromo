import React from 'react'

const products = [
  {id:1,name:'Cimento 50kg',price:'R$ 29,90', badge:'-20%'},
  {id:2,name:'Tinta 18L',price:'R$ 139,90', badge:'Promo'},
  {id:3,name:'Parafuso kit',price:'R$ 12,50', badge:'-10%'}
]

const WA_PHONE = '5511999999999'

export default function Products(){
  return (
    <section className="py-16" id="produtos">
      <h2 className="text-2xl font-bold mb-6" data-aos="fade-up">Produtos em Oferta</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => {
          const msg = encodeURIComponent(`Olá, tenho interesse no produto: ${p.name}`)
          const href = `https://wa.me/${WA_PHONE}?text=${msg}`
          return (
          <div key={p.id} data-aos="fade-up" className="border rounded-lg p-4 bg-white hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center text-gray-400">Imagem</div>
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{p.name}</h3>
                <span className="text-sm text-brandYellow font-bold">{p.badge}</span>
              </div>
              <p className="mt-2 font-bold text-brandBlue">{p.price}</p>
              <div className="mt-4">
                <a href={href} target="_blank" rel="noreferrer" className="inline-block bg-brandBlue text-white px-4 py-2 rounded focus-ring">Comprar via WhatsApp</a>
              </div>
            </div>
          </div>
        )})}
      </div>
    </section>
  )
}
