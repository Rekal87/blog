import React from "react";

const Posts = ({ posts }) => {
  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map((posts) => (
        <article
          key={posts.id}
          className="flex max-w-xl flex-col items-start justify-between"
        >
          <div className="flex items-center gap-x-4 text-xs"></div>
          <div className="group relative grow">
            <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
              {posts.title}
            </h3>
            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">
              {posts.body}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Posts;
