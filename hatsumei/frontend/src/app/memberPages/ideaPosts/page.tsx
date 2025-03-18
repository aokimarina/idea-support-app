"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function IdeaPostPage() {
  const router = useRouter();
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/api/inquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      router.push("/contact/complete");
    } else {
      alert("送信に失敗しました");
    }
  };

  return (
    <section id="contact" className="bg-gray-100 px-8 py-20">
      <h2 className="text-3xl font-bold mb-4 text-center font-gray-700">
        Your Idea Post
      </h2>
      <form
        ref={form}
        className="grid items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 mt-10">
          <label htmlFor="name" className="block">
            nickname
          </label>
          <input
            type="text"
            id="name"
            className="w-full border-b border-gray-500 bg-gray-100 p-2 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="user_name"
          />
        </div>

        <div className="mb-4 mt-10 w-96">
          <label htmlFor="message" className="block">
            idea
          </label>
          <textarea
            id="message"
            className="w-full border-b border-gray-500 p-2 focus:outline-none resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
          />
        </div>
        <div className="grid items-center justify-center mt-12">
          <button
            type="submit"
            className="bg-gray-300 text-gray-800 px-10 py-2 w-64 mx-auto rounded transition-colors duration-300 ease-in-out hover:bg-gray-400 active:bg-gray-500"
          >
            send
          </button>
        </div>
      </form>
    </section>
  );
}
