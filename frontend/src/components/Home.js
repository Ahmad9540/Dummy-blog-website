import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

     
      <section className="hero">
        <h1>Step Into My World of Words</h1>
        <p>Explore articles, stories, and experiences from passionate minds.</p>
        <button className="hero-btn">Start Reading</button>
      </section>

     
      <section className="categories">
        <h2>Categories</h2>
        <div className="category-list">
          <span>Tech</span>
          <span>Travel</span>
          <span>Health</span>
          <span>Finance</span>
          <span>Lifestyle</span>
        </div>
      </section>

     
      <section className="featured-posts">
  <h2>Featured Posts</h2>
  <div className="posts-grid">
    
    <div className="post-card">
      <img src="https://th.bing.com/th/id/OIP.YuCLHVeWV9rLqJujtXF04AHaEK?rs=1&pid=ImgDetMain" alt="Tech" />
      <h3>The Future of AI: What to Expect in the Next 10 Years</h3>
      <p>Discover how artificial intelligence is transforming industries and what trends are shaping the future.</p>
      <button className="read-more">Read More</button>
    </div>

    <div className="post-card">
      <img src="https://trustedclubs.com/wp-content/uploads/2024/06/Top-10-Hidden-Travel-Gems-Around-The-World-1024x614.webp" alt="Travel" />
      <h3>Top 10 Hidden Travel Gems You Must Explore in 2025</h3>
      <p>Skip the tourist spots — explore breathtaking locations you’ve never heard of before.</p>
      <button className="read-more">Read More</button>
    </div>

    <div className="post-card">
      <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" alt="Lifestyle" />
      <h3>Morning Routines That Boost Productivity</h3>
      <p>Simple habits and mindset shifts to make your mornings more focused and energizing.</p>
      <button className="read-more">Read More</button>
    </div>

    
    <div className="post-card">
      <img src="https://ekipa.co/wp-content/uploads/2022/05/Startups-Shaping-Future-Line-37.png" alt="Startup" />
      <h3>How Startups Are Shaping the Future of Work</h3>
      <p>Startups are transforming how we work — from hybrid roles to flexible hours.</p>
      <button className="read-more">Read More</button>
    </div>

    <div className="post-card">
      <img src="https://bodybuilding-wizard.com/wp-content/uploads/2025/01/trends-in-fitness-industry-in-2025.jpg" alt="Fitness" />
      <h3>Top Fitness Trends to Watch in 2025</h3>
      <p>Discover emerging trends in fitness, from wearable tech to virtual training sessions.</p>
      <button className="read-more">Read More</button>
    </div>

    <div className="post-card">
      <img src="https://e-learn.guide/wp-content/uploads/2024/07/Mastering-Personal-Finance.png" alt="Finance" />
      <h3>Mastering Personal Finance in Your 20s</h3>
      <p>Learn how to save, invest, and grow wealth early with smart financial strategies.</p>
      <button className="read-more">Read More</button>
    </div>
  </div>
</section>


      
      <footer className="footer">
        <p>&copy; Ashfaq Ahmad. 2025 My Blog. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Home;












// import React from "react";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="home">

//       {/* Hero Section */}
//       <section className="hero">
//         <h1>Welcome to My Blog</h1>
//         <p>Explore articles, stories, and experiences from passionate minds.</p>
//         <button className="hero-btn">Start Reading</button>
//       </section>

//       {/* Categories */}
//       <section className="categories">
//         <h2>Categories</h2>
//         <div className="category-list">
//           <span>Tech</span>
//           <span>Travel</span>
//           <span>Health</span>
//           <span>Finance</span>
//           <span>Lifestyle</span>
//         </div>
//       </section>

//       {/* Featured Posts */}
//       <section className="featured-posts">
//         <h2>Featured Posts</h2>
//         <div className="posts-grid">

//           <div className="post-card">
//             <img
//               src="https://th.bing.com/th/id/OIP.YuCLHVeWV9rLqJujtXF04AHaEK?rs=1&pid=ImgDetMain"
//               alt="Tech"
//             />

//             <h3>The Future of AI: What to Expect in the Next 10 Years</h3>
//             <p>Discover how artificial intelligence is transforming industries and what trends are shaping the future.</p>
//             <button className="read-more">Read More</button>
//           </div>

//           <div className="post-card">
//             <img
//               src="https://trustedclubs.com/wp-content/uploads/2024/06/Top-10-Hidden-Travel-Gems-Around-The-World-1024x614.webp"
//               alt="Travel"
//             />
//             <h3>Top 10 Hidden Travel Gems You Must Explore in 2025</h3>
//             <p>Skip the tourist spots — explore breathtaking locations you’ve never heard of before.</p>
//             <button className="read-more">Read More</button>
//           </div>

//           <div className="post-card">
//           <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" alt="Tech" />

//             <h3>Morning Routines That Boost Productivity</h3>
//             <p>Simple habits and mindset shifts to make your mornings more focused and energizing.</p>
//             <button className="read-more">Read More</button>
//           </div>

          

//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; 2025 My Blog. All rights reserved.</p>
//       </footer>

//     </div>
//   );
// };

// export default Home;
