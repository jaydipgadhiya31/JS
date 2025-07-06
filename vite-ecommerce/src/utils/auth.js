export const isLoggedIn = () => localStorage.getItem("isLoggedIn") === "true";
export const logout = () => localStorage.removeItem("isLoggedIn");