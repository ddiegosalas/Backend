import { productModel } from "../models/producto.model.js";

class ProductManager{
    async create(instrumento, marca, modelo, precio, codigo, imagen){
        const producto = await productModel.create({
            instrumento,
            marca,
            modelo,
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