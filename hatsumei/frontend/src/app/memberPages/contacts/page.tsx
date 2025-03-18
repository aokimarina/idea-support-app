"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function IdeaPostPage() {
  const router = useRouter();
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/api/inquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, title, message }),
    });

    if (res.ok) {
      router.push("/contact/complete");
    } else {
      alert("送信に失敗しました");
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-100 px-8 py-20 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-700">Contact</h2>
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
