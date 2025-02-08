import Image from "next/image";
import AppleWatch from "@/public/min-projects/apple-watch.jpg";
import { HiOutlineShoppingCart, HiOutlineHeart } from "react-icons/hi2";

/** 
 1. the label with black background: in the small screen, it will expand to all the width;
    use a div to wrap it will solve this issue.
    I believe it's caused by the flex property.

 2. about the button with blut background, I didn't follow the way that Instructor used, since it will shift the while content a little. the current approach has the same effect, and I believe it's more simple

 3. tracking-wide: used to set up the distance between words
  */

function ProductModelPage() {
  return (
    // global container
    <div className="flex justify-center items-center bg-slate-100 min-h-screen">
      {/* card container */}
      <div className="flex flex-col justify-center p-6 m-6 rounded-2xl shadow-2xl space-y-10 bg-white md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
        {/* image container */}
        <div className="flex justify-center items-start">
          <Image
            src={AppleWatch}
            alt="subaru sti car"
            className="w-72 h-auto hover:scale-105 duration-300"
          />
        </div>

        {/* content container */}
        <div className="flex flex-col space-y-6 text-center md:text-left">
          {/* label & title container */}
          <div className="flex flex-col mb-2 space-y-6">
            <div>
              {/* why adding this div⭐⭐⭐ */}
              <label className="bg-black text-white text-sm rounded-full px-4 py-2">
                Free Shipping
              </label>
            </div>
            {/* title */}
            <h2 className="text-3xl max-w-sm font-medium">
              The Most Beautiful Watch You Ever Have
            </h2>
          </div>

          {/* price container */}
          <div className="flex flex-col text-center mb-4 space-y-3 md:text-left">
            <p className="line-through text-xl">$799</p>
            <p className="text-6xl font-bold">$599</p>
            <p className="text-lg font-light text-gray-400">
              This offer is valid until April 3rd or as long as stock lasts!
            </p>
          </div>

          {/* button container */}
          <div>
            {/* ⭐⭐⭐ */}
            <button className="w-full bg-blue-700 text-white border-b-8 border-b-blue-800 rounded-lg hover:bg-blue-800 transition-all duration-300">
              <div className="px-8 py-4 bg-blue-500 rounded-lg hover:translate-y-1 hover:bg-blue-800 transition-all duration-300 text-2xl font-medium tracking-wide">
                Add to cart
              </div>
            </button>
            {/* this is a simple version */}
            {/* <button className="px-8 py-4  w-full bg-blue-700 text-white border-b-8 border-b-blue-800 rounded-lg hover:translate-y-1 hover:bg-blue-800 transition-all duration-300">
              Add to cart
            </button> */}
          </div>

          {/* stock container */}
          <div className="flex items-center space-x-3 group">
            {/* ⭐⭐⭐ */}
            <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
            <div className="text-md">50+ pcs. in stock</div>
          </div>

          {/* Bottom Buttons Container */}
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-center">
            <button className="flex-1 px-8 py-4 border-2 border-slate-400 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center space-x-2 items-center">
                <span>
                  <HiOutlineShoppingCart className="text-3xl" />
                </span>
                <span className="text-lg">Add to Cart</span>
              </div>
            </button>
            <button className="flex-1 px-8 py-4 border-2 border-slate-400 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center space-x-2 items-center">
                <span>
                  <HiOutlineHeart className="text-3xl" />
                </span>
                <span className="text-lg">Add to Cart</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModelPage;
