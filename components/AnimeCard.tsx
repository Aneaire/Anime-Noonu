import Image from "next/image";
import { useState } from "react";

const AnimeCard = ({ rank, name, poster, id }: any) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const nameSliced =
    name.length > 20 ? name.slice(0, 18) + ".." : name.slice(0, 20);
  const formattedRank = rank && rank.toString().padStart(2, "0");

  return (
    <div className=" select-none w-fit bg-sBackground rounded flex">
      <div className="relative px-1 flex items-end">
        <h5 className=" font-jolly text-2xl text-rose-400">
          {rank ? formattedRank : "??"}
        </h5>
        <span className=" font-medium tracking-wide z-20 absolute bottom-7 left-2.5 origin-left -rotate-90 text-nowrap ">
          {nameSliced}
        </span>
      </div>
      <div className={` bg-slate-800 ${imageLoaded ? "" : " animate-pulse"}`}>
        <div className=" w-[200px] h-[300px] relative object-cover">
          <Image
            draggable={false}
            src={poster}
            alt={name}
            fill
            sizes="2000px"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
