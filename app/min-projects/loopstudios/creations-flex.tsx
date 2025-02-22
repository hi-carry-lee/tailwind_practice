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
ABOUT THE BUTTON
1. the button on the top: display it in the big screen, hide it in small screen;
  the same to the bottom button;
  in the begining, I want to use the same button, but it seems this solution need more work to do;

  header container is flex layout, in the small screen, the button will be stretch from left to right, and we don't want this effect, so we use a div to wrap it. 
  then we need to use flex to adjust the button's position in the div based on the screen size 
  <div className="flex justify-center md:justify-end">
    <button className="px-10 py-3 uppercase border-2 border-black hover:text-white hover:bg-black font-semibold tracking-wider ">
      see all
    </button>
  </div>

ABOUT THE LETTER SPACING
1. if the default value from TailWind CSS，you can define a new variable in the tailwind.config.js


FEATURES
1. the bottom of the image is darker;
  gradient

2. hover on the image, it will scale and has a white baclground color with opacity;

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
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <picture className="group relative overflow-hidden md:w-1/4">
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
            {/* item gradient */}
            {/* inset-0 = left-0 right-0 top-0 bottom-0 */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white  group-hover:opacity-70"></div>
            {/* item text */}
            <h5 className="absolute px-4 md:px-8 text-2xl w-32 md:w-22 uppercase duration-300 text-white group-hover:scale-110 group-hover:text-black bottom-4 ">
              Deep Earth
            </h5>
          </picture>
          <picture className="group relative overflow-hidden md:w-1/4 ">
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
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white  group-hover:opacity-70"></div>
            <h5 className="absolute px-4 md:px-8 text-2xl w-32 md:w-22 uppercase duration-300 text-white group-hover:scale-110 group-hover:text-black bottom-4 ">
              night arcade
            </h5>
          </picture>
          <picture className="group relative overflow-hidden md:w-1/4 ">
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
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white  group-hover:opacity-70"></div>
            <h5 className="absolute px-4 md:px-8 text-2xl w-42 md:w-22 uppercase duration-300 text-white group-hover:scale-110 group-hover:text-black bottom-4 ">
              Soccer Team VR
            </h5>
          </picture>
          <picture className="group relative overflow-hidden md:w-1/4 ">
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
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white  group-hover:opacity-70"></div>
            <h5 className="absolute px-4 md:px-8 text-2xl w-42 md:w-22 uppercase duration-300 text-white group-hover:scale-110 group-hover:text-black bottom-4 ">
              The Grid
            </h5>
          </picture>
        </div>
        <div className="flex flex-col md:flex-row  gap-4">
          <picture className="group relative overflow-hidden md:w-1/4 ">
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
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white  group-hover:opacity-70"></div>
            <h5 className="absolute px-4 md:px-8 text-2xl w-42 md:w-22 uppercase duration-300 text-white group-hover:scale-110 group-hover:text-black bottom-4 ">
              From Up Above VR
            </h5>
          </picture>
          <picture className="group relative overflow-hidden md:w-1/4 ">
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
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white  group-hover:opacity-70"></div>
            <h5 className="absolute px-4 md:px-8 text-2xl w-32 md:w-22 uppercase duration-300 text-white group-hover:scale-110 group-hover:text-black bottom-4 ">
              Pocket Borealis
            </h5>
          </picture>
          <picture className="group relative overflow-hidden md:w-1/4 ">
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
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white  group-hover:opacity-70"></div>
            <h5 className="absolute px-4 md:px-8 text-2xl w-32 md:w-22 uppercase duration-300 text-white group-hover:scale-110 group-hover:text-black bottom-4 ">
              The Curiosity
            </h5>
          </picture>
          <picture className="group relative overflow-hidden md:w-1/4 ">
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
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white  group-hover:opacity-70"></div>
            <h5 className="absolute px-4 md:px-8 text-2xl w-42 md:w-22 uppercase duration-300 text-white group-hover:scale-110 group-hover:text-black bottom-4 ">
              Make It Fisheye
            </h5>
          </picture>
        </div>
        <button className="px-10 py-3 uppercase border-2 border-black hover:text-white hover:bg-black font-semibold tracking-wider md:hidden mt-8 w-full">
          see all
        </button>
      </div>
    </section>
  );
}

export default CreationsFlex;
