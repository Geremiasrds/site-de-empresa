import React from 'react'
import { Link } from 'react-router-dom' // 👈 adicionado
import freezer from '../imagens/freezer.webp'
import camara from '../imagens/camara.webp'
import ar from '../imagens/frente-ar.webp'

const Produtos = () => (
  <section>
    <h2>Máquinas em Destaque</h2>
    <div className="product-grid">
      {[
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
        }
      ].map((item, index) => (
        <div className="product-card" key={index}>
          <img src={item.img} alt={item.title} />
          <div className="info">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span>{item.price}</span>
            <Link to="/comprar" className="btn-comprar">Comprar</Link>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Produtos
