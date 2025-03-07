'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

import logoDark from '@/public/fylo/logo-dark-mode.svg';
import logoLight from '@/public/fylo/logo-light-mode.svg';

function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // 确保组件已挂载
  useEffect(() => {
    setMounted(true);
  }, []);

  // 在组件未挂载时不渲染主题相关内容
  if (!mounted) {
    return null;
  }

  const isDarkMode = theme === 'dark';

  function handleToggleDarkMode() {
    setTheme(isDarkMode ? 'light' : 'dark');
  }

  return (
    <header>
      <div className="flex flex-col items-center justify-between gap-8 p-10 md:flex-row">
        <Image
          src={isDarkMode ? logoDark : logoLight}
          alt="logo"
          width={150}
          height={50}
        />
        <div className="mr-4 flex items-center gap-4 pl-4 md:pl-0">
          <Link href="#" className="hover:text-cyan-500">
            Features
          </Link>
          <Link href="#" className="hover:text-cyan-500">
            Testimonials
          </Link>
          <button
            onClick={handleToggleDarkMode}
            className="flex size-8 cursor-pointer items-center justify-center rounded-lg bg-gray-200 hover:bg-gray-400 dark:bg-gray-400"
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
