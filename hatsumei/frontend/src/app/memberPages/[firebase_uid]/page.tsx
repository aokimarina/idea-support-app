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
import { useParams} from "next/navigation";
import { useState, useEffect } from "react";
import ScrollToTopButton from "./ScrollToTopButton";

export default function MemberPage() {
  const params = useParams();
  const firebaseUid = params.firebase_uid as string;
  const [nickname, setNickname] = useState<string | null>(null);
  const { height, width } = useWindowSize();

  useEffect(() => {
    // 仮のデータ取得（実際はAPIで取得）
    const user = users.find((u) => u.firebase_uid === firebaseUid);
    if (user) setNickname(user.nickname);
  }, [firebaseUid]);

  return (
    <div
      className={'flex flex-col  h-[${height}px] w-[${width}px] justify-center items-center'}
    >
      <div className="w-full sticky top-0 z-10">
        <MembersHeaderPage />
        <h1>{nickname}さんのページ</h1>
      </div>

      <div>
        <div id="allPostPage">
          <AllPostPage />
        </div>
        <div id="ideaPostsPage">
          <IdeaPostsPage />
        </div>
        <div id="lookHistoriesPage">
          <LookHistoriesPage />
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
