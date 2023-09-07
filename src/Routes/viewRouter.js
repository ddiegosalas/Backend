import { Router } from "express";
import { productos } from './productsRouter.js';

const router = Router();

router.get('/productos', (req, res) => {
    res.render('home', {
        productos,
        style: 'index.css'
    });
});

export default router;