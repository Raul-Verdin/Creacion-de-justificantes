// src/components/Formulario.js
import React, { useState } from 'react';
import axios from 'axios';

// Usar variable de entorno para la URL base
const API_URL = process.env.REACT_APP_API_URL;

const Formulario = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    grupo: '',
    motivo: '',
    fecha_ausencia: ''
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Usamos API_URL aquí
      const res = await axios.post(`${API_URL}/solicitudes`, formulario);
      setMensaje('✅ Justificante registrado correctamente');
      setFormulario({ nombre: '', grupo: '', motivo: '', fecha_ausencia: '' });
    } catch (error) {
      setMensaje('❌ Error al registrar la solicitud');
    }
  };

  return (
    <div>
      <h2>Registrar Justificante</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={handleChange} required />
        <input name="grupo" placeholder="Grupo" value={formulario.grupo} onChange={handleChange} required />
        <textarea name="motivo" placeholder="Motivo" value={formulario.motivo} onChange={handleChange} required></textarea>
        <input type="date" name="fecha_ausencia" value={formulario.fecha_ausencia} onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Formulario;
