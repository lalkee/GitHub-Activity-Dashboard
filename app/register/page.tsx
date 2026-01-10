"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);

  async function register(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Something went wrong");
    } else {
      // Success: Redirect to login
      window.location.href = "/login";
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-6 text-center">Create Account</h1>

      <form action={register} className="flex flex-col gap-4">
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
          Register
        </button>
      </form>
      
      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-gray-900 font-semibold hover:underline">
          Sign In
        </a>
      </p>
    </div>
  );
}