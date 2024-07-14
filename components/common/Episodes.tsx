import { IEpisode } from "@/types/hiAnime";
import { useEffect } from "react";

const DisplayEpisodes = ({
  number,
  episodeId,
  title,
  selectedEp,
  setSelectedEp,
  getStreamInfo,
  watchNow = false,
  totalEpisodes,
  index,
}: IEpisode & {
  setSelectedEp: (episodeId: number) => void;
  selectedEp: number;
  getStreamInfo: (episodeId: string) => void;
  watchNow?: any;
  totalEpisodes: number;
  index: number;
}) => {
  const selected = index + 1 === selectedEp;

  const handleClick = () => {
    if (!selected) {
      setSelectedEp(index + 1);
      getStreamInfo(`${episodeId}&server=hd-1&sub=sub`);
      console.log("clicked ", `${episodeId}&server=hd-1&sub=sub`);
    }
  };

  useEffect(() => {
    if (selected && totalEpisodes && watchNow == "true") {
      getStreamInfo(`${episodeId}&server=hd-1&sub=sub`);
      console.log("I run");
    }
  }, [selectedEp]);

  return (
    <div
      onClick={() => handleClick()}
      className={`md:max-w-[500px] w-full rounded px-2 py-1 cursor-pointer ${
        selected ? " bg-blue-900" : "bg-sBackground"
      }`}
    >
      <span className=" text-orange-400">Episode {number}</span> {title}
    </div>
  );
};

export default DisplayEpisodes;
