import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Login() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="container-header" />
        <span>Bem vinda, </span>
  
        {/* <input placeholder="Insira seu logon" />
        <button className="button" type="submit">Entrar</button> */}
        <Link className="button" to="/incidents/new">
            Cadastrar novo caso
        </Link>
        <button type="button"><FiPower size={18} color="#E02041" /></button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
        <li>
          <strong>CASO 1</strong>
          <p>TESTE</p>

          <strong>Descrição</strong>
          <p>TESTE</p>

          <strong>Valor</strong>
          <p>aTETSTE</p>

          <button type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
        </li>

        <li>
          <strong>CASO 1</strong>
          <p>TESTE</p>

          <strong>Descrição</strong>
          <p>TESTE</p>

          <strong>Valor</strong>
          <p>aTETSTE</p>

          <button type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
        </li>

        <li>
          <strong>CASO 1</strong>
          <p>TESTE</p>

          <strong>Descrição</strong>
          <p>TESTE</p>

          <strong>Valor</strong>
          <p>aTETSTE</p>

          <button type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
        </li>

        <li>
          <strong>CASO 1</strong>
          <p>TESTE</p>

          <strong>Descrição</strong>
          <p>TESTE</p>

          <strong>Valor</strong>
          <p>aTETSTE</p>

          <button type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
        </li>

        <li>
          <strong>CASO 1</strong>
          <p>TESTE</p>

          <strong>Descrição</strong>
          <p>TESTE</p>

          <strong>Valor</strong>
          <p>aTETSTE</p>

          <button type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
        </li>

        <li>
          <strong>CASO 1</strong>
          <p>TESTE</p>

          <strong>Descrição</strong>
          <p>TESTE</p>

          <strong>Valor</strong>
          <p>aTETSTE</p>

          <button type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
        </li>
      </ul>
    </div>
  );
}

