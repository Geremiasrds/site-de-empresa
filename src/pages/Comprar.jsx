import React from 'react'
import produtoImg from '../imagens/frente-ar.webp' // Substitua pela imagem do produto selecionado futuramente

const Comprar = () => {
  return (
    <section style={{ padding: '2rem', maxWidth: '1000px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#0ea5e9', marginBottom: '1rem' }}>Resumo do Pedido</h1>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        backgroundColor: '#f9fbfc',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <img
            src={produtoImg}
            alt="Produto"
            style={{
              width: '250px',
              height: 'auto',
              borderRadius: '12px',
              objectFit: 'cover',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
            }}
          />
          <div style={{ maxWidth: '500px' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#0f172a' }}>Ar-condicionado Split 12.000 BTUs</h2>
            <p style={{ fontSize: '1rem', color: '#475569', marginBottom: '1rem' }}>
              Gás ecológico, tecnologia inverter, super silencioso e econômico.
              Ideal para residências e escritórios de até 20m².
            </p>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#0ea5e9'
            }}>R$ 2.300,00</span>
          </div>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Seu Nome" required style={inputEstilo} />
          <input type="email" placeholder="Seu Email" required style={inputEstilo} />
          <input type="tel" placeholder="Telefone / WhatsApp" required style={inputEstilo} />
          <textarea placeholder="Endereço de entrega ou observações" rows="4" style={inputEstilo}></textarea>
          <button type="submit" style={botaoEstilo}>Enviar Pedido</button>
        </form>
      </div>
    </section>
  )
}

// Estilo dos inputs e textarea
const inputEstilo = {
  width: '100%',
  padding: '1rem',
  fontSize: '1rem',
  border: '1px solid #cbd5e1',
  borderRadius: '8px',
  backgroundColor: '#ffffff',
  color: '#0f172a',
  boxShadow: '0 1px 6px rgba(0,0,0,0.04)'
}

// Estilo do botão
const botaoEstilo = {
  padding: '1rem',
  fontSize: '1.1rem',
  backgroundColor: '#0ea5e9',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontWeight: '700',
  cursor: 'pointer',
  transition: '0.3s'
}

export default Comprar
