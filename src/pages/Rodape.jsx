import React from 'react';

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="container-rodape">
        <div className="info-empresa">
          <h4>Big Refrigeração</h4>
          <p>CNPJ: 12.345.678/0001-99</p>
          <p>Telefone: (11) 91234-5678</p>
          <p>Endereço: Rua Exemplo, 123 - Centro, São Paulo - SP</p>
        </div>
        <div className="redes-sociais">
          <p>Siga-nos:</p>
          <a href="https://instagram.com/seuusuario" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com/seuusuario" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://wa.me/5511912345678" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
      <p className="direitos">© {new Date().getFullYear()} Big Refrigeração. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Rodape;
