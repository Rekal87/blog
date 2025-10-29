import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, [posts]);

  return (
    <div className="App">
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
              the Blog
            </h2>
            <p className="mt-2 text-lg/8 text-gray-300">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <Posts posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default App;
