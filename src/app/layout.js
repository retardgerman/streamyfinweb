/// src/app/layout.js

import { Space_Mono } from "next/font/google";
import "./globals.css";

const spacemono = Space_Mono({
  weight: ["400"],
  style: ["normal",],
  subsets: ["latin"] });

export const metadata = {
  title: "Streamyfin",
  description: "Stream your media anywhere with Streamyfin",
};

export default function RootLayout({ children: page }) {
  return (
    <html lang="en">
      <body className={spacemono.className}>{page}</body>
    </html>
  );
}
