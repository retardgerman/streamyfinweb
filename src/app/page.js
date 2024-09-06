// The main page of the Streamyfin website.

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="bg-[#1e1a3f] text-white">
      <header className="bg-gradient-to-b from-[#2a2660cc] to-transparent text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/icon_512x512.png" alt="Streamyfin Logo" className="h-16 mr-4" />
            <h1 className="text-4xl font-bold text-center">Streamyfin</h1>
          </div>
        </div>
      </header>

      <section id="screenshots-features" className="bg-transparent pt-10 pb-4 relative">
        <div className="container mx-auto flex items-center justify-center relative">
          <div className="relative w-full max-w-lg">
            <Carousel opts={{ loop: true }} className="relative w-full">
              <CarouselContent>
                {features.map((feature, index) => (
                  <CarouselItem key={index} className="flex flex-col items-center text-center">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={300}
                      height={300}
                      className="mx-auto"
                    />
                    <div className="mt-4">
                      <h4 className="text-2xl font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="absolute left-3 top-1/2 transform -translate-y-1/2 -translate-x-full bg-white text-[#1e1a3f] text-4xl p-2 rounded-full">
                ◀
              </CarouselPrevious>
              <CarouselNext className="absolute right-3 top-1/2 transform -translate-y-1/2 translate-x-full bg-white text-[#1e1a3f] text-4xl p-2 rounded-full">
                ▶
              </CarouselNext>
            </Carousel>
          </div>
        </div>
      </section>

      <section id="download" className="bg-transparent text-center py-20 px-4 sm:px-0">
        <h2 className="text-4xl font-bold text-white mb-6">Stream your media anywhere with Streamyfin.</h2>
        <p className="text-lg text-white mb-8">The best Jellyfin client for iOS and Android. Access your media library seamlessly on your devices.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://apps.apple.com/de/app/streamyfin/id6593660679" target="_blank" rel="noopener noreferrer">
            <img src="/badges/app-store-badge.png" alt="Download on the App Store" className="h-12" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.fredrikburmester.streamyfin" target="_blank" rel="noopener noreferrer">
            <img src="/badges/google-play-badge.png" alt="Get it on Google Play" className="h-12" />
          </a>
        </div>
      </section>

      <footer className="bg-transparent text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Streamyfin. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/fredrikburmester/streamyfin" className="hover:underline">GitHub</a>
            <a href='https://discord.gg/aJvAYeycyY' className='hover:underline'>Discord</a>
            <a href="mailto:fredrik.burmester@gmail.com?subject=Streamyfin" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: 'Browse Your Media Library',
    description: 'Access your media library of your Jellyfin server, including movies, TV shows, and music.',
    image: '/assets/screenshots/screenshot4.png',
  },
  {
    title: 'Seamless Playback',
    description: 'Enjoy smooth playback of all your media files, with support for various formats and codecs.',
    image: '/assets/screenshots/screenshot3.png',
  },
  {
    title: 'Offline Access',
    description: 'Download media to your device and watch it offline, wherever you are.',
    image: '/assets/screenshots/screenshot2.png',
  },
];

