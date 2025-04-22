"use client";

import { HeroContent } from "../sub/hero-content";

export const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col h-full w-full">
        <video
          autoPlay
          muted
          loop
          className="blackhole-video rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>

        <HeroContent />
      </div>

      <style jsx>{`
.blackhole-video {
  top: -340px;
}
@media (max-width: 425px) {
  .blackhole-video {
    top: -370px !important;
  }
}
@media (max-width: 400px) {
  .blackhole-video {
    top: -390px !important;
  }
}
@media (max-width: 375px) {
  .blackhole-video {
    top: -410px !important;
  }
}
@media (max-width: 320px) {
  .blackhole-video {
    top: -430px !important;
  }
}

      `}</style>
    </>
  );
};
