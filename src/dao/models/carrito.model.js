import mongoose from "mongoose";

const carritoCollection = "carrito";

const carritoSchema = new mongoose.Schema({
    instrumento: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
});

const carritoModel = mongoose.model(carritoCollection, carritoSchema);
export {carritoModel};