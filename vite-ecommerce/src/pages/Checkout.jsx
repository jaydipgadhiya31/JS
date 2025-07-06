import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
    });

    const [errors, setErrors] = useState({});
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        if (storedCart.length === 0) {
            alert("Your cart is empty.");
            navigate("/");
        } else {
            setCart(storedCart);
        }
    }, [navigate]);

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const newOrder = {
            id: Date.now(),
            customer: formData,
            cart,
            total: total.toFixed(2),
        };

        const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
        localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));
        localStorage.removeItem("cart");
        alert("Order placed successfully!");
        navigate("/orders");
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded mt-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                    <label className="block font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                    <label className="block font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Address */}
                <div>
                    <label className="block font-medium mb-1">Address</label>
                    <textarea
                        name="address"
                        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="3"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>

                {/* Phone */}
                <div>
                    <label className="block font-medium mb-1">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Summary */}
                <div className="mt-4 p-4 bg-gray-50 border rounded">
                    <p><strong>Subtotal:</strong> ₹{subtotal.toFixed(2)}</p>
                    <p><strong>Tax (5%):</strong> ₹{tax.toFixed(2)}</p>
                    <p className="font-bold text-lg"><strong>Total:</strong> ₹{total.toFixed(2)}</p>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mt-4"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default Checkout;