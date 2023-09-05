import express from 'express';
import productsRouter from './routes/productsRouter.js';
import cartRouter from './routes/cartRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8181, () => console.log('Diego'));

app.use('/api/productos', productsRouter);
app.use('/api/carrito', cartRouter);
