"use client";

import { getHomeAnime } from "@/utils/hianimeAPI/api";
import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    const data = getHomeAnime();
    console.log(data);
  }, []);
  return <div>Test me baby</div>;
};

export default Test;
