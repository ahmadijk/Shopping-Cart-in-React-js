import React from "react";
import { Route , Routes } from "react-router";
import Products from "./Products";
import SignUp from "./SignUp";
import Cart from "./Cart";
 function Routess({productitems ,cartitems ,handleAddProduct,handleRemoveproduct }){
    return(<>
    <div>
        <Routes>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/Cart" element={<Cart cartitems={cartitems} handleAddProduct={handleAddProduct} handleRemoveproduct={handleRemoveproduct} />}></Route>
            <Route path="/" element={<Products productitems={productitems} handleAddProduct={handleAddProduct}/>}></Route>
        </Routes>
    </div>
    </>)
 }
 export default  Routess