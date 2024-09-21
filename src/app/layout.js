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
  description: "A Jellyfin client for iOS and Android designed to elevate your media library, featuring parts refreshed interface, offline access, trickplay, PiP, plugins and more!",
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
