import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productCollection = "productos";

const productSchema = new mongoose.Schema({
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

productSchema.plugin(mongoosePaginate);
const productModel = mongoose.model(productCollection, productSchema);
export {productModel};