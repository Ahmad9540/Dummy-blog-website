# MERN Stack Blogging Website

A full-featured blogging platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to create, edit, delete, and read blog posts with a clean and responsive UI.

## Features

- User authentication and authorization
- Create, read, update, and delete (CRUD) blog posts
- Rich text editor for writing posts
- Responsive design for desktop and mobile
- RESTful API backend built with Express and Node.js
- MongoDB as the database
- React.js frontend with React Router for navigation

## Installation & Setup

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally or a MongoDB Atlas cluster

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
2. Install dependencies:
   npm install
3. Create a .env file and add your environment variables:
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  PORT=5000
4. Start the backend server:
   npm start
   
....Frontend Setup....
1. Navigate to the frontend folder:
   cd frontend
2. Install dependencies:
   npm install
3. Start the frontend development server:
   npm start
4. Open your browser and visit http://localhost:3000

   .....Usage....
   
Register or log in to create your account.
Create new blog posts using the editor.
Edit or delete your existing posts.
Browse posts from all users on the home page.

.....Technologies Used......

Frontend: React.js, React Router, Axios, CSS
Backend: Node.js, Express.js, JWT, bcrypt
Database: MongoDB, Mongoose
Tools: VS Code, Postman, Git

.....Contributing....
Feel free to open issues or submit pull requests for improvements.

License..
This project is licensed under the MIT License.





