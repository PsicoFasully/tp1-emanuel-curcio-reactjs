import React from 'react'
import ItemCount from '../ItemCount'


export const Ad = ({children}) => {

    const agregarAlCarrito = (cantidad) =>{
        console.log(`se agrego al carrito la "${cantidad}"al carrito`)
    }

    return (
        <div>

        {children}
        <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/>
        </div>
    )
}

export default Ad