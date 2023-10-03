import { productModel } from "../models/producto.model.js";

class ProductManager{
    async create(titulo, descripcion, precio, codigo, imagen){
        const producto = await productModel.create({
            titulo,
            descripcion,
            precio,
            codigo,
            imagen,
        });

        return producto;
    };

    async getAll(){
        const productos = await productModel.find().lean();
        return productos;
    };
};

export default ProductManager;