"use client";
import React from "react";
import { useWindowSize } from "../../../../hooks/GetWindowSize";
import { users, idea_posts } from "../../../../mocks/page";

const AllPostPage = () => {
  const { height, width } = useWindowSize();

  return (
    <section
      className={`flex justify-center items-center h-[${height}px] w-[${width}px] bg-white -ml-12`}
    >
      <div className="w-full max-w-4xl px-4 py-6">
        <h1 className="flex justify-center text-3xl mb-12 text-blue-950">
          All Posts 
        </h1>
        <ul className="space-y-4 mt-3">
          {idea_posts.slice(0, 5).map((post, index) => {
            const user = users.find(
              (u) => String(u.id) === String(post.user_id)
            );

            return (
              <li key={index} className="border-b pb-10">
                <div className="text-lg font-bold">{post.title}</div>
                <div className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()} by{" "}
                  {user?.first_name || "匿名"}
                </div>
                <p className="text-md mt-2">
                  {post.message.length > 40
                    ? post.message.substring(0, 40) + "..."
                    : post.message}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AllPostPage;
