"use client";

import { useState, useEffect } from "react";
import { useRepos } from "@/hooks/useRepos";
import RepoItem from "./RepoItem";
import Pagination from "./Pagination";

type Props = {
  query: string;
};

export default function RepoList({ query }: Props) {
  const [page, setPage] = useState(1);

  const { repos, totalCount, loading } = useRepos(query, page);
  const totalPages = Math.ceil(totalCount / 10);

  useEffect(() => {
    setPage(1);
  }, [query]);

  if (!query) return null;

  return (
    <div className="space-y-6">
      {loading && <p className="text-gray-400">Loading...</p>}

      {!loading &&<ul className="space-y-4">
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </ul>}

      <Pagination
        page={page}
        totalPages={totalPages}
        onPrev={() => setPage((p) => p - 1)}
        onNext={() => setPage((p) => p + 1)}
      />
    </div>
  );
}
