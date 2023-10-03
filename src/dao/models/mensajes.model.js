import mongoose from "mongoose";

const mensajeCollection = "mensaje";

const mensajeSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    mensaje: {
        type: String,
        required: true
    },
});

const mensajeModel = mongoose.model(mensajeCollection, mensajeSchema);
export {mensajeModel};