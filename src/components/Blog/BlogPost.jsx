// BlogPost.js
import React from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

const BlogPost = ({ title, content, date, author }) => {
  return (
    <div className="blog-post">
      <h3 className="post-title">{title}</h3>
      <div className="post-meta">
        <span className="post-date">
          <FaCalendarAlt /> {date}
        </span>
        <span className="post-author">
          <FaUser /> {author}
        </span>
      </div>
      <p className="post-content">{content}</p>
    </div>
  );
};

export default BlogPost;
