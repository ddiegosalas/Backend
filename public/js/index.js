const socket = io();

let usuario = "";

swal.fire({
    title: 'Ingresa nombre',
    input: 'text',
    confirmButtonText: 'Ingresar',
}).then((result) => {
    usuario = result.value;
});

const caja = document.getElementById('caja');
const contenido = document.getElementById('contenido');

caja.addEventListener('change', (e) => {
    socket.emit('mensaje', {
        nombre: usuario,
        mensaje: e.target.value,
        fecha: Math.floor(new Date().getTime()/ 1000),
    });
});

socket.on('nuevo_mensaje', (data) => {
    const mensajes = data.map(({nombre, mensaje}) => {
        return `<p>${nombre} dijo: ${mensaje}</p>`;
    });

    contenido.innerHTML = mensajes.join('');
});