import Image from "next/image";
import AllPostPage from "./publicPages/allPosts/page";
import RecruitedPage from "./publicPages/recruited/page";
import FooterPage from "./components/layouts/footer/page";
import HeaderPage from "./components/layouts/header/page";

export default function Home() {
  return (
    <>
      <HeaderPage />
      <RecruitedPage />
      <AllPostPage />
      <FooterPage />
    </>
  );
}
