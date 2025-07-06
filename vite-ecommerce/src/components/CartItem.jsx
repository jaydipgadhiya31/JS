// src/components/CartItem.jsx
import React from "react";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
    return (
        <div className="flex items-center justify-between border-b py-4">
            <div className="w-1/3">
                <h4 className="font-semibold">{item.name}</h4>
            </div>

            <div className="flex items-center space-x-2 w-1/3 justify-center">
                <button
                    onClick={() => onDecrease(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                    -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                    onClick={() => onIncrease(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                    +
                </button>
            </div>

            <div className="text-right w-1/3">
                <p className="text-sm">₹{item.price} × {item.quantity}</p>
                <p className="font-bold">₹{item.price * item.quantity}</p>
                <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-500 text-sm mt-1 hover:underline"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;