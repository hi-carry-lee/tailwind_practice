import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight, HiMiniXMark } from "react-icons/hi2";
import loginImg from "@/public/min-projects/login-modal/image.jpg";
import fbImg from "@/public/min-projects/login-modal/facebook.png";
import googleImg from "@/public/min-projects/login-modal/google.png";
/*
1️⃣ regular div and the one in the flex container 
    regular div, its width is its parent container's width by default;
    div in the flex container, the default width is its content;
  
2️⃣ add flex to inline elememnt
    after adding flex to them, inline element will become block element;

3️⃣ don't use div to wrap elements unless necessary
    for example, the content in the facebook and google button

*/

function LoginPage() {
  return (
    // Global Container
    <div className="flex justify-center items-center bg-rose-50 min-h-screen">
      {/* Login Container */}
      <div className="relative flex flex-col m-6 bg-white space-y-10 shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        {/* Left Side */}
        {/* no need flex, since block element will from top to down by default */}
        <div className="p-6 md:p-20">
          <h2 className="text-5xl font-bold mb-8">Log In</h2>
          <p className="text-lg max-w-sm font-light text-gray-600 mb-12">
            Log in to your account to upload or download pictures, videos or
            music.
          </p>
          <div className="flex items-center mb-8">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full px-8 py-6 rounded-lg border border-gray-400 placeholder:text-xl"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 md:justify-between px-2">
            <Link href="#" className="text-lg font-thin text-cyan-600">
              Forgot password
            </Link>
            {/* 🔥 w-full let the button to occupy the while width, or it only occupy the width that its content need */}
            <button className="w-full md:w-auto rounded-lg bg-cyan-700 px-8 py-4 flex justify-center items-center gap-4 hover:opacity-80 duration-300 hover:-translate-y-0.5">
              <span className="text-white text-xl">Next</span>
              <HiArrowLongRight className="text-2xl text-white" />
            </button>
          </div>
          {/* 🌟 must use border-b, so it will be very thin*/}
          <div className="border-b border-b-gray-300 mb-8"></div>

          <p className="text-center mb-6 text-gray-500 text-md">
            or log in with
          </p>
          {/* 🔥 since there is flex-col, so in the horizontal direction, the button will be stretch to fulfill its parent's width */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            {/* 🔥On larger screens, the two buttons will appear side by side. By default, each button only takes up as much space as its content requires. However, we want these buttons to split the available width equally, so we apply the w-1/2 class to make each button occupy half of the total width*/}
            <button className="md:w-1/2 border px-6 py-3 flex justify-center items-center space-x-3 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-lg duration-300 ">
              <Image src={fbImg} alt="facebook icon" className="w-9" />
              <span>Facebook</span>
            </button>
            <button className="md:w-1/2 border px-6 py-3 flex justify-center items-center space-x-3 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-lg duration-300">
              <Image src={googleImg} alt="google icon" className="w-8" />
              <span>Google</span>
            </button>
          </div>
        </div>

        {/* Right Side, Only display in big screen */}
        <Image
          src={loginImg}
          alt="login image"
          width={430}
          className="hidden md:block"
        />
        {/* Close button */}
        <div className="absolute -top-8 right-1 md:top-2 md:right-2 flex justify-center items-center rounded-full bg-gray-300 hover:-translate-y-0.5 md:bg-white md:hover:bg-gray-300 transition-all duration-200">
          <HiMiniXMark className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
