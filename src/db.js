const mongoose = require('mongoose');
 
const conexionBD = async() => {
    const url = `mongodb+srv://${process.env.user}:${process.env.PASSWORD}@cluster0.6qzp3xw.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
    try {
        const DB=await mongoose.connect(url);
        console.log("Conexion exitosa",DB.connection.name);
    } catch (error) {
        console.log(error);
    }
    module.exports = conexionBD;
}