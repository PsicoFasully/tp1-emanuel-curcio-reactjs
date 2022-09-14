import React from 'react'
import { useNavigate } from 'react-router-dom'


const Item = ({product}) => {
  const navigate = useNavigate();

  const handleNavigate = ()=>{
    navigate(`/detail/${product.id}`)
  }
  return (
    <div onClick={handleNavigate}>
      <img src={product.image} width={250} alt="productos"/>
    <h1>{product.name}</h1>
    </div>
  )
}

export default Item