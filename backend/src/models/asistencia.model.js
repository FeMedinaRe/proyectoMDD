import mongoose from "mongoose";

const asistencia = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    asistido: {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model('Asistencia', asistencia);

