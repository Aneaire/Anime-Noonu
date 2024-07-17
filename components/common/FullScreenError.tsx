import error from "@/public/error.gif";
import Image from "next/image";

const FullScreenError = () => {
  return (
    <div className=" w-full h-[90vh] flex flex-col items-center justify-center">
      <div className=" relative w-[50%] aspect-video ">
        <Image src={error} alt="loading" fill className=" rounded-md" />
      </div>
      <h1 className=" text-title-lg py-4">Something went wrong</h1>
    </div>
  );
};

export default FullScreenError;
