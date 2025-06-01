
import React from 'react';
import './Post.css';  

const Post = () => {
  return (
    <div className="post-container">
      <div className="post-header">
        <h1>All Blog Posts</h1>
        <p className="tagline">Explore various blog topics and ideas</p>
      </div>

      <div className="post-content">
        <div className="post-text">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt leo sit amet fermentum posuere. Sed ut fermentum felis. Sed nec dui a augue feugiat rutrum. Vivamus dapibus risus nec nunc tempor fermentum. Nam vel consequat felis.
          </div>
          <div>
            Mauris vel nisl a elit aliquet iaculis. Donec viverra magna nec purus tincidunt, id vehicula ligula hendrerit. Nam ac vulputate augue. Nullam nec ipsum ac ante tincidunt convallis. Etiam convallis ut lacus et tincidunt. Aliquam erat volutpat.
          </div>
          <div>
            Aenean eget odio ac velit dictum viverra. Nunc tristique nisi ut velit convallis, id volutpat lectus facilisis. Donec auctor ipsum id magna pretium, eget feugiat arcu sodales. Integer suscipit orci in efficitur elementum.
          </div>
          <div>
            Curabitur tincidunt nisi sed sapien efficitur, nec lobortis tortor fringilla. Morbi ut malesuada tortor, id viverra lorem. Suspendisse potenti. Curabitur malesuada turpis eget neque feugiat, nec fermentum sem dapibus. Donec quis erat velit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
