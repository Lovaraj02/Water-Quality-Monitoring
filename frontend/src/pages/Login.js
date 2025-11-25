import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
// import "./Login.css";

const API_URL = 'https://water-quality-monitoring-da7r.onrender.com';

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${API_URL}/api/users/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await res.text();

            if (result === "success") {
                toast.success("Login Successful!");
                setTimeout(() => navigate("/Admin"), 1200);
            } else {
                toast.error("Invalid username or password");
            }
        } catch (err) {
            toast.error("Server error. Try again.");
        }
    };

    return (
        <div className="login-container">
            <Toaster position="top-right" />

            <h1 className="login-title">Administrator Login</h1>

            <form onSubmit={handleSubmit} className="login-form">

                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder='UserName = Admin'
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder='Password = Admin'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="login-btn">Click here to Login</button>
            </form>
        </div>
    );
}

export default Login;
