import React, { useState } from 'react';

const Contato = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);

    setTimeout(() => setEnviado(false), 9000);
  };

  return (
    <section>
      <h2>Solicite Orçamento</h2>

      {enviado ? (
        <div className="mensagem-enviada">
          <h3>✅ Obrigado pelo contato!</h3>
          <p>Recebemos sua solicitação e logo entraremos em contato via WhatsApp ou telefone informado.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Seu nome completo" required />
          <input type="tel" placeholder="WhatsApp ou telefone" required />
          <input type="email" placeholder="E-mail (opcional)" />
          <textarea placeholder="Descreva o que você precisa..." rows="4" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      )}
    </section>
  );
};

export default Contato;
