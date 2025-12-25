import { octokit } from "@/lib/github";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const owner = searchParams.get("owner");
  const repo = searchParams.get("repo");

  if (!owner || !repo) {
    return NextResponse.json({ error: "Missing owner or repo" }, { status: 400 });
  }

  try {
    const { data } = await octokit.rest.activity.listRepoEvents({
      owner,
      repo,
      per_page: 20,
    });

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch activities" }, { status: 500 });
  }
}