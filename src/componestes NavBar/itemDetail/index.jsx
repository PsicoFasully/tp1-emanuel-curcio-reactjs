import React from 'react'
import ItemCount from '../ItemCount'

const ItemDetail = ({ product }) => {
    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt="product-detail" width={250} />
            
            <ItemCount />
        </div>
    )
}

export default ItemDetail