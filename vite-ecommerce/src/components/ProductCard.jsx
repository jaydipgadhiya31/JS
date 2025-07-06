// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden p-4">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <p className="text-blue-600 font-bold mb-3">₹{product.price}</p>
            <button
                onClick={() => onAddToCart(product)}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;