"use client";

import { Repo } from "@/types/repo";
import { useSession } from "next-auth/react";
import Link from "next/link";

type Props = {
  repo: Repo;
};

export default function RepoItem({ repo }: Props) {
  const {data: session} = useSession();

  return (
    <li className="p-4 bg-gray-100 border border-gray-800 rounded-lg">
      <div>
        <Link
          href={`/${repo.full_name}`}
          className="font-semibold hover:underline"
        >
          {repo.full_name}
        </Link>
        <p className="text-sm text-gray-400 mt-1">
          {repo.description ?? "No description"}
        </p>
      </div>

      {session && (
        <button
          type="button"
          aria-label="Star repository"
          className="text-gray-500 hover:text-yellow-500 transition"
        >
          ★
        </button>
      )}
    </li>
  );
}