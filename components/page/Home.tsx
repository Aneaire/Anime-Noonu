"use client";

import { useGetHomeAnime, useTest } from "@/utils/react-query/query";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import AnimeCard from "../AnimeCard";
import SpotlightCards from "../SpotLightAnime";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Home = () => {
  const router = useRouter();

  const plugin = useRef(
    emblaCarouselAutoplay({ delay: 6000, stopOnInteraction: true })
  );
  const { data: homeAnime, isLoading, isError } = useGetHomeAnime();
  const { data: test } = useTest();
  if (isLoading)
    return (
      <div className=" flex flex-1 h-screen items-start justify-center text-2xl font-bold">
        <p className=" m-auto">Loading...</p>
      </div>
    );
  console.log(test);

  return (
    <div className=" w-full">
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className=" w-full border-none"
      >
        <CarouselContent>
          {homeAnime?.spotlightAnimes?.map((anime) => (
            <CarouselItem className=" w-full" key={anime.id}>
              <SpotlightCards {...anime} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className=" gap-5 pt-10 w-full">
        <h1 className=" font-keisei text-2xl font-bold mb-1 tracking-wide">
          Trending
        </h1>
        <Carousel opts={{ loop: true }} className=" w-full">
          <CarouselContent>
            {homeAnime?.trendingAnimes?.map((anime) => (
              <CarouselItem
                onClick={() => router.push(`/anime/episodes/${anime.id}`)}
                className=" basis-1.5/12"
                key={anime.id}
              >
                <AnimeCard key={anime.id} {...anime} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" left-1 opacity-80 backdrop:blur-lg" />
          <CarouselNext className=" right-1 opacity-80 backdrop:blur-lg" />
        </Carousel>
      </div>
      <div className=" gap-5 pt-10 w-full">
        <h1 className=" font-keisei text-2xl font-bold mb-1 tracking-wide">
          New Episodes
        </h1>
        <Carousel opts={{ loop: true }} className=" w-full">
          <CarouselContent>
            {homeAnime?.latestEpisodeAnimes?.map((anime) => (
              <CarouselItem
                onClick={() =>
                  router.push(`/anime/episodes/${anime.id}?watchNow=true`)
                }
                className=" basis-1.5/12"
                key={anime.id}
              >
                <AnimeCard key={anime.id} {...anime} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" left-1 opacity-80 backdrop:blur-lg" />
          <CarouselNext className=" right-1 opacity-80 backdrop:blur-lg" />
        </Carousel>
      </div>
      <div className=" gap-5 pt-10 w-full">
        <h1 className=" font-keisei text-2xl font-bold mb-1 tracking-wide">
          Top This Week
        </h1>
        <Carousel opts={{ loop: true }} className=" w-full">
          <CarouselContent>
            {homeAnime?.top10Animes.today?.map((anime) => (
              <CarouselItem
                onClick={() => router.push(`/anime/episodes/${anime.id}`)}
                className=" basis-1.5/12"
                key={anime.id}
              >
                <AnimeCard key={anime.id} {...anime} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" left-1 opacity-80 backdrop:blur-lg" />
          <CarouselNext className=" right-1 opacity-80 backdrop:blur-lg" />
        </Carousel>
      </div>
      <div className=" gap-5 pt-10 w-full">
        <h1 className=" font-keisei text-2xl font-bold mb-1 tracking-wide">
          Upcoming
        </h1>
        <Carousel opts={{ loop: true }} className=" w-full">
          <CarouselContent>
            {homeAnime?.topUpcomingAnimes?.map((anime) => (
              <CarouselItem
                onClick={() => router.push(`/anime/episodes/${anime.id}`)}
                className=" basis-1.5/12"
                key={anime.id}
              >
                <AnimeCard key={anime.id} {...anime} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" left-1 opacity-80 backdrop:blur-lg" />
          <CarouselNext className=" right-1 opacity-80 backdrop:blur-lg" />
        </Carousel>
      </div>
      {/* {isError && <NodataToShow />} */}
    </div>
  );
};

export default Home;
