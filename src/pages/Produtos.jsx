import React, { useEffect, useRef, useState } from 'react'
import freezer from '../imagens/freezer.webp'
import camara from '../imagens/camara.webp'
import ar from '../imagens/frente-ar.webp'

const Produtos = () => {
  const whatsappNumber = '5591999069633' // seu número
  const scrollRef = useRef(null)
  const [paused, setPaused] = useState(false)

  // Função para abrir o WhatsApp e pausar o scroll
  const handleComprar = (produto) => {
    const message = `Olá! vim através do site Big Refrigerações, a loja ainda tem ${produto}`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')

    // Pausar scroll por 5 segundos
    setPaused(true)
    setTimeout(() => {
      setPaused(false)
    }, 5000)
  }

  // Rolagem infinita
  useEffect(() => {
    const scrollContainer = scrollRef.current
    let animationFrameId

    const scroll = () => {
      if (!paused && scrollContainer) {
        scrollContainer.scrollLeft += 1
        // Se chegar no final, volta pro início
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, [paused])

  const produtos = [
    {
      img: ar,
      title: "Ar-condicionado Split 12.000 BTUs",
      desc: "Gás ecológico, inverter e economia de energia.",
      price: "R$ 2.300,00",
      priceOld: "R$ 2.800,00"
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
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Máquinas em Destaque</h2>
      <div className="scroll-container" ref={scrollRef}>
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
