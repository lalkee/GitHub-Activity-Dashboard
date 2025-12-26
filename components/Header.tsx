import { auth } from "@/lib/auth";
import { signIn, signOut } from "@/lib/auth";

export default async function Header() {
  const session = await auth();

  return (
    <header className="w-full flex items-center px-6 py-4 border-b">

      <div className="ml-auto">
        {session ? (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition">
              Log out
            </button>
          </form>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn(undefined, { redirectTo: "/login" });
            }}
          >
            <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition">
              Log in
            </button>
          </form>
        )}
      </div>
    </header>
  );
}
