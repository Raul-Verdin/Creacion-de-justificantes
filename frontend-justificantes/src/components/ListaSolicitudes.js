// src/components/ListaSolicitudes.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const ListaSolicitudes = () => {
  const [solicitudes, setSolicitudes] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const obtenerSolicitudes = async () => {
      try {
        const res = await axios.get(`${API_URL}/solicitudes`);
        setSolicitudes(res.data);
      } catch (error) {
        console.error('Error al obtener solicitudes:', error);
      }
    };

    obtenerSolicitudes();
  }, []);

  // Filtrar solicitudes según el texto de búsqueda
  const solicitudesFiltradas = solicitudes.filter((solicitud) => {
  const textoBusqueda = busqueda.toLowerCase();

    return (
      solicitud.id.toString().includes(busqueda) || // ID como texto
      solicitud.nombre.toLowerCase().includes(textoBusqueda) ||
      solicitud.grupo.toLowerCase().includes(textoBusqueda) ||
      solicitud.motivo.toLowerCase().includes(textoBusqueda)
    );
  });

  return (
    <div>
      <h2>Lista de Justificantes</h2>

      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar justificantes..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Grupo</th>
            <th>Motivo</th>
            <th>Fecha de Ausencia</th>
            <th>Fecha de Solicitud</th>
          </tr>
        </thead>
        <tbody>
          {solicitudesFiltradas.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.nombre}</td>
              <td>{s.grupo}</td>
              <td>{s.motivo}</td>
              <td>{s.fecha_ausencia}</td>
              <td>{new Date(s.fecha_solicitud).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaSolicitudes;
