"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  async function login(formData: FormData) {
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      window.location.href = "/";
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>

      <form action={login} className="flex flex-col gap-4">
        {error && (
          <p className="text-sm text-red-600 text-center">{error}</p>
        )}

        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md
                     focus:outline-none focus:ring-2 focus:ring-gray-800
                     focus:border-transparent"
        />

        <input
          name="password"
          type="password"
          required
          placeholder="Password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md
                     focus:outline-none focus:ring-2 focus:ring-gray-800
                     focus:border-transparent"
        />

        <button
          type="submit"
          className="w-full py-2 mt-2 bg-gray-800 text-white rounded-md
                     hover:bg-gray-900 transition-colors
                     focus:outline-none focus:ring-2 focus:ring-gray-800"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
