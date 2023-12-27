import React from "react";
import "./Navbar.scss";
const Navbar = () => {
    return (
        <div className="Navbar">
            <h2>Logo</h2>
            <nav className="Main-Nav">
                <a href="#home" id="home">Home</a>
                <a href="#contact" id="contact">Contact us</a>
                <a href="#about" id="about">About</a>
                <a href="#products" id="products">Products</a>
                <input type="login" value='login' />
            </nav>
        </div>
    )
}
export default Navbar; 