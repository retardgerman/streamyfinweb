import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <header className="flex flex-row justify-between items-center p-4 lg:p-8">
        <div className="flex flex-row items-center gap-2 lg:gap-4">
          <Image
            src={"/assets/images/icon_new_withoutBackground.png"}
            width={40}
            height={40}
            alt=""
          />
          <p className="font-bold text-2xl">Streamyfin</p>
        </div>
        <div className="flex flex-row gap-4 lg:gap-8 items-center">
          <div className="h-6 lg:h-8 aspect-square flex items-center justify-center">
            <Link href="https://discord.gg/6sGx9J9">
            <Image
              src={"/assets/images/discord.png"}
              width={100}
              height={100}
              alt=""
              className="object-contain"
            />
            </Link>
          </div>
          <div className="h-6 lg:h-8 aspect-square flex items-center justify-center">
            <Link href="https://github.com/fredrikburmester/streamyfin">
            <Image
              src={"/assets/images/github.png"}
              width={100}
              height={100}
              alt=""
            />
            </Link> 
          </div>
        </div>
      </header>
      <section className="flex flex-col justify-center w-full items-center mb-12">
        <ScreenshotCarousel />
      </section>
      <section className="flex flex-col justify-center items-center px-4 mx-auto text-center mb-16">
        <p className="text-2xl font-bold text-balance">
          A modern Jellyfin client with support for downloads, Live TV, skip
          intro & credits, trickplay image and more!
        </p>
      </section>
      <section className="mb-16 flex flex-row flex-wrap mx-auto px-4 gap-4 justify-center">
        <a
          href="https://apps.apple.com/app/streamyfin/id6593660679"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/badges/app-store-badge.png"
            alt="Download on the App Store"
            className="h-10"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.fredrikburmester.streamyfin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/badges/google-play-badge.png"
            alt="Get it on Google Play"
            className="h-10"
          />
        </a>
      </section>
      <footer className=" text-white py-16  mt-auto bg-[#9334E9]">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Streamyfin. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/fredrikburmester/streamyfin"
              className="hover:underline"
            >
              GitHub
            </a>
            <a href="https://discord.gg/aJvAYeycyY" className="hover:underline">
              Discord
            </a>
            <a
              href="mailto:fredrik.burmester@gmail.com?subject=Streamyfin"
              className="hover:underline"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
