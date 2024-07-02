import { IEpisode } from "@/types/hiAnime";

const DisplayEpisodes = ({
  number,
  episodeId,
  title,
  selectedEp,
  setSelectedEp,
  getStreamInfo,
}: IEpisode & {
  setSelectedEp: (episodeId: string) => void;
  selectedEp: string;
  getStreamInfo: (episodeId: string) => void;
}) => {
  const selected = episodeId === selectedEp;

  const handleClick = () => {
    if (!selected) {
      setSelectedEp(episodeId);
      getStreamInfo(`${episodeId}&server=hd-1&sub=sub`);
      console.log("clicked ", `${episodeId}&server=hd-1&sub=sub`);
    }
  };

  return (
    <div
      onClick={() => handleClick()}
      className={`md:max-w-[500px] w-full rounded px-2 py-1 cursor-pointer ${
        selected ? " bg-blue-900" : "bg-sBackground "
      }`}
    >
      <span className=" text-orange-400">Episode {number}</span> {title}
    </div>
  );
};

export default DisplayEpisodes;
