import Link from "next/link";
import Image from "next/image";
import logo from "@/public/loopstudios/logo.svg";

function Header() {
  return (
    <header className=" bg-[url('/loopstudios/mobile/image-hero.jpg')] md:bg-[url('/loopstudios/desktop/image-hero.jpg')] bg-no-repeat bg-cover bg-center md:bg-cover md:bg-no-repeat">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-12  ">
        <nav className="flex items-center justify-between ">
          <Image src={logo} alt="logo" />
          <ul className="space-x-8 text-white font-bold h-10 hidden md:flex">
            <li className="group">
              <Link href="#">About</Link>
              <div className="border-b mx-1  opacity-0 border-white group-hover:opacity-100 duration-500 "></div>
            </li>
            <li className="group">
              <Link href="#">Careers</Link>
              {/* another way of add border bottom */}
              {/* CSS 过渡需要从一个可计量的（确定的）值过渡到另一个可计量的值，所以这里动画不生效 */}
              <div className="mx-1 group-hover:border-b group-hover:border-b-blue-50 duration-500 "></div>
            </li>
            <li className="group">
              <Link href="#">Events</Link>
              {/* 这样才能生效：提前设置border，通过设置transparent，让它看不见 */}
              {/* no need transition, since duration-500 include transition */}
              <div className="mx-1 border-b border-b-transparent group-hover:border-b-blue-50 duration-500 "></div>
            </li>
            <li className="group">
              <Link href="#">Products</Link>
              <div className="border-b mx-1  opacity-0 border-white group-hover:opacity-100 duration-500 "></div>
            </li>
            <li className="group">
              <Link href="#">Support</Link>
              <div className="border-b mx-1  opacity-0 border-white group-hover:opacity-100 duration-500 "></div>
            </li>
          </ul>
          {/* TODO Hamburger button */}
        </nav>

        {/* TODO Mobile Mene here */}

        {/* text, leading-snug md:leading-snug看起来重复，但是不能省略，因为它们用在不同的字体大小上 */}
        {/* 当屏幕宽度小于p元素的宽度时，因为父容器的padding，让p元素看起来像是设置了居中 */}
        <p className="text-2xl sm:text-4xl md:text-5xl uppercase border-2 font-thin tracking-wider text-white border-white max-w-lg p-4 md:p-10 md:mx-0 my-32 leading-snug md:leading-snug">
          Impressive Experiences That Deliver
        </p>
      </div>
    </header>
  );
}

export default Header;
