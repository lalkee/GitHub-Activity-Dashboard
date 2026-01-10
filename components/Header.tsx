"use client";

import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Header() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // full URL path including query
  const fullPath = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;

  return (
    <header className="w-full flex items-center px-6 py-4 border-b">
      <div className="ml-auto">
        {session ? (
          <button
            onClick={() => signOut({ callbackUrl: fullPath })}
            className="px-4 py-2 bg-gray-800 text-white rounded"
          >
            Log out
          </button>
        ) : (
          <button
            onClick={() => signIn(undefined, { callbackUrl: fullPath })}
            className="px-4 py-2 bg-gray-800 text-white rounded"
          >
            Log in
          </button>
        )}
      </div>
    </header>
  );
}
