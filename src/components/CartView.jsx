import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CartView = (props) => {

    const navigate = useNavigate()

    const enviarDatos = (name)=> {
        props.delete(name)
    }

    const onCatalog = () => {
        navigate('/catalog')
    }

    useEffect(()=> {
        sessionStorage.setItem('cart', JSON.stringify(props.items))
    }, [props.items])

  return (
    <>
    <h3>Carro de compras</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    { props.items.map( item => {
                        return(<tr >
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>1234</td>
                            <td><button className='btn btn-danger'
                            onClick={() => enviarDatos(item.product.name)}>eliminar</button></td>
                        </tr>)
                    })}
                    
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold"></td>
                    </tr>
                </tfoot>
            </table>
            <button
            className='btn btn-success'
            onClick={onCatalog}>Keep Shopping</button>
            </>
  )
}

export default CartView