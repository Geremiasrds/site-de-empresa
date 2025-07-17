import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Servicos from './pages/Servicos'
import Sobre from './pages/Sobre'
import Avaliacoes from './pages/Avaliacoes'
import Contato from './pages/Contato'
import Rodape from './pages/Rodape'
import BotaoWhatsApp from './BotaoWhatsApp'
import Comprar from './pages/Comprar' // 👈 nova página

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={
          <div className="geral">
            <Home />
            <div className='inicio'>
              <Produtos />
              <Servicos />
              <Sobre />
              <Avaliacoes />
              <Contato />
              <BotaoWhatsApp />
              <Rodape />
            </div>
          </div>
        } />

        {/* Página de compra */}
        <Route path="/comprar" element={<Comprar />} />
      </Routes>
    </Router>
  )
}

export default App
