const{Schema, model} = require("mongoose");
const reservaSchema = new Schema({
    fentrada: Date,
    fsalida: Date,
    cantidadNoches: Number,
    freserva: Date,
    totalReserva:Number,
    user:[{
        type:Schema.Types.Number,
        ref:'Users'
    }],
    habitaciones:[{
    type: Schema.Types.Number,
    ref: 'Habitacion'
    }]

})


module.exports= model("Reservas",reservaSchema);