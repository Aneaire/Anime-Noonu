"use client";

import { useGetHomeAnime } from "@/utils/react-query/query";
// import emblaCarouselAutoplay from "embla-carousel-autoplay";
import AnimeCard from "../AnimeCard";
import SpotlightCards from "../SpotLightAnime";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Home = () => {
  // const plugin = useRef(
  //   emblaCarouselAutoplay({ delay: 6000, stopOnInteraction: true })
  // );
  const { data: homeAnime, isLoading, isError } = useGetHomeAnime();

  if (isLoading)
    return (
      <div className=" flex-1 items-start justify-center text-2xl font-bold">
        Loading...
      </div>
    );
  console.log(homeAnime);

  return (
    <div className=" w-full">
      <Carousel
        opts={{ loop: true }}
        // plugins={[plugin.current]}
        className=" w-full border-none"
      >
        <CarouselContent>
          {homeAnime?.spotlightAnimes?.map((anime) => (
            <CarouselItem className=" w-full" key={anime.id}>
              <SpotlightCards key={anime.id} {...anime} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className=" flex gap-5 pt-16 overflow-x-hidden">
        <AnimeCard />
      </div>
      {/* {isError && <NodataToShow />} */}
    </div>
  );
};

export default Home;
