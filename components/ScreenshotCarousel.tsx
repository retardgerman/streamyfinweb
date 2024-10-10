import * as React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ScreenshotCarousel() {
  const images: { title: string; subtitle: React.ReactNode; link: string }[] = [
    {
      title: "Overview",
      subtitle: (
        <div>
          See your next-up, continue watching, and recently added. With support
          for  
          {" "}

          <Link
            href="https://github.com/lostb1t/jellyfin-plugin-collection-import"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline"
          >
            collections import plugin 
          </Link>{" "}
          for easy importing of external collections.  
        </div>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (5).png",
    },
    {
      title: "Search",
      subtitle: (
        <div>
          Search for anything - with support for{" "}
          <Link
            href="https://gitlab.com/DomiStyle/jellysearch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline"
          >
            JellySearch
          </Link>{" "}
          and{" "}
          <Link
            href="https://github.com/fredrikburmester/marlin-search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline"
          >
            MarlinSearch
          </Link>{" "}
          for an effortless searching experience.
        </div>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (1).png",
    },
    {
      title: "Libraries",
      subtitle: (
        <div>
          View all your libraries with every type of filter you could wish for
          to find the exact type of movie you want at that moment.
        </div>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (2).png",
    },
    {
      title: "Media",
      subtitle: (
        <div>
          Watch or listen to any type of media you want, whether it's movies,
          music, or Live-TV, all from your server in one app.
        </div>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (6).png",
    },
    {
      title: "Download",
      subtitle: (
        <div>
          Download support inside the app with transcoded downloads and
          background downloads, using the{" "}
          <Link
            href="https://github.com/fredrikburmester/streamyfin-optimized-versions-server"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline"
          >
            optimized server
          </Link>
          .
        </div>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (8).png",
    },
    {
      title: "Streaming Options",
      subtitle: (
        <div>
          Customize how you watch your content—change stream quality, audio, and
          subtitles, whether it's 100Mbps or 100Kbps.
        </div>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (9).png",
    },
    {
      title: "Chromecast",
      subtitle: (
        <div>
          Full support for Chromecast streaming on both Android and iOS, for
          when the mobile screen isn't enough.
        </div>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (10).png",
    },
    {
      title: "Extended controls",
      subtitle: (
        <div>
          Extended video controls inside the video player, including integrated{" "}
          <Link
            href="https://github.com/intro-skipper/intro-skipper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline"
          >
            intro-skipper
          </Link>{" "}
          support so you can skip intros/credits during your latest binge.
        </div>
      ),
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (11).png",
    },
  ];

  return (
    <div className="w-[70vw] 2xl:w-[50vw]">
      <Carousel className="" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="grid grid-rows-[auto_1fr_1fr] h-full w-full items-center justify-between text-center">
                <div className="h-full w-full flex flex-col items-center justify-center grow object-contain">
                  <Image
                    src={image.link}
                    alt={image.title}
                    width={300}
                    height={300}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className={`mt-2 text-lg font-semibold`}>{image.title}</h3>
                <div className={`text-sm text-gray-400`}>{image.subtitle}</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
