import Link from "next/link";
import Image from "next/image";
import logo from "@/public/loopstudios/logo.svg";

/*
FEATURES:
1. use hamburger menu in small screen
2. the bottom of the image is darker, and it has a gradient color from bottom to top
3. hover on the image, it will has a opacity and it also will scale up;
4. in the small screen, we will use another colloction of images;
*/

/*
1. 如果需要使用响应式，即允许屏幕宽度进行缩放，那么宽度需要使用max-w，否则当宽度变小时，浏览器会缩放整个页面，导致字体，图片都变小；
2. 使用响应式宽度，一般是这两个组合：w-full max-w-[1200px]
*/

function LoopStudios() {
  return (
    <>
      {/* hero section */}
      <div className="w-full max-w-[1200px] mx-auto px-6 py-12 md:px-0 bg-slate-800 bg-[url('/loopstudios/mobile/image-hero.jpg')] md:bg-[url('/loopstudios/desktop/image-hero.jpg')] bg-no-repeat bg-cover bg-center md:bg-cover md:bg-no-repeat">
        <nav className="flex items-center justify-between px-12">
          <Image src={logo} alt="logo" />
          <ul className="flex space-x-8 text-white font-bold">
            <li className="group">
              <Link href="#" className="">
                About
              </Link>
              <div className="border-b mx-1  opacity-0 border-white group-hover:opacity-100 duration-500 "></div>
            </li>
            <li className="group">
              <Link href="#" className="">
                Careers
              </Link>
              <div className="border-b mx-1  opacity-0 border-white group-hover:opacity-100 duration-500 "></div>
            </li>
            <li className="group">
              <Link href="#" className="">
                Events
              </Link>
              <div className="border-b mx-1  opacity-0 border-white group-hover:opacity-100 duration-500 "></div>
            </li>
            <li className="group">
              <Link href="#" className="">
                Products
              </Link>
              <div className="border-b mx-1  opacity-0 border-white group-hover:opacity-100 duration-500 "></div>
            </li>
            <li className="group">
              <Link href="#" className="">
                Support
              </Link>
              <div className="border-b mx-1  opacity-0 border-white group-hover:opacity-100 duration-500 "></div>
            </li>
          </ul>
        </nav>
      </div>

      {/* leader section */}

      {/* creation section */}

      {/* footer */}
    </>
  );
}

export default LoopStudios;
