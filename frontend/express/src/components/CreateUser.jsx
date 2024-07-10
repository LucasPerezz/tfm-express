import { useEffect, useState } from "react";

export default function CreateUser() {

    const [user, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/usuarios/")
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err))
    }, []);

  return (
    <div>
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
  )
}
