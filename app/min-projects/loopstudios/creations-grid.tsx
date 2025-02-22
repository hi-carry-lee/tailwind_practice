import Image from "next/image";
import deepEarthDesktop from "@/public/loopstudios/desktop/image-deep-earth.jpg";
import deepEarthMobile from "@/public/loopstudios/mobile/image-deep-earth.jpg";
import nightArcadeDesktop from "@/public/loopstudios/desktop/image-night-arcade.jpg";
import nightArcadeMobile from "@/public/loopstudios/mobile/image-night-arcade.jpg";
import soccerDesktop from "@/public/loopstudios/desktop/image-soccer-team.jpg";
import soccerMobile from "@/public/loopstudios/mobile/image-soccer-team.jpg";
import gridDesktop from "@/public/loopstudios/desktop/image-grid.jpg";
import gridMobile from "@/public/loopstudios/mobile/image-grid.jpg";
import fromUpAboveDesktop from "@/public/loopstudios/desktop/image-from-above.jpg";
import fromUpAboveMobile from "@/public/loopstudios/mobile/image-from-above.jpg";
import pocketBorealisDesktop from "@/public/loopstudios/desktop/image-pocket-borealis.jpg";
import pocketBorealisMobile from "@/public/loopstudios/mobile/image-pocket-borealis.jpg";
import curiosityDesktop from "@/public/loopstudios/desktop/image-curiosity.jpg";
import curiosityMobile from "@/public/loopstudios/mobile/image-curiosity.jpg";
import fisheyeDesktop from "@/public/loopstudios/desktop/image-fisheye.jpg";
import fisheyeMobile from "@/public/loopstudios/mobile/image-fisheye.jpg";

/*
A Comparison with creations-flex
1. here only need one grid container, but for flex, we need to flex container,
  if using one flex container, for two rows we need to add a flex-wrap to it;
  but with flex-wrap, when shrink the browser, then it will not shrink the image,
  but put the image to the next row it the width of container is not enough for current images;
  for example, current there are four images, when shrink the screen, the last image will appear in the next row,
  because the width is not enough and it has flex-wrap;

2. with flex, it need to add 'md:w-1/4' for every image container
  but for grid, it doesn't need this;

*/

function CreationsFlex() {
  return (
    <section>
      {/* container */}
      <div className="my-32 max-w-[1200px] mx-auto px-6 md:px-0">
        {/* header container */}
        <header className="flex flex-col md:flex-row justify-center md:justify-between mb-16">
          <h2 className="text-4xl uppercase text-center md:text-left font-thin">
            our creations
          </h2>

          <button className="px-10 py-3 uppercase border-2 border-black hover:text-white hover:bg-black font-semibold tracking-wider hidden md:inline-block">
            see all
          </button>
        </header>

        {/* images container   */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <picture className="group relative overflow-hidden ">
            <source
              media="(min-width: 768px)"
              srcSet={deepEarthDesktop.src}
              className="w-full duration-300 group-hover:scale-110"
            />
            <Image
              src={deepEarthMobile}
              alt="earth "
              className="w-full duration-300 group-hover:scale-110"
            />
          </picture>
          <picture className="group relative overflow-hidden ">
            <source
              media="(min-width: 768px)"
              srcSet={nightArcadeDesktop.src}
              className="w-full duration-300 group-hover:scale-110"
            />
            <Image
              src={nightArcadeMobile}
              alt="night arcade"
              className="w-full duration-300 group-hover:scale-110"
            />
          </picture>
          <picture className="group relative overflow-hidden ">
            <source
              media="(min-width: 768px)"
              srcSet={soccerDesktop.src}
              className="w-full duration-300 group-hover:scale-110"
            />
            <Image
              src={soccerMobile}
              alt="soccer player"
              className="w-full duration-300 group-hover:scale-110"
            />
          </picture>
          <picture className="group relative overflow-hidden ">
            <source
              media="(min-width: 768px)"
              srcSet={gridDesktop.src}
              className="w-full duration-300 group-hover:scale-110"
            />
            <Image
              src={gridMobile}
              alt="car"
              className="w-full duration-300 group-hover:scale-110"
            />
          </picture>
          <picture className="group relative overflow-hidden ">
            <source
              media="(min-width: 768px)"
              srcSet={fromUpAboveDesktop.src}
              className="w-full duration-300 group-hover:scale-110"
            />
            <Image
              src={fromUpAboveMobile}
              alt="road with many bend"
              className="w-full duration-300 group-hover:scale-110"
            />
          </picture>
          <picture className="group relative overflow-hidden ">
            <source
              media="(min-width: 768px)"
              srcSet={pocketBorealisDesktop.src}
              className="w-full duration-300 group-hover:scale-110"
            />
            <Image
              src={pocketBorealisMobile}
              alt="sky"
              className="w-full duration-300 group-hover:scale-110"
            />
          </picture>
          <picture className="group relative overflow-hidden ">
            <source
              media="(min-width: 768px)"
              srcSet={curiosityDesktop.src}
              className="w-full duration-300 group-hover:scale-110"
            />
            <Image
              src={curiosityMobile}
              alt="robot"
              className="w-full duration-300 group-hover:scale-110"
            />
          </picture>
          <picture className="group relative overflow-hidden ">
            <source
              media="(min-width: 768px)"
              srcSet={fisheyeDesktop.src}
              className="w-full duration-300 group-hover:scale-110"
            />
            <Image
              src={fisheyeMobile}
              alt="fish eye vision"
              className="w-full duration-300 group-hover:scale-110"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default CreationsFlex;
