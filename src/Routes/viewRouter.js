import { Router } from "express";
import ProductManager from "../dao/db/ProductManager.js";
import { productModel } from "../dao/models/producto.model.js";

const router = Router();
const productManager = new ProductManager();

router.get('/cargar', async (req, res) => {
    const productos = await productManager.getAll();
    res.render('agregarProductos', {productos})
});

router.get('/productos/:pageId', async (req, res) => {
    const pageId = parseInt(req.params.pageId);
    const result = await productModel.paginate(
        {},
        {
            page: pageId,
            limit: 3,
            lean: true,
        }
    );

    const prevLink = result.hasPrevPage ? `http://localhost:2020/productos/${result.prevPage}` : false;
    const nextLink = result.hasNextPage ? `http://localhost:2020/productos/${result.nextPage}` : false;

    res.render('productos', {productos: result.docs, prevLink, nextLink});
});

router.get('/chat', (req, res) => res.render('chat', {}));

export default router;