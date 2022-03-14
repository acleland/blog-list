import React, { useEffect, useState } from 'react';
import './Main.css';

import { getBlogs } from '../../services/client';
import BlogCard from '../../components/BlogCard/BlogCard';

function Main() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const resp = await getBlogs();
        setBlogs(resp);
      } catch (e) {
        alert(e.message);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="main">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </section>
  );
}

export default Main;
