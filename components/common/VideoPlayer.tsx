import { IStream } from "@/types/hiAnime";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { TrackProps } from "react-player/file";

interface VideoPlayerProps {
  streamInfo: IStream;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ streamInfo }) => {
  const playerRef = useRef<ReactPlayer>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [trackList, setTrackList] = useState<TrackProps[]>([]);

  //   useEffect(() => {
  //     if (playerRef.current && videoRef.current && streamInfo.tracks) {
  //       const videoElement = videoRef.current;

  //       // Clear existing tracks
  //       while (videoElement.firstChild) {
  //         videoElement.removeChild(videoElement.firstChild);
  //       }

  //       // Add new tracks
  //       streamInfo.tracks.forEach((track, index) => {
  //         const trackElement = document.createElement("track");
  //         trackElement.kind = track.kind;
  //         trackElement.label = track.label;
  //         trackElement.src = track.file;
  //         if (index === 0) {
  //           trackElement.default = true;
  //         }
  //         videoElement.appendChild(trackElement);
  //       });
  //     }
  //   }, [streamInfo]);

  //   useEffect(() => {
  //     streamInfo.tracks.forEach((track, index) => {
  //       const english = track.label === "English";
  //       setTrackList((prev) => [
  //         ...prev,
  //         {
  //           src: track.file,
  //           kind: "subtitles",
  //           srcLang: track.label,
  //           label: track.label,
  //           default: english,
  //         },
  //       ]);
  //     });
  //   }, [streamInfo.tracks]);
  console.log(VTTCue);
  const handlePlayerReady = () => {
    const videoElement =
      playerRef.current?.getInternalPlayer() as HTMLVideoElement;
    if (videoElement) {
      // Type assertion to bypass the read-only constraint
      (videoRef as React.MutableRefObject<HTMLVideoElement | null>).current =
        videoElement;
    }
  };

  return (
    <div className="video-player-wrapper">
      <ReactPlayer
        ref={playerRef}
        url={streamInfo.sources[0].url}
        controls
        playing={false}
        width="100%"
        height="auto"
        onReady={handlePlayerReady}
        config={{
          file: {
            tracks: [
              {
                kind: "subtitles",
                src: streamInfo.tracks[0].file,
                label: streamInfo.tracks[0].label,
                srcLang: "en",
                default: true,
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
