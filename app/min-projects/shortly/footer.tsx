import Image from "next/image";
import logo from "@/public/shortly/logo.svg";
import { SlSocialTwitter } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Link from "next/link";

interface Props {
  container: string;
}

function Footer({ container }: Props) {
  return (
    <footer className="bg-slate-950 py-10">
      <div
        className={`${container} px-2 py-6 flex flex-col gap-12 md:flex-row  md:items-start items-center md:justify-center md:gap-4 lg:justify-between `}
      >
        <Image src={logo} alt="logo" />
        <div className="flex flex-col gap-6 md:flex-row md:gap-24 lg:gap-32 ">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li className="text-gray-500 text-lg hover:text-cyan-400 w-12">
                <Link href="#">Link shortening</Link>
              </li>
              <li className="text-gray-500 text-lg hover:text-cyan-400 w-12">
                <Link href="#">Branded links</Link>
              </li>
              <li className="text-gray-500 text-lg hover:text-cyan-400 w-12">
                <Link href="#">Analytics</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className="text-gray-500 text-lg hover:text-cyan-400 w-12">
                <Link href="#">Blog</Link>
              </li>
              <li className="text-gray-500 text-lg hover:text-cyan-400 w-12">
                <Link href="#">Developers</Link>
              </li>
              <li className="text-gray-500 text-lg hover:text-cyan-400 w-12">
                <Link href="#">Support</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="text-gray-500 text-lg hover:text-cyan-400 w-12">
                <Link href="#">About</Link>
              </li>
              <li className="text-gray-500 text-lg hover:text-cyan-400 w-12">
                <Link href="#">Our Team</Link>
              </li>
              <li className="text-gray-500 text-lg hover:text-cyan-400 w-12">
                <Link href="#">Careers</Link>
              </li>
              <li className="text-gray-500 text-lg hover:text-cyan-400 w-12">
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <ul className="flex gap-4 justify-center">
            <li>
              <Link href="#">
                <FaFacebookSquare
                  size={25}
                  className="bg-white text-black border-none"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <SlSocialTwitter size={25} className="bg-white" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <IoLogoInstagram size={25} className="bg-white" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
