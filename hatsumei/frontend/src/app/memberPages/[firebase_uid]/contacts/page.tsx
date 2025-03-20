// "use client";

import { useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import emailjs from "emailjs-com";
import emailjs from '@emailjs/browser';

export default function IdeaPostPage() {
  // const router = useRouter();
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.init("quFjNnomi6gi-Co7l"); // 初期化
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        )
        .then((result) => {
          console.log(result.text);
          // 送信成功時の処理
          setName("");
          setTitle("");
          setMessage("");
        })
        .catch((error) => {
          console.log(error.text);
          // 送信失敗時の処理
        });
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
