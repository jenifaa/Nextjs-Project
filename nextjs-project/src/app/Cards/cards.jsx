"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Cards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold hover:text-blue-500">
              <Link href={`/blog/${item.id}`}>{item.title}</Link>
            </h2>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
