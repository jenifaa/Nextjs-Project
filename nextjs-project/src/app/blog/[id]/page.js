"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import React from "react"; 

const BlogDetails = ({ params }) => {
  const [post, setPost] = useState(null);
  const { id } = React.use(params); 

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPost(data);
        })
        .catch((err) => console.error("Failed to fetch post:", err));
    }
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
      <p className="mt-4 text-sm text-gray-500">Post ID: {post.id}</p>
    </div>
  );
};

export default BlogDetails;
