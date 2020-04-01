import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <div className="incident-container">
      
      <div className="content">
        <section>
          <img src={logoImg} alt="header" />
          
          <h1>Cadastrar novo caso</h1>
          <p>Descreva detalhadamente para encontrar um herói para resolver isso.</p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o início
          </Link>

        </section>
        <form>
          <input placeholder="Título do Caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em (R$)" />

          <button className="button" type="submit">Cadastrar</button>
        </form>


      </div>

    </div>
  );
}

