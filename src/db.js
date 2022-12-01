const mongoose = require('mongoose');
 
const conexionBD = async() => {
    const url =`mongodb://${process.env.USER}:${process.env.PASSWORD}@ac-whxzudb-shard-00-00.6qzp3xw.mongodb.net:27017,ac-whxzudb-shard-00-01.6qzp3xw.mongodb.net:27017,ac-whxzudb-shard-00-02.6qzp3xw.mongodb.net:27017/${process.env.DBNAME}?ssl=true&replicaSet=atlas-xqtdof-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        const DB=await mongoose.connect(url);
        console.log("Conexion exitosa",DB.connection.name);
    } catch (error) {
        console.log(error);
    }
}
    module.exports = conexionBD;
