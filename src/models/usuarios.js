const usuarios = [];

const addUser = (id, nombre, apellido, pass) => {
    const usuario = {
        id,
        nombre,
        apellido,
        pass,
    };

    usuarios.push(usuario);
};

const getUser = (userId) => usuarios.find(({id}) => id === userId);

export {addUser, getUser};