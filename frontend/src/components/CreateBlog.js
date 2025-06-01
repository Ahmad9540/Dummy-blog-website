import React, { useState } from 'react';
import axios from 'axios';

function CreateBlog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/blogs', { title, content })
            .then(res => {
                alert("Blog created!");
                setTitle('');
                setContent('');
            })
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Blog</h2>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
            <br />
            <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default CreateBlog;
