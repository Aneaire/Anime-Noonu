import loading from "@/public/loading.gif";
import Image from "next/image";

const Loading = () => {
  return (
    <div className=" w-screen min-h-screen flex items-center justify-center">
      <div className=" relative size-80">
        <Image src={loading.src} alt="loading" fill />
      </div>
    </div>
  );
};

export default Loading;
