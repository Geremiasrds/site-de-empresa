import React, { useState } from 'react';

const Avaliacoes = () => {
  const [avaliacoes, setAvaliacoes] = useState([
    { nome: 'Restaurante Salinas', comentario: 'Rapaz o tecnico resolveu um poblema de uma placa condenada por 3 tecnicos, parabéns pelo serviço!!', estrelas: 5 },
    { nome: 'João M.', comentario: 'O técnico chegou rápido e resolveu o problema do meu ar na hora. Atendimento nota 10!', estrelas: 5 },
    { nome: 'Açougue 3 Irmãos', comentario: 'A câmara fria ficou perfeita. Instalação rápida, limpa e profissional.', estrelas: 5 },
    { nome: 'Patrícia C.', comentario: 'Foram os únicos que me explicaram tudo certinho antes do serviço. Super confiáveis!', estrelas: 5 },
    { nome: 'Cláudia F.', comentario: 'O atendimento foi bom, mas demorou mais do que o combinado. No fim, deu tudo certo.', estrelas: 3 },
    { nome: 'José R.', comentario: 'A instalação ficou boa, mas deixaram um pouco de sujeira na área de serviço.', estrelas: 3 },
    { nome: 'Luciana T.', comentario: 'Marcaram de vir de manhã, mas só apareceram no final da tarde. Serviço bem feito, porém poderiam avisar.', estrelas: 3 },
    { nome: 'Bruno K.', comentario: 'Infelizmente tive que remarcar duas vezes. Quando vieram, resolveram bem, mas deixou má impressão.', estrelas: 2 },
  ]);

  const [novaAvaliacao, setNovaAvaliacao] = useState({
    nome: '',
    comentario: '',
    estrelas: 5
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovaAvaliacao({ ...novaAvaliacao, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAvaliacoes([novaAvaliacao, ...avaliacoes]);
    setNovaAvaliacao({ nome: '', comentario: '', estrelas: 5 });
  };

  const renderEstrelas = (quantidade) => '⭐'.repeat(quantidade).padEnd(5, '☆');

  return (
    <section>
      <h2>Depoimentos de Clientes</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', textAlign: 'left', maxWidth: '500px' }}>
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={novaAvaliacao.nome}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <textarea
          name="comentario"
          placeholder="Deixe sua avaliação"
          value={novaAvaliacao.comentario}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold', marginTop: '10px' }}>
  Nota:
  <select
    name="estrelas"
    value={novaAvaliacao.estrelas}
    onChange={handleChange}
    style={{
      padding: '6px 10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      backgroundColor: '#f9f9f9',
      color: '#333',
      fontSize: '16px',
      outline: 'none',
      transition: 'border 0.3s ease'
    }}
    onFocus={(e) => e.target.style.border = '1px solid #007bff'}
    onBlur={(e) => e.target.style.border = '1px solid #ccc'}
  >
    <option value="">Selecione</option>
    <option value="1">⭐☆☆☆☆</option>
    <option value="2">⭐⭐☆☆☆</option>
    <option value="3">⭐⭐⭐☆☆</option>
    <option value="4">⭐⭐⭐⭐☆</option>
    <option value="5">⭐⭐⭐⭐⭐</option>
  </select>
</label>

        <button type="submit" style={{ display: 'block', marginTop: '10px', padding: '10px 20px' }}>
          Enviar Avaliação
        </button>
      </form>

      <div className="product-grid">
        {avaliacoes.map((av, index) => (
          <div className="card" key={index}>
            <h3>{av.nome}</h3>
            <p>"{av.comentario}"</p>
            <p>{renderEstrelas(av.estrelas)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Avaliacoes;
