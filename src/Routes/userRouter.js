import {Router} from 'express';

const router = Router();

router.get('/mostrarUsuarios', (req, res) => res.send(usuarios));
router.post('/nuevoUsuario', (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const user = { id, nombre};

    if(id === undefined || nombre === undefined){
        return res.status(400).send(); 
    }

    usuarios.push(user);

    res.send();
})

router.put('/modificar/:usuarioId', (req, res) => {
    const userId = req.params.usuarioId;
    const nuevoNombre = req.body.nombre;

    if(nuevoNombre === undefined){
        return res.status(400).send();
    }

    const user = usuarios.find(({id}) => id === parseInt(userId, 10));

    if(user === undefined){
        return res.status(404).send();
    };

    user.nombre = nuevoNombre;
    res.send();
})

router.delete('/borrar/:usuarioId', (req, res) => {
    const userId = req.params.usuarioId;
    const user = usuarios.find(({id}) => id === parseInt(userId, 10));

    if(user === undefined){
        return res.status(404).send();
    }

    const userIndex = usuarios.findIndex(({id}) => id === parseInt(userId, 10));
    usuarios.splice(userIndex, 1);

    res.send();
})

export default router;