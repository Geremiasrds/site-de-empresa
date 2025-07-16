import React from 'react'
import freezer from '../../1xg.webp'
import camara from '../../D_NQ_NP_2X_705042-MLU79259045825_092024-F.webp'
import ar from '../../31OxGWbiNPL._UF894,1000_QL80_FMwebp_.webp'

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
      ].map((item, index) => (
        <div className="product-card" key={index}>
          <img src={item.img} alt={item.title} />
          <div className="info">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span>{item.price}</span>
            <button className="btn-comprar">Comprar</button>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Produtos
