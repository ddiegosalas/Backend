const socket = io();

const productosContainer = document.getElementById('productos');

socket.on('productos', (products) => {
    const titulos = products.map((productos)=> productos.titulo);

    productosContainer.innerHTML = titulos.join('<br></br>');
});

socket.on('actualizarProductos', (products) => {
    const titulos = products.map((productos)=> productos.titulo);

    productosContainer.innerHTML = titulos.join('<br></br>');
})

console.log ("hola!");