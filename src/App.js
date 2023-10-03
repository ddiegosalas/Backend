import express from 'express';
import handlebars from 'express-handlebars';
import viewRouter from './routes/viewRouter.js';
import productsRouter from './routes/productsRouter.js';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import { mensajeModel } from './dao/models/mensajes.model.js';

mongoose.connect('mongodb+srv://salasdiego40765:V2yoUR0q3iXEIkAO@cluster0.qdhald9.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp');

const app = express();
const httpServer = app.listen(2020, () => console.log('Diego'));
const socketServer = new Server(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');

app.use('/static', express.static('./public'));
app.use(viewRouter);
app.use('/nuevo',productsRouter);

socketServer.on('connection', (socket) => { 
    console.log("Se conectò", socket.id);
    socket.on('mensaje', async (data) => { 
        await mensajeModel.create(data);
        const mensajes = await  mensajeModel.find().lean();
        socketServer.emit('nuevo_mensaje', mensajes);
    });
});