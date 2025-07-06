export const getCart = () => JSON.parse(localStorage.getItem("cart") || "[]");
export const saveCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));
export const clearCart = () => localStorage.removeItem("cart");

export const getOrders = () => JSON.parse(localStorage.getItem("orders") || "[]");
export const saveOrder = (order) => {
    const orders = getOrders();
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
};