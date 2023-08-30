import { Express } from 'express';
import userRouter from './Routes/userRouter.js';
import productsRouter from './Routes/productsRouter.js';

const express = require('express');
const ProductManager = require('./ProductManager.js');
const productManager = new ProductManager();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8181, () => console.log('Diego'));

app.get('/productos', async (req, res)=>{
    const limit = req.query.limit;
    const productos = await productManager.getProducts();

    if(limit){
        return res.send(productos.slice(0, limit));
    }

    res.send(productos);
});

app.get('/productos/:pid', async (req, res) => {
    const productoId = parseInt(req.params.pid, 10);
    const producto = await productManager.buscarPorId(productoId);

    if(producto === undefined) {
        return res.status(404).send();
    }

    res.send(producto);
});

const usuarios = [];

app.use('/usuario', userRouter);
