"use client";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "../../../../../hooks/GetWindowSize";
import { metos, idea_posts } from "../../../../../mocks/page";
import { IdeaPostType, MetoType } from "@/types/types";

interface LookHistoryPageProps {
  firebase_uid: string; // 親コンポーネントから受け取る `uid`
}

const LookHistoryPage: React.FC<LookHistoryPageProps> = ({ firebase_uid }) => {
  const { height, width } = useWindowSize();
  const [likedPosts, setLikedPosts] = useState<IdeaPostType[]>([]);
  const [currentMetos, setCurrentMetos] = useState<MetoType[]>(metos);

  useEffect(() => {
    const fetchLikedPosts = async () => {
      const postIds = currentMetos
        .filter((meto: MetoType) => meto.user_id === firebase_uid) // 🔥 uid に紐づく Meto を取得
        .map((meto: MetoType) => meto.idea_post_id);

      const likedPosts = idea_posts.filter((post: IdeaPostType) =>
        postIds.includes(String(post.id))
      );

      setLikedPosts(likedPosts);
    };

    fetchLikedPosts();
  }, [currentMetos, firebase_uid]); // uid が変わるたびにデータを取得

  // Meto（いいね）を削除する関数
  const handleDeleteMeto = (postId: string) => {
    const updatedMetos = currentMetos.filter(
      (meto: MetoType) => meto.idea_post_id !== postId || meto.user_id !== firebase_uid
    );
    setCurrentMetos(updatedMetos);
    setLikedPosts(likedPosts.filter((post) => post.id !== postId));
  };

  return (
    <section
      className="flex justify-center items-center bg-white"
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <div className="w-full max-w-4xl px-4 py-6">
        <h1 className="flex justify-center text-3xl font-bold mb-10">
          -- Metoした投稿 --
        </h1>
        <ul className="space-y-4">
          {likedPosts.length > 0 ? (
            likedPosts.map((post, index) => {
              return (
                <li key={index} className="border-b pb-10">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-lg font-bold">{post.title}</div>
                      <div className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <p className="text-md mt-2">
                        {post.message.length > 40
                          ? post.message.substring(0, 40) + "..."
                          : post.message}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteMeto(post.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      削除
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
            <p>No liked posts found</p>
          )}
        </ul>
      </div>
    </section>
  );
};

export default LookHistoryPage;
