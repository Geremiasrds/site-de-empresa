import React, { useEffect, useState } from 'react';
import logo from '../../logo.png';

const Home = () => {
  const [oculto, setOculto] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setOculto(window.scrollY > 200);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="home-banner">
      <div className={`logo-estilizada ${oculto ? 'logo-oculta' : ''}`}>
        <img src={logo} alt="Logo BIG Refrigeração" className="logo-img" />
        <div className="texto-logo">
          <h1>BIG</h1>
          <p>Refrigeração</p>
          <p>Manutenção</p>
          <p>Instalação</p>
        </div>
      </div>
    </header>
  );
};

export default Home;
