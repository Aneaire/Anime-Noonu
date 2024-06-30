import { ITrending } from "@/types/hiAnime";
import Image from "next/image";

const AnimeCard = ({ rank, name, poster, id }: ITrending) => {
  const nameSliced =
    name.length > 20 ? name.slice(0, 18) + ".." : name.slice(0, 20);
  const formattedRank = rank.toString().padStart(2, "0");

  return (
    <div className=" select-none w-fit bg-sBackground rounded flex">
      <div className="relative px-1 flex items-end">
        <h5 className=" font-jolly text-2xl text-rose-400">{formattedRank}</h5>
        <span className=" font-medium tracking-wide z-20 absolute bottom-7 left-2.5 origin-left -rotate-90 text-nowrap ">
          {nameSliced}
        </span>
      </div>
      <div className=" bg-black ">
        <div className=" w-[200px] h-[300px] relative object-cover">
          <Image
            draggable={false}
            src={poster}
            alt={name}
            fill
            sizes="2000px"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
