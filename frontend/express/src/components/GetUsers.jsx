import { useEffect, useState } from "react";

export default function GetUsers() {

    const [user, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/usuarios/")
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err))
    }, []);

  return (
    <div className="w-full max-w-[1280px] flex flex-col justify-center gap-4 flex-wrap">
      <h2 className="font-bold text-lg">Lista de usuarios</h2>
      <div className="container flex gap-3 flex-wrap">
        {
          user.map((u) => {
            return (
              <article key={u.id}>
                <ul>
                  <li>Nombre: {u.nombre}</li>
                  <li>Apellido: {u.apellido}</li>
                  <li>Edad: {u.edad}</li>
                </ul>
              </article>
            )
          })
        }
      </div>
    </div>
  )
}
