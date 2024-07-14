import { baseUrl } from "@/utils/server";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const key = process.env.HIANIME_API_KEY;
  const host = process.env.HIANIME_API_HOST;

  if (!key || !host) {
    return NextResponse.json({ error: "Missing API key or host" });
  }

  try {
    const res = await fetch(`${baseUrl}/anime/info?id=${id}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": key,
        "x-rapidapi-host": host,
      },
      next: {
        revalidate: 60 * 60 * 24 * 30,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return NextResponse.json(await res.json());
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" });
  }
}
