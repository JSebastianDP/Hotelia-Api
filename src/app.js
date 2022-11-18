const exprees = require('expreess');
const conexionBD = require('./db');

const app = exprees();

require('dotenv').config();

//Conexion a la BD
conexionBD();

//Configuraciones 

app.set("name", "api-hotelia");
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || 'localhost');