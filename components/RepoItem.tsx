"use client";

import { Repo } from "@/types/repo";
import Link from "next/link";

type Props = {
  repo: Repo;
};

export default function RepoItem({ repo }: Props) {
  return (
    <li className="p-4 bg-gray-100 border border-gray-800 rounded-lg">
      {/* Changed from <a> to <Link> */}
      <Link
        href={`/${repo.full_name}`}
        className="font-semibold hover:underline"
      >
        {repo.full_name}
      </Link>
      <p className="text-sm text-gray-400 mt-1">
        {repo.description ?? "No description"}
      </p>
    </li>
  );
}