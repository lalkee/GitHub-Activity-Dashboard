"use client";

import { useState } from "react";
import SearchBox from "@/components/SearchBox";
import RepoList from "@/components/RepoList";

export default function HomePage() {
  const [query, setQuery] = useState("");

  return (
    <section className="space-y-8">
      <SearchBox onSearch={setQuery} />
      <RepoList query={query} />
    </section>
  );
}
