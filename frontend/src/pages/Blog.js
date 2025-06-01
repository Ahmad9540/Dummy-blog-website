import React from "react";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Tech Trends 2025",
      preview: "Click to read tech predictions...",
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Blog</h1>
      <div style={styles.cardWrapper}>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center", 
    padding: "40px",
  },
  heading: {
    marginBottom: "30px",
    fontSize: "2.5rem",
  },
  cardWrapper: {
    display: "flex",
    justifyContent: "center", 
  },
};

export default Blog;
