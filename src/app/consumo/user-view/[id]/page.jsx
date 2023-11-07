import React from 'react'

export default async function page({params}) {

    const id = params.id;
    const response = await fetch(`http://localhost:3000/dados/usuarios/${id}`);
    const user = await response.json();

    return (
        <div>
                <ul key={user.id} >
                    <li>Nome: {user.name} </li>
                    <li>Email: {user.email} </li>
                    <li>Telefone: {user.phone} </li>
                </ul>
        </div>
    )
}