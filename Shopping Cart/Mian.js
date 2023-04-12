import React, { useState } from "react";
import data from "./Data";
import Header from "./Header";
import {BrowserRouter as Router} from "react-router-dom"
import { Route , Routes } from "react-router-dom";
import Routess from "./Routes";
function Main(){
    const {productitems} = data ;
    const [cartitems , setcartitems]=useState([])
    const handleAddProduct=(product)=>{
    const ProductExist=cartitems.find((item)=> item.id === product.id);
    if(ProductExist){
        setcartitems(cartitems.map((item)=>item.id === product.id ? {
            ...ProductExist,quantity: ProductExist.quantity+1}:item))}
            else{
                setcartitems([...cartitems,{...product,quantity:1}])
            }
    };
    const handleRemoveproduct=(product)=>{
    const ProductExist=cartitems.find((item)=> item.id === product.id);
    if(ProductExist.quantity===1){
        setcartitems(cartitems.filter((item)=> item.id !==product.id));

    }
    else{
        setcartitems(
            cartitems.map((item)=> item.id === product.id ? {...ProductExist ,quantity:ProductExist.quantity-1}:item)
        )
    }
    }
    return(<>
    
    <Router>
    <Header/>
    <Routess productitems={productitems} cartitems={cartitems} handleAddProduct={handleAddProduct} handleRemoveproduct={handleRemoveproduct}/>
    </Router>
    

    </>)
}
export default Main ;