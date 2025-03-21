"use client";

import IdeaPostsPage from "@/app/memberPages/[firebase_uid]/ideaPosts/page";
import LookHistoriesPage from "@/app/memberPages/[firebase_uid]/metoHistories/page";
import RecruitedPage from "@/app/publicPages/recruited/page";
import AllPostPage from "@/app/publicPages/allPosts/page";
import ContactsPage from "@/app/memberPages/[firebase_uid]/contacts/page";
import FooterPage from "@/app/components/layouts/footer";
import { useWindowSize } from "../../../../hooks/GetWindowSize";
import MembersHeaderPage from "./membersHeader";
import { useState, useEffect } from "react";
import ScrollToTopButton from "./ScrollToTopButton";
import SearchPosts from "./SearchPosts";
import { auth, db } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth"; 
import { doc, getDoc } from "firebase/firestore";

export default function MemberPage() {
  const [nickname, setNickname] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowSize();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("useEffect実行開始");
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("認証状態変更検知:", user ? "ユーザーあり" : "ユーザーなし");
      
      if (user) {
        const uid = user.uid;
        console.log("UID:", uid);
        
        try {
          console.log("Firestoreからデータ取得開始");
          const userDocRef = doc(db, "users", uid);
          const userDoc = await getDoc(userDocRef);
          
          console.log("データ取得結果:", userDoc.exists() ? "存在します" : "存在しません");
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log("取得データ:", userData);
            setNickname(userData.nickname || "名前なし");
          } else {
            console.log("ユーザードキュメントが存在しません");
            setNickname("ユーザーデータがありません");
            setError("ユーザー情報がデータベースに存在しません");
          }
        } catch (error: unknown) {
          console.error("データ取得エラー:", error);
          setNickname("データ取得失敗");
          if (error instanceof Error) {
            setError(`エラー: ${error.message}`);
          } else {
            setError("不明なエラーが発生しました");
          }
        } finally {
          setLoading(false);
        }
      } else {
        console.log("ユーザーがログインしていません");
        setNickname("ログインしてください");
        setLoading(false);
      }
    });

    return () => {
      console.log("クリーンアップ関数実行");
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <p className="text-center p-4">ユーザー情報を読み込み中...</p>;
  }

  return (
    <div className={`flex flex-col h-auto w-[${width}px] justify-center items-center`}>
      <div className="w-full sticky top-0 z-10">
        <MembersHeaderPage />
      </div>
      
      {error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      ) : null}
      
      <p className="text-xl my-4">{nickname}さんのページ</p>
      <div className="w-full mb-20">
        <SearchPosts />
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row">
          <div id="allPostPage" className="w-full md:w-3/4">
            <AllPostPage />
          </div>
          <div id="lookHistoriesPage" className="w-full md:w-1/4 mr-0 md:mr-11 mt-10">
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
      <div className="w-full h-[20px]">
        <FooterPage />
      </div>
    </div>
  );
}


// "use client";

// import IdeaPostsPage from "@/app/memberPages/[firebase_uid]/ideaPosts/page";
// import LookHistoriesPage from "@/app/memberPages/[firebase_uid]/metoHistories/page";
// import RecruitedPage from "@/app/publicPages/recruited/page";
// import AllPostPage from "@/app/publicPages/allPosts/page";
// import ContactsPage from "@/app/memberPages/[firebase_uid]/contacts/page";
// import FooterPage from "@/app/components/layouts/footer";
// import { useWindowSize } from "../../../../hooks/GetWindowSize";
// import MembersHeaderPage from "./membersHeader";
// import { useState, useEffect } from "react";
// import ScrollToTopButton from "./ScrollToTopButton";
// import SearchPosts from "./SearchPosts";
// import { auth, db } from "@/firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { UserType, IdeaPostType, MetoType} from "../../../types/types"
// import { users, idea_posts, metos } from "../../../../mocks/page"


// export default function MemberPage() {
//   const [nickname, setNickname] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const { width } = useWindowSize();
//   const [error, setError] = useState<string | null>(null);
//   const [userData, setUserData] = useState<UserType | null>(null);
  
 

//   useEffect(() => {

//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       console.log("認証状態変更検知:", user ? "ユーザーあり" : "ユーザーなし");
      
//       if (user) {
//         const uid = user.uid;
//         console.log("UID:", uid);
        
//         try {
//           if (users) {
//             // モックデータからユーザー情報を検索
//             console.log("モックデータからユーザー情報を検索");
//             const mockUser = users.find(u => u.firebase_uid === uid);
            
//             if (mockUser) {
//               console.log("モックユーザーを発見:", mockUser);
//               setNickname(mockUser.first_name);
//               setUserData(mockUser);
//           } else {

//             console.log("Firestoreからデータ取得開始");
//             const userDocRef = doc(db, "users", uid);
//             const userDoc = await getDoc(userDocRef);
            
//             console.log("データ取得結果:", userDoc.exists() ? "存在します" : "存在しません");
            
//             if (userDoc.exists()) {
//               const userData = userDoc.data();
//               console.log("取得データ:", userData);
//               setNickname(userData.nickname || "名前なし");
//               setUserData(userData);
//             } else {
//               console.log("ユーザードキュメントが存在しません");
//               setNickname("ユーザーデータがありません");
//               setError("ユーザー情報がデータベースに存在しません");
//             }
          
//         } catch (error: unknown) {
//           console.error("データ取得エラー:", error);
//           setNickname("データ取得失敗");
//           if (error instanceof Error) {
//             setError(`エラー: ${error.message}`);
//           } else {
//             setError("不明なエラーが発生しました");
//           }
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         console.log("ユーザーがログインしていません");
//         setNickname("ログインしてください");
//         setLoading(false);
//       }
//     });

//     return () => {
//       console.log("クリーンアップ関数実行");
//       unsubscribe();
//     };
//   }, [useMockData]);

//   if (loading) {
//     return <p className="text-center p-4">ユーザー情報を読み込み中...</p>;
//   }

//   return (
//     <div className={`flex flex-col h-auto w-[${width}px] justify-center items-center`}>
//       <div className="w-full sticky top-0 z-10">
//         <MembersHeaderPage />
//       </div>
      
//       {error ? (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//           {error}
//         </div>
//       ) : null}
      
//       <p className="text-xl my-4">{nickname}さんのページ</p>
//       <div className="w-full mb-20">
//         <SearchPosts />
//       </div>
//       <div className="w-full">
//         <div className="flex flex-col md:flex-row">
//           <div id="allPostPage" className="w-full md:w-3/4">
//             <AllPostPage userData={userData} />
//           </div>
//           <div id="lookHistoriesPage" className="w-full md:w-1/4 mr-0 md:mr-11 mt-10">
//             <LookHistoriesPage userData={userData} />
//           </div>
//         </div>

//         <div id="ideaPostsPage">
//           <IdeaPostsPage userData={userData} />
//         </div>

//         <div id="recruitedPage">
//           <RecruitedPage />
//         </div>
//         <div id="contactPages">
//           <ContactsPage userData={userData} />
//         </div>
//         <ScrollToTopButton />
//       </div>
//       <div className="w-full h-[20px]">
//         <FooterPage />
//       </div>
//     </div>
//   );
// }