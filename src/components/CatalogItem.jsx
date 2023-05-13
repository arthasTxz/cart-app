import React from 'react'

const CartItem = (props) => {

  function handleSubmit(){
    props.enviarDatos(props.name, props.description, props.price)
  }
  
  return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">$ {props.price}</p>
            <button 
            className="btn btn-primary"
            onClick={handleSubmit}>Agregar</button>
        </div>
    </div>
  )
}

export default CartItem