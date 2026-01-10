"use client";

import { useState } from "react";

type Props = {
  onSearch: (query: string) => void;
  initialValue: string;
};

export default function SearchBox({ onSearch, initialValue }: Props) {
  const [value, setValue] = useState(initialValue);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch(value);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 px-4 py-2 bg-gray-100 border border-gray-700 rounded-md"
      />
      <button className="px-4 py-2 bg-gray-100 border border-gray-700 rounded-md">
        Search
      </button>
    </form>
  );
}
