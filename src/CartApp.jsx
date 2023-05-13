import React, { useState } from "react";
import CatalogView from "./components/CatalogView";
import CartView from "./components/CartView";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || []
console.log(initialCartItems)

export function CartApp(){

    const [cartItems, setCartItems] = useState(initialCartItems)
    

    function handleAddToCart(name, description, price){
        setCartItems((oldList)=> {
            const objectProduct = {
                name: name,
                description: description,
                price: price
            }

            let isOpen = oldList.findIndex(element => element.product.name === objectProduct.name)
            console.log(isOpen)
            if(isOpen<0){
                const newArray = [
                ...oldList, {
                    product: objectProduct,
                    quantity: 1,
                    total: objectProduct.price * 1
                }
            ]
            return newArray
            }else{
                let newArray = [...oldList]
                newArray[isOpen].quantity = oldList[isOpen].quantity + 1
                newArray[isOpen].total = oldList[isOpen].quantity * oldList[isOpen].product.price
                return newArray
            }
        }
        )
    }

    function handleDelete(name){
        setCartItems((oldList) => {
            return oldList.filter(element => {
                if(element.product.name !== name){
                    return element
                }
            })
        })

    }

    console.log(cartItems)

    return(
    <>
     <div className="container">
     <h3>Cart App</h3>
        <CatalogView recibirDatos={handleAddToCart}/>
        <div className="my-4 w-50">
            {cartItems?.length <= 0 ? "": <CartView items={cartItems} delete={handleDelete}/> }
            {/* <CartView items={cartItems} delete={handleDelete}/> */}
        </div>
     </div>
    </>)
}