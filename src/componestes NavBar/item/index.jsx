import React from 'react'


const Item = ({product}) => {
  return (
    <div>
      <img src={product.image} width={250} alt="productos"/>
    <h1>{product.name}</h1>
    </div>
  )
}

export default Item