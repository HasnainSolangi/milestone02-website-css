// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Multi-page Website",
  description: "Simple multi-page website using Next.js with custom CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="site-container">
        <nav className="navbar">
          <div className="nav-brand">Hasnain Ahmed</div>
          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <main className="main-container">{children}</main>
        <footer className="footer">
          <p>&copy; 2024 Hasnain Ahmed. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
