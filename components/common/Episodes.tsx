import { IEpisode } from "@/types/hiAnime";

const DisplayEpisodes = ({ number, episodeId, title }: IEpisode) => {
  return (
    <div className=" max-w-[450px] bg-sBackground rounded px-2 py-1">
      <span className=" text-orange-400">Episode {number}</span> {title}
    </div>
  );
};

export default DisplayEpisodes;
