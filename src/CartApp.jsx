
import CatalogView from "./components/CatalogView";
import CartView from "./components/CartView";
import { useItemsCart } from "./hooks/useItemsCart";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export function CartApp(){

   const {cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart()

    return(
    <>
    <Navbar />
     <div className="container">
     <h3>Cart App</h3>
     <Routes>
        <Route 
        path="catalog" 
        element={<CatalogView recibirDatos={handlerAddProductCart}/>}/>
        <Route 
        path="cart" 
        element={
            (cartItems?.length <= 0 ?
                <div className="alert alert-warning">No hay productos en el carrito de compras!</div> :
                (
        <div className="my-4 w-50">
         <CartView items={cartItems} delete={handlerDeleteProductCart}/> 
        </div>)
    )}/>
        <Route path="/" element={ <Navigate to={'/catalog'}></Navigate>} />
     </Routes>
    
     </div>
    </>)
}