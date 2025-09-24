import React from 'react';
import {images} from "../../assets/assets.js";
import './Product.css';

function Product() {
    return (
        <section id="product" className="product">
            <div className="product-container">
                <h2>Catch Me: The Future of Sports</h2>
                <p>
                    Built to simplify and amplify the game, <strong>Catch Me</strong> is more than
                    just an app — it’s your complete sports companion. From organizing matches
                    to recording every key play, we make sure no game, moment, or athlete
                    goes unnoticed.
                </p>
                <ul>
                    <li>Organize and manage games seamlessly</li>
                    <li>Track every stat, highlight, and performance</li>
                    <li>Connect athletes, coaches, scouts, and fans in one place</li>
                    <li>Turn every moment into an opportunity to be seen</li>
                </ul>
            </div>
            <div className="product-container">
                <img className="product-img" src={images.main} alt="Catch Me app showcase" />
            </div>
        </section>
    );
}

export default Product;
