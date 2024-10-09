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
      title: "Overview",
      // Link the "Collection import plugin" to "https://github.com/lostb1t/jellyfin-plugin-collection-import"
      subtitle: "See your up-next, continue watching and recently added. With support for collections import plugin for easy importing of external collections",
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (5).png",
    },
    {
      title: "Search",
      // Link the JellySearch/MarlinSearch project's to "https://gitlab.com/DomiStyle/jellysearch" and "https://github.com/fredrikburmester/marlin-search" 
      subtitle: "Search for anything - with support for JellySearch and MarlinSearch for an effortless searching experience, no matter how bad you're spelling",
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (1).png",
    },
    {
      title: "Libraries",
      subtitle: "View all your libraries with every type of filter you could wish for to find the exact type of movie you want at that moment",
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (2).png",
    },
    {
      title: "Media",
      subtitle: "Watch or listen to any type of media you could want to, watch a movie, listen to music, or tune-in on Live-TV, all from your server in 1 app",
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (6).png",
    },
    {
      title: "Download",
      // Link the Optimized Server to "https://github.com/fredrikburmester/streamyfin-optimized-versions-server"
      subtitle: "Download support inside of the app including transcoded download, with support for background downloads feature using the optimizing server container!",
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (8).png",
    },
    {
      title: "Streaming Options",
      subtitle: "Customize the stream with how you wish to watch your content, change stream quality, audio, subtitle's, do you want 100Mbps or 100Kbps ",
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (9).png",
    },
    {
      title: "Chromecast",
      subtitle: "Full Support for Chromecast streaming on both Android and iOS, for when the mobile screen isn't good enough.",
      link: "/assets/screenshots/Screenshots_new/Iphone/Black/streamyfin_black (10).png",
    },
    {
      title: "Extended controls",
      // Add a screenshot for the Intro Skipper as it's a major feature so deserves it's own screenshot and section, then make this section more about the extended controls.
      // Link the into-skipper to "https://github.com/intro-skipper/intro-skipper"
      subtitle: "Extended video controls inside of the video player, including intergrated intro-skipper support so you can skip those intros/credits in your most recent show binge.",
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
                <p className={`text-sm text-gray-400`}>{image.subtitle}</p>
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
