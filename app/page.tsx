"use client";

import { useSearchParams, useRouter } from "next/navigation";
import SearchBox from "@/components/SearchBox";
import RepoList from "@/components/RepoList";

export default function HomePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const query = searchParams.get("q") ?? "";

  function handleSearch(value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    router.replace(`/?${params.toString()}`);
  }

  return (
    <section className="space-y-8">
      <SearchBox initialValue={query} onSearch={handleSearch} />
      <RepoList query={query} />
    </section>
  );
}
