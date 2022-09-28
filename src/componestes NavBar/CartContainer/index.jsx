import React from 'react'
import { useContext } from 'react';

const Cart = () => {
    
    const {cart, removeItem, clearCart} = useContext(shop)
    console.log(cart)
    
    return (
        <div>Cart</div>
    )
}

export default Cart;