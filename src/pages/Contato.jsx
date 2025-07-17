import React, { useState } from 'react';

const Contato = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [descricao, setDescricao] = useState('');
  const [enviado, setEnviado] = useState(false);

  // Seu número WhatsApp (com código do país, sem o '+')
  const whatsappNumber = '5591999069633';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !telefone || !descricao) {
      alert('Por favor, preencha os campos obrigatórios.');
      return;
    }

    // Monta a mensagem para enviar pelo WhatsApp
    const mensagem = `
Olá, meu nome é ${nome}.
Telefone/WhatsApp: ${telefone}
${email ? `Email: ${email}` : ''}
Descrição: ${descricao}
`.trim();

    // Abre o WhatsApp no link com a mensagem codificada
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');

    setEnviado(true);

    // Opcional: limpa o formulário após enviar
    setNome('');
    setTelefone('');
    setEmail('');
    setDescricao('');

    // Depois de 9 segundos, tira a mensagem de enviado
    setTimeout(() => setEnviado(false), 9000);
  };

  return (
    <section>
      <h2>Solicite Orçamento</h2>

      {enviado ? (
        <div className="mensagem-enviada">
          <h3>✅ Obrigado pelo contato!</h3>
          <p>Recebemos sua solicitação e logo entraremos em contato via WhatsApp.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu nome completo"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="tel"
            placeholder="WhatsApp ou telefone"
            required
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail (opcional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Descreva o que você precisa..."
            rows="4"
            required
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      )}
    </section>
  );
};

export default Contato;
