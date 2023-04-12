import React from "react";
import "./Products.css"
 function Products({productitems,handleAddProduct}){
    return(<>
    <div className="Products">
     {
       productitems.map((productitems)=> (
        <div className="Card">
        <div>
        <img className="product-image" src={productitems.Image} alt={productitems.name}></img>
        </div>
        <div>
            <h3 className="product-name">
                {productitems.name}
            </h3>
            <div className="product-price">{productitems.price}</div>

            <div>
                <button onClick={()=>handleAddProduct(productitems)} className="product-add-button">Add to Cart</button>
            </div>
        </div>
        </div>
       ))
     }
    </div>
    </>)
 }

 export default Products ;