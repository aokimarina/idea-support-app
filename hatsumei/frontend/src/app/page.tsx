"use client";
import Image from "next/image";
import AllPostPage from "./publicPages/allPosts/page";
import RecruitedPage from "./publicPages/recruited/page";
import FooterPage from "./components/layouts/footer/page";
import HeaderPage from "./components/layouts/header/page";
import { useWindowSize } from "../../hooks/GetWindowSize";

export default function Home() {
  const { height, width } = useWindowSize();
  return (
    <div
      className={`flex flex-col  h-[${height}px] w-[${width}px] justify-center items-center`}
    >
      <div className="w-full sticky top-0 z-10">
        <HeaderPage />
      </div>

      <RecruitedPage />
      <AllPostPage />
      <FooterPage />
    </div>
  );
}
