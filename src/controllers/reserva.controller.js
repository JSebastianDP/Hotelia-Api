const Habitacion = require('../model/Reserva');

exports.obtener=async(req,res) => {
    try {
        const Reserva= await Reserva.find();
        res.status(200).json(reserva);
    } catch (error) {
        res.status(500).json(error);        
    }
}