"use client";

import Divider from "@/components/common/Divider";
import DisplayEpisodes from "@/components/common/Episodes";
import { GreenBadge, NormalBadge, RedBadge } from "@/components/common/badge";
import { useGetEpisodes, useGetInfo } from "@/utils/react-query/query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

const Episodes = () => {
  const router = useParams();
  const { id } = router as { id: string };

  const [viewDesc, setViewDesc] = useState(false);

  const { data: info, isLoading: infoLoading } = useGetInfo(id);
  const { data: episodes, isLoading: episodesLoading } = useGetEpisodes(id);

  if (infoLoading && episodesLoading) {
    return <div>Loading...</div>;
  }
  console.log(episodes);
  console.log(info);
  return (
    <div className=" w-full  pt-5 ">
      <div className="flex flex-col sm:flex-row gap-5 w-full section-container flex-wrap">
        <div className="relative w-[250px] h-fit aspect-[11/16] mx-auto">
          <Image
            sizes="(100vw - 2rem) 100vw"
            src={info!.anime.info.poster}
            alt="cover"
            fill
            className=" rounded"
          />
        </div>
        <div className=" flex-1">
          <h5 className=" text-title-lg">{info?.anime.info.name}</h5>
          <p
            onClick={() => setViewDesc(!viewDesc)}
            className={` description ${viewDesc ? "" : "line-clamp-6"}`}
          >
            {info?.anime.info.description}
          </p>
          <span className=" flex gap-x-2 mt-3 text-nowrap">
            <GreenBadge>{info?.anime.info.stats.rating}</GreenBadge>
            <RedBadge>S-{info?.seasons.length}</RedBadge>
            <NormalBadge>{info?.anime.info.stats.episodes.sub}</NormalBadge>
            <NormalBadge>{info?.anime.info.stats.quality}</NormalBadge>
            <NormalBadge>{info?.anime.info.stats.duration}</NormalBadge>
          </span>
          <Divider />
          <p className=" text-sm font-poppins pt-1 font-thin opacity-90">
            Release Date : {info?.anime.moreInfo.aired}
          </p>
          <span className=" flex flex-wrap gap-y-1 gap-x-2 mt-2 text-nowrap">
            <p className=" font-kaisei font-semibold text-sm">Genre : </p>
            {info?.anime.moreInfo.genres.map((genre) => (
              <NormalBadge>{genre}</NormalBadge>
            ))}
          </span>
        </div>
      </div>

      {/* Episodes */}
      <section className=" flex w-full">
        <div className=" section-padding space-y-2 mt-5 basis-10/12">
          {episodes?.episodes.map((episode) => (
            <DisplayEpisodes
              key={episode.episodeId}
              number={episode.number}
              title={episode.title}
              episodeId={episode.episodeId}
              isFiller={episode.isFiller}
            />
          ))}
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Episodes;
