"use client";

import { useRouter } from "next/navigation";
import { Logo, LogoTitle } from "../icons";

const Header = () => {
  const router = useRouter();
  return (
    <div className=" flex items-center justify-between w-full h-fit px-5 bg-sBackground">
      <span
        onClick={() => router.push("/")}
        className=" flex scale-75 lg:scale-85 -ml-3 items-center gap-5"
      >
        <Logo />
        <LogoTitle />
      </span>
      <h5 className="font-jolly text-2xl">
        <span className=" text-btn-background">Credit:</span> Gel Santiago
      </h5>
    </div>
  );
};

export default Header;
