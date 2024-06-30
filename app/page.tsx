import { LogoTitle } from "@/components/icons";

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
      <span className=" absolute top-4 left-5">
        <LogoTitle />
      </span>
      {/* <Home /> */}
    </div>
  );
}
