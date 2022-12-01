const express = require('express');
const conexionBD = require('./db');
const rutasHab = require('./routes/habitacion.routes');
const rutasUs = require('./routes/user.routes');
const rutasRes = require('./routes/reserva.routes');
const app = express();

require('dotenv').config();

//Conexion a la BD
conexionBD();

//Configuraciones 

app.set("name", "api-hotelia");
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || 'localhost');

//Midleware
app.use(express.json());

//Llamado de rutas
app.use(express.static('public'));
app.use('/public', express.static('public/upload'));

app.use('/habitaciones', rutasHab);
app.use('/users', rutasUs);
app.use('/reservas', rutasRes);

module.exports = app;