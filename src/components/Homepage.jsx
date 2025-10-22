import React, { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

function Homepage() {
  const [blog, setBlog] = useState([
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "mario",
      id: 1,
    },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [name, setName] = useState("Mario");

  const handleDelete = (id) => {
    const newBlog = blog.filter((blog) => blog.id !== id);
    setBlog(newBlog);
  };

  useEffect(() => {
    console.log("use effect ran");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <Bloglist blog={blog} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("Luigi")}>Change name</button>
      <p>{name}</p>
    </div>
  );
}

export default Homepage;
