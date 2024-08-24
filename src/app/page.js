'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/assets/screenshots/screenshot1.png',
    '/assets/screenshots/screenshot2.png',
    '/assets/screenshots/screenshot3.png',
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-[#1e1a3f] text-white">
      {/* Header */}
      <header className="bg-gradient-to-b from-[#2a2660cc] to-transparent text-white py-4">
        <div className="container mx-auto flex flex-col justify-center items-center text-center">
          <img src="/icon_512x512.png" alt="Streamyfin Logo" className="h-20 mb-4" />
          <h1 className="text-4xl font-bold">Streamyfin</h1>
        </div>
      </header>

      {/* Screenshots Section with Carousel */}
      <section id="screenshots" className="bg-transparent py-20">
        <div className="container mx-auto flex items-center justify-center">
          <Button onClick={handlePrev} variant="ghost" size="icon" className="rounded-full">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div className="w-full max-w-lg overflow-hidden relative">
            <img
              src={images[currentIndex]}
              alt={`Screenshot ${currentIndex + 1}`}
              className="shadow-lg rounded-lg object-cover w-full"
            />
          </div>
          <Button onClick={handleNext} variant="ghost" size="icon" className="rounded-full">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-transparent p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Seamless Playback</h4>
            <p className="text-gray-300">Enjoy smooth playback of all your media files, with support for various formats and codecs.</p>
          </div>
          <div className="bg-transparent p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Offline Access</h4>
            <p className="text-gray-300">Download media to your device and watch it offline, wherever you are.</p>
          </div>
          <div className="bg-transparent p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Cross-Platform Sync</h4>
            <p className="text-gray-300">Sync your viewing progress across all your devices effortlessly.</p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section id="download" className="bg-transparent text-center py-20">
        <h2 className="text-4xl font-bold text-white mb-6">Stream your media anywhere with Streamyfin</h2>
        <p className="text-lg text-white mb-8">The best Jellyfin client for iOS and Android. Access your media library seamlessly on your devices.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://apps.apple.com/your-app-link" target="_blank" rel="noopener noreferrer">
            <img src="/badges/app-store-badge.png" alt="Download on the App Store" className="h-12"/>
          </a>
          <a href="https://play.google.com/store/apps/details?id=your.app.id" target="_blank" rel="noopener noreferrer">
            <img src="/badges/google-play-badge.png" alt="Get it on Google Play" className="h-12"/>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Streamyfin. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">GitHub</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
