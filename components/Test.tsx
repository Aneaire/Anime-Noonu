"use client";

import { useTest } from "@/utils/react-query/query";
import { Button } from "./ui/button";

const Test = () => {
  const { mutate: getEpisode, data, isPending } = useTest();

  if (isPending) return <div>Loading...</div>;

  console.log("test", data);
  return (
    <Button
      onClick={() =>
        getEpisode(
          "my-hero-academia-season-7-19146?ep=125711&server=hd-1&sub=sub"
          // "classroom-of-the-elite-iii-18880?ep=114913"
        )
      }
    >
      Get Episode
    </Button>
  );
};

export default Test;
