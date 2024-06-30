import Test from "@/components/Test";
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
    <div className="w-full relative">
      <span className=" scale-90 flex items-center gap-5 absolute top-4 left-5">
        <Logo />
        {"  "}
        <LogoTitle />
      </span>
      <Home />
      <Test />
    </div>
  );
}
