import { Router } from "express";
import ProductManager from "../dao/db/ProductManager.js";

const router = Router();
const productManager = new ProductManager();

router.get('/cargar', async (req, res) => {
    const productos = await productManager.getAll();
    res.render('productos', {productos})
});

router.get('/chat', (req, res) => res.render('chat', {}));

export default router;