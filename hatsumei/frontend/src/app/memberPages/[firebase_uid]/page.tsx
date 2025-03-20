"use client";

import IdeaPostsPage from "@/app/memberPages/[firebase_uid]/ideaPosts/page";
import LookHistoriesPage from "@/app/memberPages/[firebase_uid]/metoHistories/page";
import RecruitedPage from "@/app/publicPages/recruited/page";
import AllPostPage from "@/app/publicPages/allPosts/page";
import ContactsPage from "@/app/memberPages/[firebase_uid]/contacts/page";
import FooterPage from "@/app/components/layouts/footer";
import { useWindowSize } from "../../../../hooks/GetWindowSize";
import MembersHeaderPage from "./membersHeader";
import { users } from "../../../../mocks/page";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import ScrollToTopButton from "./ScrollToTopButton";
import SearchPosts from "./SearchPosts";
// import UserAdmin from "./userAdmin/page";

export default function MemberPage() {
  const params = useParams();
  const firebaseUid = params.firebase_uid as string;
  const [nickname, setNickname] = useState<string | null>(null);

  useEffect(() => {
    // 仮のデータ取得（実際はAPIで取得）
    const user = users.find((u) => u.firebase_uid === firebaseUid);
    if (user) setNickname(user.nickname);
  }, [firebaseUid]);

  const { width } = useWindowSize();

  return (
    <div
      className={`flex flex-col  h-auto w-[${width}px] justify-center items-center`}
    >
      <div className="w-full sticky top-0 z-10">
        <MembersHeaderPage />
        <h1>{nickname}さんのページ</h1>
      </div>
      <div className="w-full mb-20">
        <SearchPosts />
      </div>
      <div className="w-full">
        <div className="flex">
          <div id="allPostPage" className="w-3/4">
            <AllPostPage />
          </div>
          <div id="lookHistoriesPage" className="w-1/4 mr-11 mt-10">
            <LookHistoriesPage />
          </div>
        </div>

        <div id="ideaPostsPage">
          <IdeaPostsPage />
        </div>

        <div id="recruitedPage">
          <RecruitedPage />
        </div>
        <div id="contactPages">
          <ContactsPage />
        </div>
        <ScrollToTopButton />
      </div>
      <div className=" w-full h-[20px]">
        <FooterPage />
      </div>
    </div>
  );
}
