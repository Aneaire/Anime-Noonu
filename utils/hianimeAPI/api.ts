import { IHiAnimeHome } from "@/types/hiAnime";

const baseUrl = "https://hianime.p.rapidapi.com";

export const getHomeAnime = async () => {
  try {
    const res = await fetch(`${baseUrl}/anime/home`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "63790a5d20msha43e49feb7854bdp1c2950jsn66548ec4ee65",
        "x-rapidapi-host": "hianime.p.rapidapi.com",
      },
      next: {
        revalidate: 604800,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    console.log(data);
    return data as IHiAnimeHome;
  } catch (error) {
    console.log(error);
  }
};
