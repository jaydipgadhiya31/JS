import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Home from "./Home"

const ProtectedRoute = () => {
    const navigate = useNavigate();
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    useEffect(() => {
        if (!email && !password) {
            navigate("/login")
        }
    }, [email, password, navigate])
    return (
        <Home />
    )
}

export default ProtectedRoute

