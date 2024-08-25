

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomePage() {
  const [currentFeature, setCurrentFeature] = useState(features[0]);

  const handlePrevFeature = () => {
    if (currentFeature) {
      setCurrentFeature(
        features[(features.indexOf(currentFeature) - 1 + features.length) % features.length]
      );
    }
  };

  const handleNextFeature = () => {
    if (currentFeature) {
      setCurrentFeature(
        features[(features.indexOf(currentFeature) + 1) % features.length]
      );
    }
  };

  return (
    <div className="bg-[#1e1a3f] text-white">
      {/* Header */}
      <header className="bg-gradient-to-b from-[#2a2660cc] to-transparent text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/icon_512x512.png" alt="Streamyfin Logo" className="h-16 mr-4" />
            <h1 className="text-4xl font-bold text-center">Streamyfin</h1>
          </div>
        </div>
      </header>

      {/* Screenshot Carousel */}
      <section id="screenshots" className="bg-transparent pt-10 pb-4">
        <div className="container mx-auto flex items-center justify-center">
          <Button
            onClick={handlePrevFeature}
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div className="w-full max-w-md overflow-hidden relative">
            {currentFeature && (
              <Image
                src={currentFeature.image}
                alt={currentFeature.title}
                width={300}
                height={300}
                className="mx-auto"
              />
            )}
          </div>
          <Button onClick={handleNextFeature} variant="ghost" size="icon" className="rounded-full">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Features Carousel */}
      <section id="features" className="container mx-auto py-6">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-lg overflow-hidden relative text-center">
            {currentFeature && (
              <div
                className="p-6 shadow-lg rounded-lg bg-transparent"
              >
                <h4 className="text-2xl font-semibold mb-4">{currentFeature.title}</h4>
                <p className="text-gray-300">{currentFeature.description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

       {/* Hero Section */}
       <section id="download" className="bg-transparent text-center py-20">
        <h2 className="text-4xl font-bold text-white mb-6">Stream your media anywhere with Streamyfin</h2>
        <p className="text-lg text-white mb-8">The best Jellyfin client for iOS and Android. Access your media library seamlessly on your devices.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://apps.apple.com/de/app/streamyfin/id6593660679" target="_blank" rel="noopener noreferrer">
            <img src="/badges/app-store-badge.png" alt="Download on the App Store" className="h-12"/>
          </a>
          <a href="https://play.google.com/store/apps/details" target="_blank" rel="noopener noreferrer">
            <img src="/badges/google-play-badge.png" alt="Get it on Google Play" className="h-12"/>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Streamyfin. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/fredrikburmester/streamyfin" className="hover:underline">GitHub</a>
            <a href="mailto:fredrik.burmester@gmail.com?subject=Streamyfin" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: 'Seamless Playback',
    description: 'Enjoy smooth playback of all your media files, with support for various formats and codecs.',
    image: '/assets/screenshots/screenshot1.png',
  },
  {
    title: 'Offline Access',
    description: 'Download media to your device and watch it offline, wherever you are.',
    image: '/assets/screenshots/screenshot2.png',
  },
  {
    title: 'Cross-Platform Sync',
    description: 'Sync your viewing progress across all your devices effortlessly.',
    image: '/assets/screenshots/screenshot3.png',
  },
];
