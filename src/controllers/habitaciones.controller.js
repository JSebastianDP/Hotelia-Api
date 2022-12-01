const Habitacion = require('../model/Habitacion');

exports.obtener=async(req,res) => {
    try {
        const habitaciones= await Habitacion.find();
        res.status(200).json(habitaciones);
    } catch (error) {
        res.status(500).json(error);        
    }
}
    exports.obtenerId = async (req, res) => {
        try {
            const id=req.params.id;
            const habitaciones = await Habitacion.findById(id).populate('reserva', {
                "_id":1,
                "fechaentrada":1,
                "cantidadNoches":1,
                "freserva": 1,
                "totalReserva":1            
            })
        } catch (error) {
            res.status(500).json(error)
        }
    
}
exports.add = async (req, res) => {
    try {
        const newHabitacion = new Habitacion(req.body, req.file)
        if(req.file){
            const {filename}= req.file;
            newHabitacion.setImg(filename);
        }
        await newHabitacion.save
        res.status(200).json(newHabitacion);
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.edit = async (req, res) => {
    try {
        const id = req.params.id;
        const newHabitacion = new Habitacion(req.body, req.file)
        console.log(req.file);

        if(req.file){
            const {filename} = req.file;
            newHabitacion.setImg(filename);
            console.log("Si hay imagen");
        }
        else{
            console.log("No hay imagen")
        }
        const cambioHabitacion = await Habitacion.findByIdAndUpdate(id, newHabitacion);
        res.json({msj: "Habitación actualizada exitosamente"})
    } catch (error) {
        res.status(500).json(error);
    }
}