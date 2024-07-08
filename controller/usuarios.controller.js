let users = [
    {
        id: 1,
        nombre: "Lucas",
        apellido: "Perez",
        edad: 23
    },
    {
        id: 2,
        nombre: "Martin",
        apellido: "Ku",
        edad: 26
    }
]

export const getUsers = (_req, res) => {
    if(!users) return res.json({msg: "No existen usuarios"})
    else return res.json(users);
}

export const getUserById = (req, res) => {
    const {id} = req.params;
    const search = users.find(u => u.id == id);
    if(!search) return res.json({msg: "No se ha encontrado el usuario"});
    return res.json(search);
}

export const postUser = (req, res) => {
    const {nombre, apellido, edad} = req.body;
    const lastId = users.length + 1;

    const user = {
        id: lastId,
        nombre,
        apellido,
        edad
    }

    if(!validate(user)) return res.json({msg: "Faltan campos"});

    users.push(user);

    res.json({msg: "Se ha agregado un usuario", usuario: user});
}

export const deleteAllUsers = (_req, res) => {
    users = [];
    res.json({msg: "Se ha eliminado todos los usuarios"});
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, edad } = req.body; 

    const index = users.findIndex(u => u.id == id);

    if (index === -1) {
        return res.json({ msg: "No existe un usuario con el ID ingresado" });
    }

    const user = {
        id,
        nombre,
        apellido,
        edad
    }

    if(!validate(user)) return res.json({msg: "Faltan campos"});

    users[index].id = id;
    users[index].nombre = nombre;
    users[index].apellido = apellido;
    users[index].edad = edad;

    return res.json({ msg: "Se ha actualizado el usuario", user: users[index] });
}

export const deleteUserById = (req, res) => {
    const { id } = req.params;
    const search = users.findIndex(u => u.id == id);
    if(search === -1) return res.json({msg: "No existe el usuario"});

    users = users.filter(u => u.id != id);
    res.json({msg: "Usuario eliminado"});
}

const validate = (user) => {
    const {nombre, apellido, edad} = user;
    if(!nombre || !apellido || !edad) {
        return 0;
    }
    return 1;
}





