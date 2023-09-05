import { Router } from 'express';
import { productos } from './productsRouter.js';

const router = Router();
let idBase = 1;
const carrito = [];

router.get('/', (req, res) => res.send(carrito));

router.get('/:cid',(req, res) => {
    const carritoId = parseInt(req.params.cid, 10);
    const carritoBuscado = carrito.find(({id}) => id === carritoId);
    
    if(carritoBuscado === undefined) {
        return res.status(404).send();
    }
    
    res.send(carritoBuscado.producto);
});

router.post('/nuevo', (req, res) => {
    const id = idBase++;
    const producto = [];
    const agregar = { id, producto};

    carrito.push(agregar);

    res.send();
})

router.post('/:cid/agregarProducto/:pid', (req, res) => {
    const cantidad = 1;
    const cartId = parseInt(req.params.cid, 10);
    const cart = productos.find(({id}) => id === cartId);

    if(cart === undefined) {
        return res.status(400).send("El carrito no existe");
    }

    const productoId = parseInt(req.params.pid, 10);
    const productoAgregar = productos.find(({id}) => id === productoId);

    if(productoAgregar === undefined) {
        return res.status(400).send("El producto no existe");
    }

    const carritoIndex = carrito.findIndex(({id}) => id === cartId);

    if(carrito[carritoIndex].producto.find(({id}) => id === productoAgregar.id)){
        const indexP = carrito[carritoIndex].producto.findIndex(({id}) => id === productoAgregar.id);
        carrito[carritoIndex].producto[indexP].cantidad += 1;
    }else{
        carrito[carritoIndex].producto.push({id: productoAgregar.id, titulo: productoAgregar.titulo, cantidad: 1});
    }

    res.send();
})

router.delete('/borrar/:cid', (req, res) => {
    const carritoId = parseInt(req.params.cid, 10);
    const carritoIndex = carrito.findIndex(({id}) => id === carritoId);

    if(carritoIndex === undefined){
        return res.status(404).send();
    }

    carrito.splice(carritoIndex, 1);

    res.send(); 
})

router.delete('/borrarTodo', (req, res) => {
    carrito.splice(0, carrito.length);

    res.send(); 
})

export default router;