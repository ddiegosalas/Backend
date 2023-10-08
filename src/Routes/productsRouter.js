import { Router } from "express";
import { uploader } from "../middlewares/multer.js";
import ProductManager from "../dao/db/ProductManager.js";

const router = Router();
const productManager = new ProductManager();

router.post('/', uploader.single('file'), async (req, res) =>{
    const {instrumento, marca, modelo, precio, codigo} = req.body;
    const imagen = req.file.originalname;
    const producto = await productManager.create(instrumento, marca, modelo, precio, codigo, imagen);
    res.status(200).send(producto);
});

export default router;