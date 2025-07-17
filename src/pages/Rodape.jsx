import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Rodape = () => {
  const [mostrarMapa, setMostrarMapa] = useState(false);

  const handleVoltarAoTopo = (e) => {
    e.preventDefault();

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 1000);
  };

  const toggleMapa = () => {
    setMostrarMapa((prev) => !prev);
  };

  return (
    <footer className="rodape">
      <div className="container-rodape">
        <div className="info-empresa">
          <h4>Big Refrigeração</h4>
          <p>CNPJ: 58.228.122/0001-10</p>
          <p>Telefone: (55) 91 99906-9633</p>
          <p>10A Rua da Horta, 5 - Bairro Sessenta</p>
          <p>CEP: 68721-000, Salinópolis - PA</p>
          <p>Email: bigrefrigeracaosal@gmail.com</p>
        </div>

        <div className="redes-sociais">
          <p>Siga-nos:</p>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.instagram.com/big_refrigeracao?igsh=dDV1N2I1bHdpcWoy"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram size={20} /> Instagram
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://facebook.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaFacebook size={20} /> Facebook
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://wa.me/5591999069633"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaWhatsapp size={20} /> WhatsApp
          </motion.a>
        </div>
      </div>

      <button className="btn-mapa" onClick={toggleMapa}>
        <FaMapMarkerAlt />
        {mostrarMapa ? 'Ocultar Mapa' : 'Mostrar Mapa'}
      </button>

      {mostrarMapa && (
        <div className="mapa">
          <iframe
            src="https://www.google.com/maps?q=Rua%20da%20Horta%2010A%20Salinópolis%20Pará&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Localização Big Refrigeração"
          ></iframe>
        </div>
      )}

      <p className="direitos">
        © {new Date().getFullYear()} Big Refrigeração. Todos os direitos reservados.
      </p>

      <button className="voltar-topo" onClick={handleVoltarAoTopo}>
        ↑ Voltar ao topo
      </button>
    </footer>
  );
};

export default Rodape;
