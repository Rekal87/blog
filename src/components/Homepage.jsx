import React, { useState } from "react";
import Bloglist from "./Bloglist";

function Homepage() {
  const [blog, setBlog] = useState([
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "mario",
      id: 1,
      src: "https://picsum.photos/300/200",
    },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlog = blog.filter((blog) => blog.id !== id);
    setBlog(newBlog);
  };

  return (
    <div className="home">
      <Bloglist blog={blog} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}

export default Homepage;
