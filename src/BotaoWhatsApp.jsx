import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'


const BotaoWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5591999069633" // substitua pelo seu número com DDI e DDD
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} />
      Fale conosco
    </a>
  )
}

export default BotaoWhatsApp
