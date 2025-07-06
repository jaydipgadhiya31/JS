import React, { useEffect, useState } from "react";

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(storedOrders.reverse()); // Show latest orders first
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Order History</h2>

            {orders.length === 0 ? (
                <p className="text-center text-gray-600">No orders found.</p>
            ) : (
                <div className="space-y-6">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="border rounded-lg shadow p-4 bg-white space-y-4"
                        >
                            <div className="flex flex-col sm:flex-row justify-between">
                                <div>
                                    <p className="font-semibold">Order ID: <span className="text-gray-700">{order.id}</span></p>
                                    <p className="font-semibold">Customer: <span className="text-gray-700">{order.customer.name}</span></p>
                                </div>
                                <div className="text-right sm:text-left mt-2 sm:mt-0">
                                    <p className="font-semibold text-blue-600">
                                        Total: ₹{order.total}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-medium mb-2">Products:</h4>
                                <ul className="space-y-1 list-disc pl-5 text-sm text-gray-700">
                                    {order.cart.map((item) => (
                                        <li key={item.id}>
                                            {item.name} — Qty: {item.quantity} × ₹{item.price} = ₹
                                            {item.price * item.quantity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrderHistory;