import Link from "next/link";
import React from "react";

const HeaderPage = () => {
  return (
    <section className="flex flex-row justify-center items-center w-full h-full pt-10 pb-10 bg-gray-300 relative">
      <div className="absolute right-0 mr-4">
        <Link href="login">
          <button className="font-bold text-[20px] border pr-3 pl-3">
            login
          </button>
        </Link>
      </div>
      <div className="font-bold text-[40px]">---- HATSUMEI ---💡</div>
    </section>
  );
};

export default HeaderPage;
