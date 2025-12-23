"use client";

import { Repo } from "@/types/repo";

type Props = {
  repo: Repo;
};

export default function RepoItem({ repo }: Props) {
  return (
    <li className="p-4 bg-gray-100 border border-gray-800 rounded-lg">
      <a
        href={repo.html_url}
        target="_blank"
        className="font-semibold hover:underline"
      >
        {repo.full_name}
      </a>
      <p className="text-sm text-gray-400 mt-1">
        {repo.description ?? "No description"}
      </p>
    </li>
  );
}
