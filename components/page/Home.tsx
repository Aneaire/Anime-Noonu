"use client";

import { useGetHomeAnime, useTest } from "@/utils/react-query/query";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import DisplayList from "../DisplayList";
import SpotlightCards from "../SpotLightAnime";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

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
      <DisplayList title="Trending" list={homeAnime?.trendingAnimes} />
      <DisplayList
        title="Latest Episodes"
        list={homeAnime?.latestEpisodeAnimes}
      />
      <DisplayList title="Top This Week" list={homeAnime?.top10Animes.week} />
      <DisplayList title="Upcoming" list={homeAnime?.topUpcomingAnimes} />
      {/* {isError && <NodataToShow />} */}
    </div>
  );
};

export default Home;
