"use client";

import { HeroContent } from "../sub/hero-content";
import { useEffect, useState } from "react";
import Image from "next/image";

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setIsLoading(false);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    const resizeListener = () => {
      checkMobile();
    };
    
    window.addEventListener('resize', resizeListener);
    
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col h-full w-full">
        {!isLoading && (
          <>
            {isMobile ? (
              <div className="relative w-full" style={{ minHeight: '350px', marginBottom: '-300px' }}>
                <div 
                  className="absolute top-[65px] left-0 w-full overflow-hidden"
                  style={{ height: '350px' }}
                >
                  <div className="w-full h-full relative">
                    <Image
                      src="/images/blackhole-fallback.webp"
                      alt="Black Hole Background"
                      fill
                      priority
                      className="w-full h-full object-cover rotate-180"
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="blackhole-container rotate-180 absolute top-[-340px] left-0 w-full h-full -z-20">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  preload="auto"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                >
                  <source src="/videos/blackhole.webm" type="video/webm" />
                </video>
              </div>
            )}
          </>
        )}
        <HeroContent />
      </div>
    </>
  );
};
