import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const asistenciaSchema = new mongoose.Schema({
    rut: {
        type: Array,
        required: false,
    },
    id: {
        type: Array,
        required: true,
    },
});

const Asistencia = model("Asistencia", asistenciaSchema);

export default Asistencia;