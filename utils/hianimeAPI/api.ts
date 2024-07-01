import { IEpisodes, IHiAnimeHome, IInfo, IStream } from "@/types/hiAnime";
import axios from "axios";

export const getHomeAnime = async () => {
  try {
    const res = await fetch("/api/hianime");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    return data as IHiAnimeHome;
  } catch (error) {
    console.log(error);
  }
};

export const getInfo = async (id: string) => {
  try {
    const res = await axios.get("/api/hianime/info/" + id);

    return res.data as IInfo;
  } catch (error) {
    console.error(error);
  }
};

export const getEpisodes = async (id: string) => {
  try {
    const res = await axios.get("/api/hianime/episode/" + id);

    return res.data as IEpisodes;
  } catch (error) {
    console.error(error);
  }
};

export const getStreamInfo = async (id: string) => {
  try {
    const res = await axios.get("/api/hianime/stream/" + id);

    return res.data as IStream;
  } catch (error) {
    console.error(error);
  }
};

export const test = async (id: string) => {
  try {
    const res = await axios.get("/api/hianime/stream/" + id);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
