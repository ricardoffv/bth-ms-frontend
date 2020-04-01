import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Login() {

  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Erro no cadastro!');
    }

  }

  return (
    <div className="logon-container">
        <section class="form">
            <img src={logoImg} alt="header" />
            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>

                <input 
                  placeholder="Insira seu logon"
                  value={id}
                  onChange={e => setId(e.target.value)} 
                />
                <button className="button" type="submit">Entrar</button>
                <Link to="/register">
                    <FiLogIn size={16} color="#E02041" />
                    Não tenho cadastro
                </Link>
            </form>


        </section>

        <img src={heroesImg} alt="background" />
    </div>
  );
}

