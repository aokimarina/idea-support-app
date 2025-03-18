"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { addIdeaPost } from "@/app/server/ideaPostAPI";
import { IdeaPostType } from "@/types/types";

export default function IdeaPostPage() {
  const router = useRouter();
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [main_category, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!name || !title || !message || !main_category || !subCategory) {
      alert("すべてのフィールドを入力してください");
      return;
    }

    const newIdeaPost: IdeaPostType = {
      id: "newId", // モックデータ用の仮のID
      user_id: "sampleUserId",
      title: title,
      message: message,
      date: new Date().toISOString(),
      main_category: main_category,
      sub_category: subCategory,
    };

    try {
      const addedPost = await addIdeaPost(newIdeaPost);
      console.log("新しい投稿が追加されました", addedPost);
      router.push("/idea-posts"); // 投稿後に投稿一覧ページなどに遷移
    } catch (error) {
      if (error instanceof Error) {
        alert("投稿に失敗しました：" + error.message);
      } else {
        alert("投稿に失敗しました：不明なエラーが発生しました");
      }
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-100 px-8 py-20 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-700">Your Idea Posts</h2>
      <form
        ref={form}
        className="w-full max-w-lg flex flex-col space-y-6"
        onSubmit={handleSubmit}
      >
        {/* Nickname */}
        <div>
          <label htmlFor="name" className="block mb-2 text-gray-700">
            Nickname
          </label>
          <input
            type="text"
            id="name"
            className="w-full h-10 border border-gray-500 bg-white px-3 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="user_name"
          />
          <div>
            <label htmlFor="main_category" className="block mb-2 text-gray-700">
              Category
            </label>
            <input
              type="text"
              id="main_category"
              className="w-full h-10 border border-gray-500 bg-white px-3 focus:outline-none"
              value={main_category}
              onChange={(e) => setMainCategory(e.target.value)}
              name="main_category"
            />
          </div>

          <label htmlFor="sub_category" className="block mb-2 text-gray-700">
            Sub Category
          </label>
          <input
            type="text"
            id="sub_category"
            className="w-full h-10 border border-gray-500 bg-white px-3 focus:outline-none"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            name="sub_category"
          />
        </div>

        {/* Title */}
        <div>
          <label htmlFor="title" className="block mb-2 text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full h-10 border border-gray-500 bg-white px-3 focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block mb-2 text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            className="w-full h-24 border border-gray-500 bg-white px-3 py-2 focus:outline-none resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="w-full max-w-xs bg-gray-300 text-gray-800 py-3 transition-colors duration-300 hover:bg-gray-400 active:bg-gray-500"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
