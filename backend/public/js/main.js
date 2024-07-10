
const postUser = () => {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    
    const usuario = {
        nombre,
        apellido,
        edad
    };

    fetch('http://localhost:3000/usuarios/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario)
    })
    .then(data => {
        console.log('Usuario nuevo', data);
    })
    .catch(error => {
        console.error('', error);
    });
    
};














