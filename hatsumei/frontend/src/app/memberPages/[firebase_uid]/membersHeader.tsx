"use client";

import React, { useState } from "react";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // Linkコンポーネントをインポート

const MembersHeaderPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const router = useRouter();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <section className="flex flex-row justify-center items-center w-full h-full pt-10 pb-10 bg-gray-300 relative z-0">
      <div className="font-bold text-[25px] fixed top-6 left-5 w-full bhutuka-expanded-one-regular [font-family:'Bungee Shade',sans-serif]">
        HATSUMEI💡
      </div>

      {/* ハンバーガーメニューボタン */}
      <button
        className="absolute top-7 right-10 z-10 cursor-pointer"
        onClick={toggleMenu}
        aria-label="メニューを開く"
      >
        <div className="space-y-1.5">
          <div className={`h-1 w-8 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-3' : ''}`}></div>
          <div className={`h-1 w-8 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`h-1 w-8 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-3' : ''}`}></div>
        </div>
      </button>

      {/* メニュー */}
      {isMenuOpen && (
        <div className="absolute top-16 right-10 bg-white shadow-lg p-4 rounded-lg w-48">
          <ul className="flex flex-col space-y-4">
          <li>
              <Link href="#allPostPage" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full text-left">AllPost</button>
              </Link>
            </li>
            <li>
              <Link href="#ideaPostsPage" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full text-left">アイデアを投稿する</button>
              </Link>
            </li>
            <li>
              <Link href="#lookHistoriesPage" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full text-left">Meto一覧</button>
              </Link>
            </li>
            <li>
              <Link href="#recruitedPage" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full text-left">採用された投稿</button>
              </Link>
            </li>

            <li>
              <Link href="#contactPages" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full text-left">Contact</button>
              </Link>
            </li>
            <li>
              <button
                onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                className="w-full text-left cursor-pointer"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default MembersHeaderPage;
