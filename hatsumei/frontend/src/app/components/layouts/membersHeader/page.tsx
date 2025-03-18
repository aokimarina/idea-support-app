"use client"; // これが必要です

import Link from "next/link";
import React, { useState } from "react";

const MembersHeaderPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <section className="flex flex-col justify-center items-center w-full h-full pt-10 pb-10 bg-gray-300 relative">
      <div className="font-bold text-[40px]">---- HATSUMEI ---💡</div>

      {/* ハンバーガーメニューボタン */}
      <div
        className="absolute top-10 right-10 cursor-pointer"
        onClick={toggleMenu}
      >
        <div className="w-8 h-1 bg-black mb-2"></div>
        <div className="w-8 h-1 bg-black mb-2"></div>
        <div className="w-8 h-1 bg-black mb-2"></div>
      </div>

      {/* メニュー */}
      {isMenuOpen && (
        <div className="absolute top-16 right-10 bg-white shadow-lg p-4 rounded-lg w-48">
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="#ideaPostsPage">
                <button className="w-full text-left">アイデアを投稿する</button>
              </a>
            </li>
            <li>
              <a href="#lookHistoriesPage">
                <button className="w-full text-left">閲覧履歴</button>
              </a>
            </li>
            <li>
              <a href="#recruitedPage">
                <button className="w-full text-left">採用された案件</button>
              </a>
            </li>
            <li>
              <a href="#allPostPage">
                <button className="w-full text-left">ポスト一覧</button>
              </a>
            </li>
            <li>
              <a href="#contactPages">
                <button className="w-full text-left">コンタクト</button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default MembersHeaderPage;
