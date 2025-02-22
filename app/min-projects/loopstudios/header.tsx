"use client";

import { useState } from "react";
import Navigation from "./navigation";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const base =
    "absolute w-6 h-[2px] bg-white ro top-0 left-0 rotate-0 transition-all duration-500 ";
  const hamburgerMenuTop =
    base + `${isOpen ? "rotate-45 translate-x-[-6px] translate-y-[8px]" : ""}`;
  const hamburgerMenuMiddle =
    base + `${isOpen ? "hidden" : "translate-y-[8px]"}`;
  const hamburgerMenuBottom =
    base +
    `${
      isOpen
        ? "-rotate-45 translate-x-[-6px]  translate-y-[8px]"
        : "translate-y-[16px]"
    }`;
  const hamburger = `cursor-pointer w-6 h-6 transition-all duration-200 relative ${
    isOpen ? "rotate-90" : ""
  }`;

  function handleClick() {
    setIsOpen((cur) => !cur);
  }

  function handleClickLink() {
    setIsOpen(false);
  }
  return (
    <header className=" bg-[url('/loopstudios/mobile/image-hero.jpg')] md:bg-[url('/loopstudios/desktop/image-hero.jpg')] bg-no-repeat bg-cover bg-center md:bg-cover md:bg-no-repeat">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-12  ">
        <Navigation
          navParam="flex items-center justify-between"
          ulParam="space-x-8 text-white font-bold h-10 hidden md:flex"
        >
          <div className="md:hidden">
            <button
              onClick={handleClick}
              id="menu-btn"
              className={`${hamburger}  z-40 block md:hidden focus:outline-none`}
            >
              <span className={hamburgerMenuTop}></span>
              <span className={hamburgerMenuMiddle}></span>
              <span className={hamburgerMenuBottom}></span>
            </button>
          </div>
        </Navigation>

        {/* TODO Mobile Mene here */}
        {isOpen && (
          <nav className="w-screen bg-black h-screen absolute top-0 left-0">
            <ul className="text-xl text-white uppercase space-y-6 pl-10 pt-20">
              <li className="hover:text-orange-700" onClick={handleClickLink}>
                <Link href="#">About</Link>
              </li>
              <li className="hover:text-orange-700" onClick={handleClickLink}>
                <Link href="#">Careers</Link>
              </li>
              <li className="hover:text-orange-700" onClick={handleClickLink}>
                <Link href="#">Events</Link>
              </li>
              <li className="hover:text-orange-700" onClick={handleClickLink}>
                <Link href="#">Products</Link>
              </li>
              <li className="hover:text-orange-700" onClick={handleClickLink}>
                <Link href="#">Support</Link>
              </li>
            </ul>
          </nav>
        )}

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
