import React, { useState } from "react";
import products from "../data/products";
import "./Home.css"; // Optional: for styling

const Home = () => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const addToCart = (product) => {
        const updatedCart = [...cart];
        const index = updatedCart.findIndex((item) => item.id === product.id);

        if (index !== -1) {
            // Product already in cart, increase quantity
            updatedCart[index].quantity += 1;
        } else {
            // New product, add to cart
            updatedCart.push({ ...product, quantity: 1 });
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        alert(${ product.name } added to cart!);
    };

    return (
        <div className="home-container">
            <h1>Product Listing</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-image"
                        />
                        <h3>{product.name}</h3>
                        <p>₹{product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;