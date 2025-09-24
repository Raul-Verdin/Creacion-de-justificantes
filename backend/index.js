const express = require('express');
const cors = require('cors');
const path = require('path');
const solicitudesRoutes = require('./routes/solicitudes');
const app = express();

app.use(cors());
app.use(express.json());

// Rutas API
app.use('/solicitudes', solicitudesRoutes);

// Levantar servidor
app.listen(4000, () => {
  console.log('Servidor backend corriendo en http://localhost:4000');
});

app.use(express.static('public'));
