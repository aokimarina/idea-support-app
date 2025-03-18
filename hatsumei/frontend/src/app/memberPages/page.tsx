"use client";

import React from "react";
import IdeaPostsPage from "@/app/memberPages/ideaPosts/page";
import LookHistoriesPage from "@/app/memberPages/viewHistories/page";
import RecruitedPage from "@/app/publicPages/recruited/page";
import AllPostPage from "@/app/publicPages/allPosts/page";
import ContactsPage from "@/app/memberPages/contacts/page";
import FooterPage from "@/app/components/layouts/footer/page";
import { useWindowSize } from "../../../hooks/GetWindowSize";
import MembersHeaderPage from "../components/layouts/membersHeader/page";

export default function LoginPage() {
  const { height, width } = useWindowSize();

  return (
    <div
      style={{ height: "100vh", width: `${width}px` }}
      className="flex flex-col justify-start items-center overflow-hidden" // overflow-hiddenで不必要なスクロールを防ぐ
    >
      {/* ヘッダー部分を固定 */}
      <div className="w-full sticky top-0 z-10">
        <MembersHeaderPage />
      </div>

      {/* ページ内容部分 */}
      <div className="flex flex-col w-full overflow-auto py-6">
        <div id="ideaPostsPage">
          <IdeaPostsPage />
        </div>

        <div id="lookHistoriesPage">
          <LookHistoriesPage />
        </div>

        <div id="recruitedPage">
          <RecruitedPage />
        </div>

        <div id="allPostPage">
          <AllPostPage />
        </div>

        <div id="contactPages">
          <ContactsPage />
        </div>
        <div className=" w-full h-[20px]">
          <FooterPage />
        </div>
      </div>
    </div>
  );
}
