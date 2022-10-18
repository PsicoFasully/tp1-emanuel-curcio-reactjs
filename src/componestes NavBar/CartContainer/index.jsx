import React from 'react'
import { useContext } from 'react';
import {shop} from "../../context/ShopProvider"
const Cart = () => {
    
    const {cart, removeItem, clearCart} = useContext(shop)
    console.log(cart)
    
    return (
        <div>Cart</div>
    )
}

export default Cart;