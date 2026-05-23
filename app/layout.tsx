import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Nguyen Nhat Minh | AI Engineer",
  description: "Portfolio of Nguyen Nhat Minh, AI Engineer specializing in LLMs, Computer Vision, and Backend Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="background-effects">
          <div className="glow glow-1"></div>
          <div className="glow glow-2"></div>
        </div>
        <Navbar />
        <main>{children}</main>
        <footer className="footer glass">
          <p>© {new Date().getFullYear()} Nguyen Nhat Minh. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
