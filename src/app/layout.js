/// src/app/layout.js

import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
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
      <body className={roboto.className}>
      {page}
      <Analytics />
      </body>
    </html>
  );
}
