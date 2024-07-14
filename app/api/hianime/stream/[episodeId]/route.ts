import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { episodeId: string } }
) {
  const ep = request.nextUrl.searchParams.get("ep");
  const server = request.nextUrl.searchParams.get("server");
  const sub = request.nextUrl.searchParams.get("sub") || "sub";
  const episodeId = params.episodeId;
  const key = process.env.HIANIME_API_KEY;
  const host = process.env.HIANIME_API_HOST;

  if (!key || !host) {
    return NextResponse.json({ error: "Missing API key or host" });
  }

  try {
    const res = await fetch(
      `https://hianime.p.rapidapi.com/anime/episode-srcs?id=${episodeId}?ep=${ep}&server=vidstreaming&category=${sub} `,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": key,
          "x-rapidapi-host": host,
        },
        next: {
          revalidate: 2629800, // 1 month in seconds
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return NextResponse.json(await res.json());
  } catch (error) {
    return NextResponse.json({
      error: "Failed to fetch data",
      episodeId,
      ep,
      server,
      sub,
    });
  }
}
