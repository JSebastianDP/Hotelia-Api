const{Router} = require("express");
const multer = require("multer");
const rutasHabitacion = Router();
const crtHab =require("../controllers/habitaciones.controller");
const fecha= Date.now();

const rutaStorage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./public/upload/');
    },
    filename:function(req,file,callback){
        callback(null,fecha+"_"+file.originalname);
    }
});
const upload = multer({storage:rutaStorage});

rutasHabitacion.get('/',crtHab.obtener);
rutasHabitacion.get('/:id', crtHab.obtenerId);
rutasHabitacion.post('/', upload.single('img'), crtHab.add);
//rutasHabitacion.put('/:id', crtHab.edit);

module.exports= rutasHabitacion;