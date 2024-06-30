"use client";

import { useTest } from "@/utils/react-query/query";
import { Button } from "./ui/button";

const Test = () => {
  const { mutate: getEpisode, data, isPending } = useTest();

  if (isPending) return <div>Loading...</div>;

  console.log("test", data);
  return (
    <Button onClick={() => getEpisode("go-go-loser-ranger-19139")}>
      Get Episode
    </Button>
  );
};

export default Test;
