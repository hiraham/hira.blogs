import React from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "../components/ui/card";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    image:string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-slate-800 text-white" : "text-slate-300"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <Image
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-lg"
        width={500}
        height={200}
      />
      <CardTitle className="text-xl font-normal mt-4 text-center">
        {post.title}
      </CardTitle>
      <CardContent className="text-sm text-center">
        <p>{post.description}</p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/post/${post.id}`}
          className={`w-full px-6 py-2 text-center text-white bg-blue-600 rounded-md hover:bg-blue-500 ${
            isDarkBackground
              ? "hover:bg-red-500"
              : "hover:bg-black"
          }`}
        >
          Read more
        </a>
      </div>
    </Card>
  );
}
