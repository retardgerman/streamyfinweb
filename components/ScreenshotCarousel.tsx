import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ScreenshotCarousel() {
  const images = [
    {
      title: "Home Screen",
      subtitle: "See your up-next, continue watching and recently added. With support for collections import plugin.",
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (5).png",
    },
    {
      title: "Search",
      subtitle: "Search for anything - with support for JellySearch and MarlinSearch",
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (1).png",
    },
    {
      title: "Libraries",
      subtitle: "View all your libraries with sort and filter just like you're used to.",
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (2).png",
    },
    {
      title: "",
      subtitle: "",
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (6).png",
    },
    {
      title: "Download movies and episodes with a click.",
      subtitle: "Downloads the HLS stream directly from Jellyfin, combining it into a single file with ffmpeg. With support for the optimized server.",
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (8).png",
    },
    {
      title: "Streaming Options",
      subtitle: "Select version, streaming quality, audio and subtitle tracks.",
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (9).png",
    },
    {
      title: "Chromecast",
      subtitle: "Support for Chromecast for both Android and iOS.",
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (10).png",
    },
    {
      title: "With support for extended controls",
      subtitle: "",
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (11).png",
    },
  ];
  return (
    <div className="w-[70vw] 2xl:w-[50vw]">
      <Carousel className="">
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
                <p className={`text-sm text-gray-600`}>{image.subtitle}</p>
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
