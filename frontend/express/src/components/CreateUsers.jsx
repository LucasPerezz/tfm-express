import { useState } from "react";

export default function CreateUsers() {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');


    const postUser = (nombre, apellido, edad) => {

        const user = {
            nombre, apellido, edad
        };

         fetch("http://localhost:3000/usuarios/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then((data) => console.log("Se creo el usuario", data))
        .catch((err) => console.log(err))
    };

  return (
    <>
    <form className="w-full max-w-[400px] mx-auto flex flex-col gap-2">
    <h2 className="font-bold text-xl">Crear Usuario</h2>
      <label className="input input-bordered flex items-center gap-2">
        Nombre
        <input type="text" className="grow" placeholder="Lucas" onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Apellido
        <input type="text" className="grow" placeholder="Perez" onChange={(e) => setApellido(e.target.value)} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Edad
        <input type="number" className="grow" placeholder="23" onChange={(e) => setEdad(e.target.value)} />
      </label>
    </form>
      <button className="btn btn-outline btn-primary" onClick={postUser(nombre, apellido, edad)}>Crear Usuario</button>
      </>
  );
}
