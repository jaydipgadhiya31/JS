import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        navigate("/login");
    };

    return (
        <div className="flex flex-col h-screen justify-center items-center bg-green-100">
            <h1 className="text-3xl font-bold mb-4">Welcome to Home Page</h1>
            <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
                Logout
            </button>
        </div>
    );
}

export default Home;
