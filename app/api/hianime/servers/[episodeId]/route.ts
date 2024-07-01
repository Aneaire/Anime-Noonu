import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { episodeId: string; ep: string } }
) {
  const episodeId = params.episodeId;
  const ep = request.nextUrl.searchParams.get("ep");
  const key = process.env.HIANIME_API_KEY;
  const host = process.env.HIANIME_API_HOST;

  if (!key || !host || !episodeId) {
    return NextResponse.json({ error: "Missing API key or host" });
  }

  try {
    const res = await fetch(
      `https://hianime.p.rapidapi.com/anime/servers?episodeId=${episodeId}?ep=${ep}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": key,
          "x-rapidapi-host": host,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return NextResponse.json(await res.json());
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Failed to fetch data",
      episodeId: episodeId,
      ep: ep,
    });
  }
}
