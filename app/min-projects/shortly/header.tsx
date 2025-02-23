import Image from "next/image";
import Link from "next/link";
import logo from "@/public/shortly/logo.svg";

interface Props {
  container: string;
}

function Header({ container }: Props) {
  return (
    <header>
      <nav
        className={`${container} relative mx-auto p-6 flex items-center justify-between`}
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
      </nav>
    </header>
  );
}

export default Header;
