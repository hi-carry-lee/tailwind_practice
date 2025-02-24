"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/shortly/logo.svg";

interface Props {
  container: string;
}

function Header({ container }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  // 原本有 rotate-0， 它会和后面的 hamburgerMenuBottom 中的 -rotate-45冲突
  // 去掉 rotate-0 不会导致 duration-500失效
  const base =
    "absolute w-6 h-[2px] bg-gray-400 top-0 left-0 transition-all duration-500 ";
  const hamburgerMenuTop =
    base +
    `${isOpen ? " rotate-45 translate-x-[-6px] translate-y-[8px] " : ""}`;
  const hamburgerMenuMiddle =
    base + `${isOpen ? " hidden " : " translate-y-[8px] "}`;
  const hamburgerMenuBottom =
    base +
    `${
      isOpen
        ? " -rotate-45 translate-x-[-6px]  translate-y-[8px]"
        : " translate-y-[16px] "
    }`;
  const hamburger = ` cursor-pointer w-6 h-6 transition-all duration-200 relative ${
    isOpen ? " rotate-90 " : ""
  }`;

  function handleClick() {
    console.log("click button");
    setIsOpen((cur) => !cur);
  }

  function handleClickLink() {
    setIsOpen(false);
  }

  return (
    <header>
      <nav
        className={`${container} relative p-6 flex items-center justify-between`}
      >
        <div className="flex gap-20 items-center justify-center">
          <Image src={logo} alt="logo" />
          <ul className="hidden lg:flex gap-8 text-gray-500 duration-200 text-lg font-semibold">
            <li className="hover:text-gray-700  duration-200">
              <Link href="#">Features</Link>
            </li>
            <li className="hover:text-gray-700  duration-200">
              <Link href="#">Pricing</Link>
            </li>
            <li className="hover:text-gray-700  duration-200">
              <Link href="#">Resources</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex font-semibold items-center gap-8">
          <Link
            href="#"
            className="text-gray-400 text-lg hover:text-gray-700 duration-200"
          >
            Login
          </Link>
          <Link
            href="#"
            className="rounded-full px-6 py-2 text-lg  text-white bg-cyan-500 hover:bg-cyan-400 duration-200"
          >
            Sign Up
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={handleClick}
            id="menu-btn"
            className={`${hamburger}  z-40 block lg:hidden focus:outline-none`}
          >
            <span className={hamburgerMenuTop}></span>
            <span className={hamburgerMenuMiddle}></span>
            <span className={hamburgerMenuBottom}></span>
          </button>
        </div>

        {/* TODO Mobile Mene here */}
        {isOpen && (
          <nav className="w-3/4 mx-auto bg-violet-950  absolute top-20 left-20 px-4 py-8 rounded-2xl">
            <div className="text-xl text-white uppercase space-y-6  flex flex-col">
              <button
                className="hover:text-orange-700"
                onClick={handleClickLink}
              >
                <Link href="#">About</Link>
              </button>
              <button
                className="hover:text-orange-700"
                onClick={handleClickLink}
              >
                <Link href="#">Careers</Link>
              </button>
              <button
                className="hover:text-orange-700"
                onClick={handleClickLink}
              >
                <Link href="#">Events</Link>
              </button>
            </div>
            <div className="h-1 bg-gray-500 mx-2 my-6"></div>
            <div className="text-xl text-white flex flex-col items-center gap-4">
              <button
                className="hover:text-orange-700 "
                onClick={handleClickLink}
              >
                <Link href="#">Careers</Link>
              </button>
              <button
                className="hover:text-orange-700 bg-cyan-500 rounded-full py-2 w-full"
                onClick={handleClickLink}
              >
                Sign up
              </button>
            </div>
          </nav>
        )}
      </nav>
    </header>
  );
}

export default Header;
