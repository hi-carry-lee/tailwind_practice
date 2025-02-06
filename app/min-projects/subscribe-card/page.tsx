import Image from "next/image";
import Card from "@/public/subscribe-card.jpg";

function SubscribeCard() {
  return (
    // container
    <div className="bg-slate-600 h-screen flex justify-center items-center">
      {/* card container */}
      {/* miss mx-6 */}
      <div className="bg-slate-800 rounded-lg p-2 text-slate-50">
        {/* flex container */}
        {/* items-center will let the image not cover the whole space*/}
        <div className="flex flex-col md:flex-row rounded-l-xl gap-4 ">
          {/* image */}
          <Image
            src={Card}
            alt="subscribe card image"
            className="rounded-xl h-80 w-auto object-contain md:h-72 md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-300"
          />

          {/* content */}
          <div className="p-4 md:py-12 md:px-8">
            <h2 className="font-serif text-xl font-medium text-center text-white md:text-xl md:text-left">
              Get diet and fitness tips in your inbox
            </h2>
            <p className="max-w-xs mt-4 text-sm text-white text-center  md:text-left">
              Eat better and exercise better. Sign up for the Diet&Fitness
              newsletter.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-4 ">
              <input
                type="text"
                placeholder="Enter you email address"
                className="bg-slate-700 text-center rounded-sm p-2 placeholder:text-sm border border-slate-500 outline-0 placeholder:text-center md:placeholder:text-left"
              />
              <button className="px-5 py-3 bg-lime-500 text-gray-800 rounded-md md:p-4 hover:bg-lime-600 duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeCard;
