import { Logo, LogoTitle } from "@/components/icons";
import Home from "@/components/page/Home";

export default async function Index() {
  // const canInitSupabaseClient = () => {
  //   // This function is just for the interactive tutorial.
  //   // Feel free to remove it once you have Supabase connected.
  //   try {
  //     createClient();
  //     return true;
  //   } catch (e) {
  //     return false;
  //   }
  // };

  // const isSupabaseConnected = canInitSupabaseClient();
  // console.log(isSupabaseConnected);

  return (
    <div className="w-full relative section-padding">
      <span className=" scale-75 lg:scale-90 flex items-center gap-5 absolute top-1 left-0 lg:top-4 lg:left-5 z-10">
        <Logo />
        <LogoTitle />
      </span>
      <Home />
      {/* <Test /> */}
    </div>
  );
}
