import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();

  const generateDummyText = (repeatCount) => {
    const baseText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `;
    return baseText.repeat(repeatCount);
  };

  const blogPosts = [
    {
      title: "Post 1: The Future of Technology",
      content: generateDummyText(10), 
    },
    {
      title: "Post 2: Why Blogging Still Matters",
      content: generateDummyText(8), 
    },
    {
      title: "Post 3: How to Stay Productive as a Developer",
      content: generateDummyText(9),
    },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center" }}>Details for Blog ID: {id}</h2>
      {blogPosts.map((post, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid #eee",
            padding: "20px",
            margin: "20px 0",
            borderRadius: "8px",
            backgroundColor: "#fdfdfd",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >
          <h3>{post.title}</h3>
          <p style={{ textAlign: "justify", lineHeight: "1.6", whiteSpace: "pre-wrap" }}>
            {post.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetail;
