"use client";

import IdeaPostsPage from "@/app/memberPages/[firebase_uid]/ideaPosts/page";
import LookHistoriesPage from "@/app/memberPages/[firebase_uid]/metoHistories/page";
import RecruitedPage from "@/app/publicPages/recruited/page";
import AllPostPage from "@/app/publicPages/allPosts/page";
import ContactsPage from "@/app/memberPages/[firebase_uid]/contacts/page";
import FooterPage from "@/app/components/layouts/footer";
import { useWindowSize } from "../../../../hooks/GetWindowSize";
import MembersHeaderPage from "./membersHeader";
// import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import ScrollToTopButton from "./ScrollToTopButton";
import SearchPosts from "./SearchPosts";
import { auth } from "@/firebase"; // firebase.jsからauthをインポート
import { getFirestore } from "firebase/firestore"; // Firestoreをインポート

const db = getFirestore(); // Firestoreインスタンスを作成
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function MemberPage() {
  // const params = useParams(); // Removed unused variable
  const [nickname, setNickname] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // ローディング状態を追加
  const { width } = useWindowSize();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid; // firebaseのuidを取得
        try {
          const userDoc = await getDoc(doc(db, "users", uid)); 
          if (userDoc.exists()) {
            setNickname(userDoc.data().nickname); 
          } else {
            console.log("ユーザーが見つかりません");
            setNickname("ユーザーが見つかりません");
          }
        } catch (error) {
          console.error("ユーザーデータの取得に失敗しました", error);
          setNickname("見つかりません");
        } finally {
          setLoading(false);
        }
      } else {
        setNickname("ログインしてください");
        setLoading(false);
      }
    });

    return () => unsubscribe(); 
  }, []);

  if (loading) {
    return <p>loading...</p>; 
  }

  return (
    <div
      className={`flex flex-col h-auto w-[${width}px] justify-center items-center`}
    >
      <div className="w-full sticky top-0 z-10">
        <MembersHeaderPage />
      </div>
      <p>{nickname}さんのページ</p>
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