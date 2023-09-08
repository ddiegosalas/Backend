import { Router } from "express";
import { productos } from './productsRouter.js';

const router = Router();

router.get('/productos', (req, res) => {
    res.render('home', {
        productos,
    });
});

router.get('/productosTiempoReal', (req, res) => {
    res.render('realTimeProducts', {
        productos,
    });
});

router.get('/agregarProducto', (req, res) => {
    res.render('addProduct',{
        productos,
    });
});

export default router;