// app.js
const express = require('express');
const cors = require('cors');
const solicitudesRoutes = require('./routes/solicitudes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/solicitudes', solicitudesRoutes);

module.exports = app;
