import express from 'express';
import handlebars from 'express-handlebars';
import viewRouter from './routes/viewRouter.js';
import productsRouter from './routes/productsRouter.js';
import cartRouter from './routes/cartRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');

app.listen(8181, () => console.log('Diego'));

app.use('/api/productos', productsRouter);
app.use('/api/carrito', cartRouter);
app.use('/', viewRouter);