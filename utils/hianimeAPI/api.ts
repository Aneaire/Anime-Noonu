import { IHiAnimeHome } from "@/types/hiAnime";
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

export const test = async (id: string) => {
  try {
    const res = await axios.get("/api/hianime/episode/" + id);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
