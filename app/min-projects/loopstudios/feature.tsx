"use client";

import Image from "next/image";
import interactiveDesktop from "@/public/loopstudios/desktop/image-interactive.jpg";
import interactiveMobile from "@/public/loopstudios/mobile/image-interactive.jpg";
import { useMediaQuery } from "@/hooks/use-media-query";
/*
KEY PROPERTY
1. bg-white: the default value of background-color is transparent;
2. md:absolute md:right-0: 
    to make one element stay on top of another element when they overlap,  
    just flex is not enough, because in flex, when two elements meet, they will shrink instead of overlop;
    use absolute to position one element, so after they meet, they will overlap;

3. top-48: make the text shift to the bottom

*/

function Feature() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <section className="my-24">
      {/* container */}
      <div className="w-full max-w-[1200px] mx-auto relative px-6 flex flex-col md:flex-row md:px-0">
        {isDesktop ? (
          <Image src={interactiveDesktop} alt="interactive desktop" />
        ) : (
          <Image src={interactiveMobile} alt="interactive mobile" />
        )}

        <div className="top-48 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center md:text-5xl md:mt-0 md:text-left uppercase mx-auto">
            The leader in interactive VR
          </h2>
          <p className="text-gray-500 max-w-md text-center mx-auto md:ml-0 md:text-left">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Feature;
