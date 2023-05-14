import React from 'react'
import { products } from '../data/products'
import { useNavigate } from 'react-router-dom'

const CartItem = ({enviarDatos, name, description, price}) => {

  const navigate = useNavigate()

  const onAddProduct = (product) => {
    enviarDatos(product)
    navigate('/cart')
  }
  
  return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">$ {price}</p>
            <button 
            className="btn btn-primary"
            onClick={() => onAddProduct({name, description, price})}>Agregar</button>
        </div>
    </div>
  )
}

export default CartItem