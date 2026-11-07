import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "My Blog",
  description: "A small Next.js practice project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", maxWidth: 720, margin: "0 auto", padding: 16 }}>
        <nav style={{ display: "flex", gap: 16, marginBottom: 24 }}>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        {children}
        <footer>© My Blog</footer>
      </body>
    </html>
  );
}