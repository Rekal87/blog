import React, { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import Users from "./Users";

function Homepage() {
  const [blog, setBlog] = useState(null);

  const handleDelete = (id) => {
    const newBlog = blog.filter((blog) => blog.id !== id);
    setBlog(newBlog);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlog(data);
        console.log(data);
      });
  }, []);

  return <div className="home">{blog && <Users blog={blog} />}</div>;
}

export default Homepage;
