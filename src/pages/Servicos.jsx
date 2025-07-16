import React from 'react';

// Importações corretas das imagens
import instalacao from '../img-servicos/instalacao.jpg';
import preventiva from '../img-servicos/preventiva.jpg';
import gas from '../img-servicos/gas.jpg';
import agilidade from '../img-servicos/agilidade.jpg';

const servicos = [
  {
    titulo: 'Instalação Técnica',
    descricao: 'Fazemos o vácuo correto, fixação segura e teste de pressão para garantir eficiência e durabilidade.',
    imagem: instalacao,
  },
  {
    titulo: 'Manutenção Preventiva',
    descricao: 'Limpeza de serpentina, filtro, bandeja e carga de gás para evitar falhas e economizar energia.',
    imagem: preventiva,
  },
  {
    titulo: 'Recarga de Gás',
    descricao: 'Com balança digital e manômetro, aplicamos a quantidade ideal para seu sistema.',
    imagem: gas,
  },
  {
    titulo: 'Atendimento Rápido',
    descricao: 'Ligou, atendeu. Garantimos suporte ágil e técnico no mesmo dia (conforme região).',
    imagem: agilidade,
  },
];

const Servicos = () => (
  <section className="servicos">
    <h2>Nossos Serviços</h2>
    <div className="servico-grid">
      {servicos.map((servico, index) => (
        <div className="servico-card" key={index}>
          <img src={servico.imagem} alt={servico.titulo} />
          <div className="info">
            <h3>{servico.titulo}</h3>
            <p>{servico.descricao}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Servicos;
