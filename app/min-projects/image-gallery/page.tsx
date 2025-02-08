import Link from "next/link";
import Image from "next/image";
import { HiMagnifyingGlass, HiOutlineBookmark } from "react-icons/hi2";
import Image1 from "@/public/min-projects/gallery/image1.jpg";
import Image2 from "@/public/min-projects/gallery/image2.jpg";
import Image3 from "@/public/min-projects/gallery/image3.jpg";
import Image4 from "@/public/min-projects/gallery/image4.jpg";
import Image5 from "@/public/min-projects/gallery/image5.jpg";
import Image6 from "@/public/min-projects/gallery/image6.jpg";
/** 
Key Points
1️⃣ how to add underline when hover on the link;
2️⃣ how to add text when hover on image;

TODO
1️⃣ create common component for image

*/
function ImageGallery() {
  return (
    // Global Container
    <div className="bg-cyan-50 min-h-screen flex justify-center items-center">
      {/* Card Container */}
      <div className="bg-white m-3 p-6 rounded-3xl shadow-2xl space-y-6 md:p-40">
        {/* Menu Container */}
        <nav className="">
          <ul className="flex flex-col justify-center items-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end text-2xl">
            <li className="group">
              <Link href="#">Vector</Link>
              <div className="border-2 mx-2 mt-2 opacity-0 border-black group-hover:opacity-100 duration-500 "></div>
            </li>
            <li className="group">
              <Link href="#">Illustrations</Link>
              <div className="border-2 mx-2 mt-2 opacity-0 border-black group-hover:opacity-100 duration-500"></div>
            </li>
            <li className="group">
              <Link href="#">Images</Link>
              <div className="border-2 mx-2 mt-2 opacity-0 border-black group-hover:opacity-100 duration-500"></div>
            </li>
            <li className="group">
              <Link href="#">Icons</Link>
              <div className="border-2 mx-2 mt-2 opacity-0 border-black group-hover:opacity-100 duration-500"></div>
            </li>
          </ul>
        </nav>

        {/* Search Container */}
        <div className="flex flex-col space-y-2 md:space-y-0 md:items-center md:flex-row md:justify-between">
          <div className="flex justify-between items-center border-b border-gray-400">
            <input
              type="text"
              placeholder="Search"
              className=" px-6 py-2 focus:outline-none placeholder:text-xl text-xl"
            />
            <button>
              <HiMagnifyingGlass className="text-2xl text-gray-400" />
            </button>
          </div>
          {/* ⭐⭐ can't use div to wrap the button */}
          <button className="bg-black text-white px-12 py-4 text-xl rounded-xl hover:bg-white border hover:text-black hover:border hover:border-black duration-300">
            Upload
          </button>
        </div>

        {/* Gallery Container */}
        <div className="grid gap-4 justify-center items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {/* Image */}
          <div className="relative group">
            <Image src={Image1} className="w-80" alt="image1" />
            <div className="absolute left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 duration-500">
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex flex-col text-white opacity-100">
                  <p className="text-sm ">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Share</p>
                </div>
                <HiOutlineBookmark className="text-white text-2xl" />
              </div>
            </div>
          </div>
          <div className="relative group">
            <Image src={Image2} className="w-80" alt="image1" />
            <div className="absolute left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 duration-500">
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex flex-col text-white opacity-100">
                  <p className="text-sm ">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Share</p>
                </div>
                <HiOutlineBookmark className="text-white text-2xl" />
              </div>
            </div>
          </div>
          <div className="relative group">
            <Image src={Image3} className="w-80" alt="image1" />
            <div className="absolute left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 duration-500">
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex flex-col text-white opacity-100">
                  <p className="text-sm ">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Share</p>
                </div>
                <HiOutlineBookmark className="text-white text-2xl" />
              </div>
            </div>
          </div>
          <div className="relative group">
            <Image src={Image4} className="w-80" alt="image1" />
            <div className="absolute left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 duration-500">
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex flex-col text-white opacity-100">
                  <p className="text-sm ">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Share</p>
                </div>
                <HiOutlineBookmark className="text-white text-2xl" />
              </div>
            </div>
          </div>
          <div className="relative group">
            <Image src={Image5} className="w-80" alt="image1" />
            <div className="absolute left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 duration-500">
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex flex-col text-white opacity-100">
                  <p className="text-sm ">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Share</p>
                </div>
                <HiOutlineBookmark className="text-white text-2xl" />
              </div>
            </div>
          </div>
          <div className="relative group">
            <Image src={Image6} className="w-80" alt="image1" />
            <div className="absolute left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 duration-500">
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex flex-col text-white opacity-100">
                  <p className="text-sm ">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Share</p>
                </div>
                <HiOutlineBookmark className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
