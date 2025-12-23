import { NextResponse } from "next/server";
import { octokit } from "@/lib/github";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("q");
  const page = Number(searchParams.get("page") ?? 1);
  const perPage = 10;

  if (!query) {
    return NextResponse.json({
      items: [],
      totalCount: 0,
    });
  }

  const response = await octokit.rest.search.repos({
    q: query,
    page,
    per_page: perPage,
  });

  return NextResponse.json({
    items: response.data.items,
    totalCount: response.data.total_count,
  });
}
