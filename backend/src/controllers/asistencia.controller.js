// Importa el modelo de datos 'User'
import Asistencia from '../models/asistencia.model.js';
import asistencia from '../models/asistencia.model.js';
import User from '../models/user.model.js';

export async function updateAsistencia(req, res) {
    try {
        const listadoAsistencia = req.body.listado;
        const idAsamblea = req.body.idAsamblea;
        
        if(!listadoAsistencia){
        res.status(400).json({
            message: "El parametro 'listado' es requerido y debe ser array",
            data: null
            });
            return;
        }

        if(!idAsamblea){
            res.status(405).json({
                message: "El parametro 'idAsamblea' es requerido",
                data: null
            });
            return;
        }

        const users = await User.find({ rut: { $in: listadoAsistencia } });

        if(users.length < listadoAsistencia.lenght){
            res.status(405).json({
                message: "Algunos usuarios no fueron encontrados",
                data: null
            });
            return;
        }

        const asistencia = await Asistencia.findOne({ id: idAsamblea });

        if(!asistencia){
            res.status(405).json({
                message: "Asamblea no encontrada",
                data: null
            });
            return;
        }

        const updatedAsamblea = await Asistencia.findOneAndUpdate(
            { id: idAsamblea },
            { $addToSet: { rut: { $each: listadoAsistencia } } },
            { new: true }
        );

        res.status(200).json({
            message: "Usuario registrado en asamblea correctamente!",
            data: updatedAsamblea
        });

    } catch (error) {
        console.log("Error en user.controller.js -> updateAsistencia(): ", error);
        res.status(500).json({ message: error.message });
    }
}