const fs = require('fs');
const archivo = './Productos.json';

class ProductManager {
    static id = 1;

    async crearProductos (titulo, descripcion, precio, rutaImagen, sku, stock) {
        const productos = {
            id: ProductManager.id++,
            titulo,
            descripcion,
            precio,
            rutaImagen,
            sku,
            stock,
        };
        try{
            if(!fs.existsSync(archivo)){
                const listaVacia = [];
                listaVacia.push(productos);
                
                await fs.promises.writeFile(
                    archivo,
                    JSON.stringify(listaVacia, null, '\t')
                );
            } else {
                const contenidoObj = await this.getProducts();
                contenidoObj.push(productos);

                await fs.promises.writeFile(
                    archivo,
                    JSON.stringify(contenidoObj, null, '\t')
                );
            }
        } catch (error){
            console.log(error);
        }
    }

    async getProducts(){
        const contenido = await fs.promises.readFile(archivo, 'utf-8');
        const contenidoObj = JSON.parse(contenido);
        return contenidoObj;
    }

    async eliminarProducto(id){
        const productos = await this.getProducts();
        const productosSinId = productos.filter((productos)=> productos.id != id);
        await fs.promises.writeFile(
            archivo,
            JSON.stringify(productosSinId, null, '\t')
        );
    }

    async buscarPorId(id){
        const productos = await this.getProducts();
        const productoBuscado = productos.find((productos)=> productos.id == id);
        if(productoBuscado === undefined){
            console.log('El ID que buscas no existe.')
        }else{
            return productoBuscado;
        }
    }
}

module.exports = ProductManager;

const funcionAsync = async () => {
    const productManager = new ProductManager();
    await productManager.crearProductos('Queso', 'Brie', 500, 'urlImagen', 12, 10);
    await productManager.crearProductos('Fideos', 'Lucchetti', 300, 'urlImagen', 9, 20);
    await productManager.crearProductos('Cerveza', 'Imperial', 600, 'urlImagen', 4, 12);   
    
    //ELIMINAR PRODUCTO POR ID
    await productManager.eliminarProducto(1);

    //LISTA DE PRODUCTOS
    const listaProductos = productManager
    .getProducts()
    .then((listaProductos) => console.log(listaProductos));

    //BUSCAR PRODUCTO POR ID
    const buscadoPorId = productManager
    .buscarPorId(2)
    .then((buscadoPorId) => console.log(buscadoPorId));

};

funcionAsync();