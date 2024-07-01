import { Logo, LogoTitle } from "../icons";

const Header = () => {
  return (
    <div className=" flex items-center justify-between w-full h-fit px-5 bg-sBackground">
      <span className=" flex scale-75 lg:scale-90 -ml-3 items-center gap-5">
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
