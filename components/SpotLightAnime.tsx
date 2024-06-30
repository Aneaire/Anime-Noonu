import { ISpotLight } from "@/types/hiAnime";
import Image from "next/image";
import { AccentBtn } from "./common/buttons";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const SpotlightCards = ({
  rank,
  name,
  poster,
  description,
  episodes,
  otherInfo,
}: ISpotLight) => {
  return (
    <div className=" select-none w-full h-[65vh] flex flex-col relative overflow-hidden">
      <div className=" mt-auto bg-background/10 ">
        <p className=" font-jolly font-normal text-4xl text-btn-background">
          # SpotLight {rank}
        </p>
        <h3 className=" relative text-title-xl font-extrabold font-poppins lg:w-[65%] line-clamp-2 ">
          {name}
        </h3>
        <span className=" space-x-3">
          {otherInfo.map((info) => (
            <Badge className=" my-2 px-3.5 bg-sBackground">{info}</Badge>
          ))}
        </span>
        <p className=" w-[90%] lg:w-[55%] text-lg line-clamp-3 font-kaisei font-normal select-none">
          {description}
        </p>
        <span className=" mt-10 flex gap-7">
          <AccentBtn>Watch Now</AccentBtn>
          <Button className=" bg-sBackground font-montserrat font-medium text-lg px-7">
            Episodes
          </Button>
        </span>
        <div className="absolute -top-5 w-full h-[40%] md:right-0  lg:w-7/12 md:h-[45%] lg:h-[60%] -z-10">
          <div className="mt-5 radial-gradient w-[100%] h-[150%] relative bg-background">
            <Image
              fill
              sizes="2000px"
              alt="top anime"
              className="-z-10 object-cover"
              src={poster}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightCards;
