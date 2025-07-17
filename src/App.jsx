import React from 'react'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Servicos from './pages/Servicos'
import Sobre from './pages/Sobre'
import Avaliacoes from './pages/Avaliacoes'
import Contato from './pages/Contato'
import BotaoWhatsApp from './BotaoWhatsApp'
import Rodape from './pages/Rodape'

function App() {
  return (
    <div className='geral'>
      <Home />
      <div className='inicio'>
      <Produtos />
      <Servicos />
      <Sobre />
      <Avaliacoes />
      <Contato />
      <BotaoWhatsApp />
      <Rodape/>

      </div>

    </div>
  )
}

export default App