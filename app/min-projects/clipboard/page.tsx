import Link from "next/link";
import SectionFour from "./section-four";
import SectionOne from "./section-one";
import SectionThree from "./section-three";
import SectionTwo from "./section-two";
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram, FaTwitterSquare } from "react-icons/fa";
import logo from "@/public/clipboard/logo.svg";
// import BgDesktop from "@/public/clipboard/bg-header-desktop.png";
// import BgMobile from "@/public/clipboard/bg-header-mobile.png";

function Clipboard() {
  return (
    <div
      className="  
      w-full min-h-screen  
      bg-[url('/clipboard/bg-header-desktop.png')]  
      bg-no-repeat  
      bg-contain  
      max-[576px]:bg-[url('/clipboard/bg-header-mobile.png')]  
    "
    >
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <footer className="py-8 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:gap-20 gap-4 items-center justify-center text-center">
          <div className="w-16">
            <Image src={logo} alt="logo" className="w-full" />
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 flex-wrap max-w-lg">
            <Link
              href="#"
              className="hover:text-cyan-500 text-gray-500 px-4 py-2"
            >
              FAQs
            </Link>
            <Link
              href="#"
              className="hover:text-cyan-500 text-gray-500 px-4 py-2"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-cyan-500 text-gray-500 px-4 py-2"
            >
              Install Guide
            </Link>
            <Link
              href="#"
              className="hover:text-cyan-500 text-gray-500 px-4 py-2"
            >
              Contact Us
            </Link>
            <Link href="#" className="hover:text-cyan-500 text-gray-500  py-2">
              Press Kit
            </Link>
          </div>
          <div className="flex justify-center items-center gap-8">
            <Link href="#">
              <IoLogoFacebook className="text-3xl hover:text-cyan-400" />
            </Link>
            <Link href="#" className="text-2xl hover:text-cyan-400">
              <FaTwitterSquare />
            </Link>
            <Link href="#">
              <FaInstagram className="text-2xl hover:text-cyan-400" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Clipboard;
/*
1. max-w-3xl let the paragraph less wide than the header above
   with 'mx-auto', the paragraph will be centered;
   
2. when screen width is small than md, the button will be stretch in the horizontal because of the 'flex-col', from 'md' it will become 'flex-row', so in the horizontal the width is defined by the content

*/
