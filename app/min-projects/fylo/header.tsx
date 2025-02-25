"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import logoDark from "@/public/fylo/logo-dark-mode.svg";
import logoLight from "@/public/fylo/logo-light-mode.svg";

function Header() {
  // 使用 next-themes 的 useTheme hook
  const { theme, setTheme } = useTheme();

  // 判断是否为暗黑模式
  const isDarkMode = theme === "dark";

  function handleToggleDarkMode() {
    // 切换主题
    setTheme(isDarkMode ? "light" : "dark");
  }

  return (
    <header>
      <div className="flex flex-col items-center md:flex-row justify-between p-10 gap-8">
        <Image
          src={isDarkMode ? logoDark : logoLight}
          alt="logo"
          width={150}
          height={50}
        />
        <div className="flex items-center gap-4 mr-4 pl-4 md:pl-0">
          <Link href="#" className="hover:text-cyan-500">
            Features
          </Link>
          <Link href="#" className="hover:text-cyan-500">
            Testimonials
          </Link>
          <button
            onClick={handleToggleDarkMode}
            className="cursor-pointer rounded-lg size-8 flex items-center justify-center bg-gray-200 dark:bg-gray-400 hover:bg-gray-400"
          >
            {isDarkMode ? (
              <MdOutlineLightMode className="text-xl text-gray-500" />
            ) : (
              <MdOutlineDarkMode className="text-xl" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
