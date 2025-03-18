"use client";
import React from "react";
import Link from "next/link";
import { useWindowSize } from "../../../../hooks/GetWindowSize";
import { users, idea_posts } from "../../../../mocks/page"; // モックデータをインポート

const RecruitedPage = () => {
  const { height, width } = useWindowSize();

  // 画像リスト
  const images = [
    "/irasto/買い物.png",
    "/irasto/とまと.png",
    "/irasto/自販機.png",
    "/irasto/自転車.png",
    "/irasto/イヤホン.png",
    "/irasto/カラオケ.png",
  ];

  return (
    <section>
      <div className="flex justify-center items-center mt-10 text-[25px]">
        -----💡💡 このサイトでこんなことが叶いました 💡💡-----
      </div>

      <div className="flex justify-center items-center mt-10 mb-20 bg-white relative">
        <div className="px-3 max-w-screen-xl w-full">
          <div className="flex overflow-x-auto py-4 px-2 gap-4">
            {" "}
            {idea_posts.map((post, index) => {
              const user = users.find((u) => u.id === post.user_id);
              const image = images[index % images.length];

              return (
                <div
                  key={post.id}
                  className="flex-none w-[calc(25%-20px)] h-auto p-4 bg-gray-100 shadow-lg rounded-lg"
                >
                  <div className="relative w-full">
                    <Link href={`/post/${post.id}`}>
                      <img
                        src={image}
                        alt="投稿画像"
                        className="w-full h-[200px] object-cover rounded-t-lg cursor-pointer"
                      />
                    </Link>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold">{post.title}</h3>

                      <div className="mt-2 text-sm text-gray-500">
                        by {user?.nickname}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitedPage;
