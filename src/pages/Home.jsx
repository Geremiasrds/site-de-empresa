import React from 'react'
import logo from '../../logo.png'

const Home = () => (
  <header className="home-banner">
    <div className="logo-estilizada">
      <img src={logo} alt="Logo BIG Refrigeração" className="logo-img" />
      
      <div className="texto-logo">
        <h1>BIG</h1>
        <p>Refrigeração</p>
        <p>Manutenção</p>
        <p>Instalação</p>
      </div>
    </div>
  </header>
)

export default Home
