"use client";
import React from "react";
import { useWindowSize } from "../../../../hooks/GetWindowSize";
import { users, ideaPosts } from "../../../../mocks/page"; // モックデータをインポート

const AllPostPage = () => {
  const { height, width } = useWindowSize();

  return (
    <section
      className={`flex justify-center items-center h-[${height}px] w-[${width}px] bg-white`}
    >
      <div className="w-full max-w-4xl px-4 py-6">
        <h1 className="text-xl font-semibold mb-10">-- All Posts --</h1>
        <ul className="space-y-4">
          {ideaPosts.slice(0, 5).map((post, index) => {
            const user = users.find((u) => u.id === post.user_id);

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
