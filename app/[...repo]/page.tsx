"use client";

import { useActivities } from "@/hooks/useActivities";
import { use } from "react";
import Link from "next/link";
import RepoItem from "@/components/RepoItem";
import ActivityItem from "@/components/ActivityItem";
import ActivityList from "@/components/ActivityList";

export default function RepoActivityPage({ params }: { params: Promise<{ repo: string[] }> }) {
  const { repo: pathSegments } = use(params);
  const [owner, repoName] = pathSegments;

  return (
    <div className="space-y-6">
      <Link href="/" className="text-sm text-gray-500 hover:underline">← Back to Search</Link>
      
      <h1 className="text-2xl font-bold text-gray-800">
        Activities for {owner}/{repoName}
      </h1>

      <ActivityList owner={owner} repoName={repoName}/>
    </div>
  );
}