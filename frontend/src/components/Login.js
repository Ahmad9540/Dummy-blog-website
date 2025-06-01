import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; 

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);

    
    setMessage("✅ Successfully logged in!");

    
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      
      {message && <p className="success-message">{message}</p>}

      <p>
        Don't have an account?{" "}
        <a href="/signup" className="switch-link">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default Login;
