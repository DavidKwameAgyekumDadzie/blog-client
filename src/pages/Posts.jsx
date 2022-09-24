import React from "react";
import PostCard from "../components/PostCard";

function Posts() {
  return (
    <div className="w-full md:w-11/12 p-10 lg:w-9/12 h-screen md:mx-auto space-y-5">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}

export default Posts;
