'use client';

import { useState } from 'react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/screenshot1.png',
    '/screenshot2.png',
    '/screenshot3.png',
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-gradient-to-b from-[#2a2660cc] to-transparent text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Streamyfin</h1>
          </div>
          <nav>
            <a href="#features" className="mr-6 hover:underline">Features</a>
            <a href="#screenshots" className="mr-6 hover:underline">Screenshots</a>
            <a href="#download" className="hover:underline">Download</a>
          </nav>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-20">
        <h3 className="text-3xl font-bold text-white text-center mb-12">Features</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-transparent p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-white">Seamless Playback</h4>
            <p className="text-white">Enjoy smooth playback of all your media files, with support for various formats and codecs.</p>
          </div>
          <div className="bg-transparent p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-white">Offline Access</h4>
            <p className="text-white">Download media to your device and watch it offline, wherever you are.</p>
          </div>
          <div className="bg-transparent p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-white">Cross-Platform Sync</h4>
            <p className="text-white">Sync your viewing progress across all your devices effortlessly.</p>
          </div>
        </div>
      </section>

      {/* Screenshots Section with Carousel */}
      <section id="screenshots" className="bg-transparent py-20">
        <h3 className="text-3xl font-bold text-white text-center mb-12">Screenshots</h3>
        <div className="container mx-auto flex items-center justify-center">
          <button onClick={handlePrev} className="text-3xl p-2 bg-[#4f6ed4cc] rounded-full mr-4">&lt;</button>
          <div className="w-full max-w-lg overflow-hidden relative">
            <img
              src={images[currentIndex]}
              alt={`Screenshot ${currentIndex + 1}`}
              className="shadow-lg rounded-lg object-cover w-full"
            />
          </div>
          <button onClick={handleNext} className="text-3xl p-2 bg-[#4f6ed4cc] rounded-full ml-4">&gt;</button>
        </div>
      </section>

      {/* Hero Section */}
      <section id="hero" className="bg-transparent text-center py-20">
        <h2 className="text-4xl font-bold text-white mb-6">Stream your media anywhere with Streamyfin</h2>
        <p className="text-lg text-white mb-8">The best Jellyfin client for iOS and Android. Access your media library seamlessly on your devices.</p>
        <div className="flex justify-center space-x-4">
          {/* Apple App Store Badge */}
          <a href="https://apps.apple.com/your-app-link" target="_blank" rel="noopener noreferrer">
            <img src="/badges/app-store-badge.png" alt="Download on the App Store" className="h-12"/>
          </a>
          {/* Google Play Store Badge */}
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
