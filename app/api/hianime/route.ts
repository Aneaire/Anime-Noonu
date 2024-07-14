import { baseUrl } from "@/utils/server";
import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.HIANIME_API_KEY;
  const host = process.env.HIANIME_API_HOST;

  if (!key || !host) {
    return NextResponse.json({ error: "Missing API key or host" });
  }

  try {
    const res = await fetch(`${baseUrl}/anime/home`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": key,
        "x-rapidapi-host": host,
      },
      next: {
        revalidate: 72000, // 20 hours in seconds
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
