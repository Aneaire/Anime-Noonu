import { Logo } from "../icons";

const Sidebar = () => {
  return (
    <div className=" hidden h-full md:flex w-fit px-2">
      <Logo />

      <div className=" bg-sBackground flex flex-col items-center justify-between fixed top-0 left-0 px-2 h-full py-4">
        <Logo />
        <p>nav</p>
        <p>profile</p>
      </div>
    </div>
  );
};

export default Sidebar;
