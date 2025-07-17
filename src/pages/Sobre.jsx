import React, { useState } from 'react';

const CardAtividade = ({ titulo, children }) => {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="card-atividade">
      <button className="btn-titulo" onClick={() => setAberto(!aberto)}>
        {titulo} {aberto ? '▲' : '▼'}
      </button>
      {aberto && <div className="conteudo">{children}</div>}
    </div>
  );
};

const Sobre = () => (
  <section className="sobre">
    <h2>Você cuida da refrigeração do seu ambiente como ela merece?</h2>

    <div className="card">
      <p>Refrigeração não é luxo. É saúde, economia e proteção do que é seu.</p>
      <p>
        Imagine perder alimentos, medicamentos ou clientes por um simples descuido técnico. Isso acontece todos os dias com quem <strong>não faz manutenção profissional</strong>.
      </p>

      <ul>
        <li>
          <strong>Instalação Profissional:</strong> Aparelhos mal instalados consomem mais energia e quebram mais rápido. Trabalhamos com <strong>nível digital, vácuo, nitrogênio e testes de estanqueidade</strong>.
        </li>
        <li>
          <strong>Limpeza técnica:</strong> Eliminamos <strong>ácaros, fungos e mofo</strong> do seu ar-condicionado com limpeza completa e segura.
        </li>
        <li>
          <strong>Gás na medida:</strong> Utilizamos <strong>gás original, balança digital e manômetros calibrados</strong> para máxima performance e proteção do compressor.
        </li>
        <li>
          <strong>Padrão técnico:</strong> Nada de improviso. Aqui é BIG. Instalação, manutenção e acabamento com excelência.
        </li>
      </ul>

      <p style={{ marginTop: '1rem' }}>
        🔧 <strong>Seu sistema de refrigeração é um investimento.</strong> Confie a manutenção a quem entende. A BIG Refrigeração garante eficiência e durabilidade.
      </p>

      <p style={{ marginTop: '1rem', fontWeight: 'bold', color: '#0ea5e9' }}>
        A BIG Refrigeração (CNPJ 58.228.122/0001-10) atua desde 26/11/2024, em Salinópolis-PA. Atividade principal: Manutenção e reparação de máquinas e aparelhos de refrigeração e ventilação para uso industrial e comercial (CNAE 33.14-7-07). Situação cadastral: Ativa.
        Fale conosco. Atendemos via telefone e WhatsApp.
      </p>
    </div>

    <h2 style={{ marginTop: '2rem' }}>Principais Atividades da BIG Refrigeração</h2>

    <CardAtividade titulo="1. Refrigeração e Ventilação Industrial e Comercial">
      <p>Manutenção e reparo de:</p>
      <ul>
        <li>Balcões e câmaras frigoríficas</li>
        <li>Exaustores, ventiladores e coifas industriais</li>
        <li>Freezers, refrigeradores e bebedouros comerciais</li>
        <li>Aspiradores industriais</li>
        <li>Máquinas e aparelhos de refrigeração e ventilação diversos</li>
      </ul>
    </CardAtividade>

    <CardAtividade titulo="2. Instalação e Manutenção Elétrica">
      <p>Serviços em residências, comércios e indústrias:</p>
      <ul>
        <li>Redes elétricas, cabeamento lógico e de comunicação</li>
        <li>Alarmes, interfones e automação predial</li>
        <li>Para-raios, antenas e sistemas fotovoltaicos</li>
        <li>Montagem e manutenção de quadros e padrões de energia</li>
        <li>Instalações completas de infraestrutura elétrica</li>
      </ul>
    </CardAtividade>

    <CardAtividade titulo="3. Usinagem, Tornearia e Solda">
      <p>Serviços industriais sob contrato:</p>
      <ul>
        <li>Tornearia, fresagem e usinagem de peças</li>
        <li>Soldagem industrial</li>
        <li>Jateamento com granalha e jato de areia</li>
      </ul>
    </CardAtividade>

    <CardAtividade titulo="4. Instalações Hidráulicas, Sanitárias e de Gás">
      <p>Execução em projetos de pequeno a grande porte:</p>
      <ul>
        <li>Encanamentos e redes hidráulicas completas</li>
        <li>Sistemas de aquecimento (gás, óleo e solar)</li>
        <li>Redes de gás e tubulações de vapor</li>
        <li>Infraestrutura para distribuição de gases hospitalares</li>
      </ul>
    </CardAtividade>
  </section>
);

export default Sobre;
