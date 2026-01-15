import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h4 className="font-bold">HL Casa da Construção</h4>
          <p className="text-sm mt-2">Rua Exemplo, 123 - Centro<br/>Cidade - Estado</p>
        </div>
        <div>
          <h4 className="font-bold">Contato</h4>
          <p className="text-sm mt-2">Telefone: <a href="tel:+5511999999999" className="text-brandBlue">(11) 99999-9999</a><br/>Email: <a href="mailto:contato@hlconstrucao.com" className="text-brandBlue">contato@hlconstrucao.com</a></p>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="font-bold">Redes</h4>
            <p className="text-sm mt-2">@hlconstrucao</p>
          </div>
          <div className="text-xs text-gray-500 mt-4">© {new Date().getFullYear()} HL Casa da Construção. Todos os direitos reservados.</div>
        </div>
      </div>
    </footer>
  )
}
