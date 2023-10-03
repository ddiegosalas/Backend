import mongoose from "mongoose";

const productCollection = "productos";

const productSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    codigo: {
        type: Number,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
});

const productModel = mongoose.model(productCollection, productSchema);
export {productModel};