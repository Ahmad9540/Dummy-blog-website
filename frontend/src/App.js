import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import About from "./components/About";  
import Blog from "./pages/Blog"; 
import BlogDetail from "./components/BlogDetail"; 
import Login from "./components/Login"; 
import Signup from "./components/Signup"; 

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">📝 BlogSite</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li>
              
              <a href="/about" target="_blank" rel="noopener noreferrer">About</a>
            </li>
            <li><Link to="/blog">Blog</Link></li> 
            <li><Link to="/login">Login</Link></li> 
            <li><Link to="/signup">Signup</Link></li> 
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />  
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/blog/:id" element={<BlogDetail />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
