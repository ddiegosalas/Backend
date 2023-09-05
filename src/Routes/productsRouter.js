import { Router } from "express";

const router = Router();
export const productos = [];
let idBase = 1;


router.get('/', (req, res) => res.send(productos));

router.get('/:pid',(req, res) => {
    const productoId = parseInt(req.params.pid, 10);
    const producto = productos.find(({id}) => id === productoId);
    
    if(producto === undefined) {
        return res.status(404).send();
    }
    
    res.send(producto);
});

router.post('/nuevo', (req, res) => {
    const id = idBase++;
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const status = true;
    const stock = req.body.stock;
    const codigo = req.body.codigo;

    const producto = { id, titulo, descripcion, precio, status, stock, codigo};

    if(titulo === undefined || codigo === undefined){
        return res.status(400).send(); 
    }
    
    if(descripcion === undefined){
        producto.descripcion = " ";
    }

    if(precio === undefined){
        producto.precio = 0;
    }

    if(stock === undefined){
        producto.stock = 0;
    }

    productos.push(producto);

    res.send();
})

router.put('/modificar/:pid', (req, res) => {
    const productoId = parseInt(req.params.pid, 10);
    const producto = productos.find(({id}) => id === productoId);

    if(producto === undefined) {
        return res.status(404).send();
    }

    const nuevotitulo = req.body.titulo;
    const nuevadescripcion = req.body.descripcion;
    const nuevoprecio = req.body.precio;
    const nuevostock = req.body.stock;
    const nuevocodigo = req.body.codigo;

    if(nuevotitulo != undefined){
        producto.titulo = nuevotitulo;
    }
    if(nuevadescripcion!= undefined){
        producto.descripcion = nuevadescripcion;
    }
    if(nuevoprecio != undefined){
        producto.precio = nuevoprecio;
    }
    if(nuevostock != undefined){
        producto.stock = nuevostock;
    }

    if(nuevocodigo != undefined){
        producto.codigo = nuevocodigo;
    }

    res.send();
})

router.delete('/borrar/:pid', (req, res) => {
    const productoId = parseInt(req.params.pid, 10);
    const productoIndex = productos.findIndex(({id}) => id === productoId);

    if(productoIndex === undefined){
        return res.status(404).send();
    }

    productos.splice(productoIndex, 1);

    res.send(); 
})

export default router;