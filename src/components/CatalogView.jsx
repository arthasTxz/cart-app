import React, { useState, useEffect } from "react";
import { getProducts } from "../services/productService";
import CatalogItem from "./CatalogItem";


export default function CatalogView(props){

    const [products, setProducts] = useState([])
    useEffect(()=>{
        setProducts(getProducts()) 
    }, [])

    return(
        <div className="row">
            {products.map(prod=>( 
            <div className="col-4 my-2" key={prod.id}>
                <CatalogItem name={prod.name} description={prod.description} price={prod.price} enviarDatos={props.recibirDatos}/>
            </div>))}
           
        </div>
    )
}