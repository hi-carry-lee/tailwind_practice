import Image from "next/image";
import LogoSvg from "@/public/clipboard/logo.svg";

function Clipboard() {
  return (
    <section id="hero">
      <div className="max-w-5xl mx-auto text-center mb-40 px-10 pt-16">
        <Image src={LogoSvg} alt="logo" className="mx-auto my-16" />
        <h2 className="text-3xl font-bold mb-8 md:text-5xl">
          A history of everything you copy
        </h2>
        {/* 1️⃣  */}
        <p className="px-4 text-2xl text-gray-500 mb-8 max-w-3xl mx-auto">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="flex flex-col justify-center text-xl text-white md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          {/* 2️⃣*/}
          <button className="px-8 py-4 bg-cyan-500 rounded-full border-none">
            Download for iOS
          </button>
          <button className="px-8 py-4 bg-blue-500 rounded-full border-none">
            Download for Mac
          </button>
        </div>
      </div>
    </section>
  );
}

export default Clipboard;
/*
1. max-w-3xl let the paragraph less wide than the header above
   with 'mx-auto', the paragraph will be centered;
   
2. when screen width is small than md, the button will be stretch in the horizontal because of the 'flex-col', from 'md' it will become 'flex-row', so in the horizontal the width is defined by the content

*/
