import Search from "@/components/common/Search";
import { Logo, LogoTitle } from "@/components/icons";
import Home from "@/components/page/Home";

export default async function Index() {
  return (
    <div className="w-full relative section-padding">
      <span className=" scale-75 lg:scale-90 flex items-center gap-5 absolute top-1 left-0 lg:top-4 lg:left-5 z-10">
        <Logo />
        <LogoTitle />
      </span>
      <Search />
      <Home />
      {/* <Test /> */}
    </div>
  );
}
