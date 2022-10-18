import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../item/styles.scss"


const Item = ({product}) => {
  const navigate = useNavigate();

  const handleNavigate = ()=>{
    navigate(`/detail/${product.id}`)
  }
  return (
    <div className='card-container' onClick={handleNavigate}>
      <img className='card-img' src={product.image} width={250} alt="productos"/>
    <h1 className='card-title' >{product.name}</h1>
    </div>
  )
}

export default Item