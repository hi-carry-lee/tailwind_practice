import Link from "next/link";
import Navigation from "./navigation";
import { SlSocialTwitter } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-black">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-12 flex justify-between">
        <div>
          <Navigation
            navParam="flex flex-col gap-6"
            ulParam="flex gap-4 text-white font-bold h-10"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
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
          <p className="text-gray-600">
            &copy; 2022 Loopstudios. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
