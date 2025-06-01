import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${blog.id}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "300px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#f9f9f9", 
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
      }}
    >
      <h2>{blog.title}</h2>
      <p>{blog.preview}</p>
    </div>
  );
};

export default BlogCard;
