import express from 'express';
import handlebars from 'express-handlebars';
import viewRouter from './routes/viewRouter.js';
import productsRouter from './routes/productsRouter.js';
import cartRouter from './routes/cartRouter.js';
import { Server } from 'socket.io';
import { productos } from './routes/productsRouter.js';

const app = express();
const httpServer = app.listen(8181, () => console.log('Diego'));
const socketServer = new Server(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');
app.use(express.static('./src/public'));

app.use('/api/productos', productsRouter);
app.use('/api/carrito', cartRouter);
app.use('/', viewRouter);

app.use((req, res, next) => {
    req.context = {socketServer};
    next();
});

socketServer.on('connection', (socket) => {
    console.log(`Se conecto ${socket.id}`);
    socket.emit('productos', productos)
});