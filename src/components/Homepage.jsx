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

  return (
    <div className="home">
      <Bloglist blog={blog} />
    </div>
  );
}

export default Homepage;
