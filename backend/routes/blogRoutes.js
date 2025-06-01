const express = require('express');
const Blog = require('../models/blog');  

const router = express.Router();

 
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();  
    res.json(blogs);  
  } catch (err) {
    res.status(500).json({ message: err.message });  
  }
});

 
router.post('/blogs', async (req, res) => {
  const { title, content, author } = req.body;

   
  const blog = new Blog({
    title,
    content,
    author,
  });

  try {
    const newBlog = await blog.save();  
    res.status(201).json(newBlog);  
  } catch (err) {
    res.status(400).json({ message: err.message });  
  }
});

module.exports = router;
