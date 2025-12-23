import "./globals.css";

export const metadata = {
  title: "GitHub Activity Dashboard",
  description: "Search GitHub repositories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-200 text-gray-100">
        <main className="max-w-3xl mx-auto px-4 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
