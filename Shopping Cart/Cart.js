import React from "react";
import "./Cart.css"
function Cart({cartitems,handleAddproduct , handleRemoveproduct}){
    const totalprice = cartitems.reduce((price,item)=>price + item.quantity * item.price,0);
    return(<>
    <div className="cart-items">
        <div className="cart-items-header">Cart Items</div>
     {cartitems.length===0 && (
        <div className="cart-item-empty">No items are added</div>
     )}
     <div>
        {cartitems.map((item)=>(
            <div key={item.id} className="cart-item-list">
             <img className="cart-items-image" 
             src={item.Image} 
             alt={item.name} >
             </img>
             <div  className="cart-item-name">{item.name}</div>
             <div className="cart-item-function">
            <button className="cart-items-add" onClick={()=> handleAddproduct()}>+</button>
            <button className="cart-items-remove" onClick={()=> handleRemoveproduct(item)}>-</button>
             </div>
             <div className="cart-items-price">
                {cartitems.quantity} * ${cartitems.price}
             </div>
            </div>
        ))
        }
     </div>
     <div className="cart-items-total-price-name">
        total price 
        <div className="cart-items-total-price">$ {totalprice}</div>
     </div>
    </div>
    </>)
}

export default Cart;