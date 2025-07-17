import React from 'react'
import freezer from '../imagens/freezer.webp'
import camara from '../imagens/camara.webp'
import ar from '../imagens/frente-ar.webp'

const Produtos = () => {
  // Número do WhatsApp com DDD, no formato internacional sem o "+"
  const whatsappNumber = '5591999069633' // substitua pelo seu número real

  // Função que abre o WhatsApp com uma mensagem personalizada
  const handleComprar = (produto) => {
    const message = `Olá! vim atravens do site Big refrigerações, a loja ainda tem  ${produto}`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const produtos = [
    {
      img: ar,
      title: "Ar-condicionado Split 12.000 BTUs",
      desc: "Gás ecológico, inverter e economia de energia.",
      price: "R$ 2.300,00"
    },
    {
      img: ar,
      title: "Ar-condicionado Split 12.000 BTUs",
      desc: "Gás ecológico, inverter e economia de energia.",
      price: "R$ 2.300,00"
    },
    {
      img: freezer,
      title: "Freezer Horizontal 500L",
      desc: "Motor silencioso, tampa dupla e super resistência.",
      price: "R$ 3.200,00"
    },
    {
      img: camara,
      title: "Câmara Fria Industrial",
      desc: "Ideal para açougues e comércios. Alta capacidade térmica.",
      price: "R$ 12.000,00"
    },
    {
      img: ar,
      title: "Ar-condicionado Split 12.000 BTUs",
      desc: "Gás ecológico, inverter e economia de energia.",
      price: "R$ 2.300,00"
    }
  ]

  return (
    <section>
      <h2>Máquinas em Destaque</h2>
      <div className="product-grid">
        {produtos.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span>{item.price}</span>
              <button
                className="btn-comprar"
                onClick={() => handleComprar(item.title)}
              >
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Produtos
