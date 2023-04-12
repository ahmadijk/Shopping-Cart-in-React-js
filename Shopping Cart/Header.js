import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
function Header(){
    return(<>
    <header className="Header">
        <div>
            <h1>
                <Link to="/" className="logo">
                    Shopping Cart
                </Link>
            </h1>
        </div>
        <div className="Header-Links">
             <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
             </ul>
             <ul>
                <li>
                    <Link to={"/signup"}>Signup</Link>
                </li>
             </ul>
             <ul>
                <li>
                    <Link to={"/cart"} className="cart">
                    <i class="fas fa-shopping-cart" />
                    </Link>
                </li>
             </ul>
        </div>
    </header>
    </>)
}
export default Header ;