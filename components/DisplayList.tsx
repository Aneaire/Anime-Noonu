import { useRouter } from "next/navigation";
import AnimeCard from "./AnimeCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const DisplayList = ({ list, title }: { list: any; title: string }) => {
  const router = useRouter();
  return (
    <div className=" gap-5 py-2 w-full">
      <h1 className=" font-montserrat font-extrabold text-2xl my-3 tracking-wide">
        <span className=" origin-center rotate-180"># </span>
        {title}
      </h1>
      <Carousel opts={{ loop: true }} className=" w-full">
        <CarouselContent>
          {list.map((anime: any) => (
            <CarouselItem
              onClick={() => router.push(`/anime/episodes/${anime.id}`)}
              className=" basis-1.5/12"
              key={anime.id}
            >
              <AnimeCard key={anime.id} {...anime} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" left-1 opacity-80 lg:scale-125 backdrop:blur-lg" />
        <CarouselNext className=" right-1 opacity-80 lg:scale-125 backdrop:blur-lg" />
      </Carousel>
    </div>
  );
};

export default DisplayList;
