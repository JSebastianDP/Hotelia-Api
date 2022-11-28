const{Schema, model} = require("mongoose");
const usersSchema = new Schema({


    _id:Number,
    tipoDoc:String,
    nombre:String,
    apellido: String,
    fechaNacimiento: Date,
    Genero: String,
    email: {type:String, required:true, unique:true},
    telefono:Number,
    paisOrigen:String,
    password:String,
    tipoUser:String,
    img:String,
    reserva:[{
        type:Schema.Types.Number,
        ref:'Reservas'
    }],
})


module.exports= ("Users",usersSchema);