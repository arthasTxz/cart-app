import  { useReducer} from "react";
import { itemsReducer } from "../reducer/itemsReducer";
const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || []

export const useItemsCart = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems)

    const handlerAddProductCart = (product) => {
        const hasItem = cartItems.find((i) => i.product.name === product.name)
        if(hasItem){
            dispatch(
                {
                    type: 'UpdateQuantityProductCart',
                    payload: product,
                }
            )
        }else {
            dispatch(
                {
                    type: 'AddProductCart',
                    payload: product,
                }
            )
        }
    }

    const handlerDeleteProductCart = (name) => {
        dispatch(
            {
                type: 'DeleteProductCart',
                payload: name
            }
        )
    }

    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart
    }
}