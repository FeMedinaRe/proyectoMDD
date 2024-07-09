import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const asistenciaSchema = new mongoose.Schema({
    rut: {
        type: String,
        required: true,
    },
    asistido: {
        type: Boolean,
        required: true,
    },
});

const asistencia = model("Asistencia", asistenciaSchema);

export default asistencia;