// src/App.js
import React, { useState } from 'react';
import Formulario from './components/Formulario';
import ListaSolicitudes from './components/ListaSolicitudes';
import './App.css';

function App() {
  const [vista, setVista] = useState('formulario');

  return (
    <div>
      <nav>
        <ul>
          <li><a href="#" onClick={() => setVista('formulario')}>Registrar</a></li>
          <li><a href="#" onClick={() => setVista('lista')}>Ver solicitudes</a></li>
        </ul>
      </nav>

      <main>
        {vista === 'formulario' && <Formulario />}
        {vista === 'lista' && <ListaSolicitudes />}
      </main>
    </div>
  );
}

export default App;
