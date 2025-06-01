const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/posts", (req, res) => {
  res.json([
    { id: 1, title: "First Blog Post", content: "This is the first blog post content." },
    { id: 2, title: "Second Blog Post", content: "Here's some more content in post two." },
  ]);
});

app.get("/api/about", (req, res) => {
  res.json({ text: "This blog is created to share knowledge and stories with the world!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
