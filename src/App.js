const express = require('express');
const ProductManager = require('./ProductManager');
const productManager = new ProductManager();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/productos', async (req, res)=>{
    const limit = req.query.limit;
    const productos = await productManager.getProducts();

    if(limit){
        return res.send(productos.slice(0, limit));
    }

    res.send(productos);
});

app.get('/productos/:pid', async (req, res) => {
    const productoId = parseInt(req.params.productoId, 10);
    const producto = await productManager.buscarPorId(productoId);

    res.send(producto);
}); 