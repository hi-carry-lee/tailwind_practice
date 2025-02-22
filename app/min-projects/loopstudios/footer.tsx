import Link from "next/link";
import Navigation from "./navigation";
import { SlSocialTwitter } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-black">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-12 ">
        <div className="flex flex-col md:flex-row  md:justify-between items-center gap-10">
          <div className="p-4">
            <Navigation
              navParam="flex flex-col gap-6 items-center md:items-start"
              // 🌻🌻🌻 因为这个代码是共用的，在Header组件中使用的是有，使用了h-10控制高度
              // 在这里复用的时候，因为代码是CV过来的，没有在意这个 h-10，导致排查了很久；
              ulParam="flex flex-col md:flex-row gap-4 text-white font-bold"
            />
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
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
      </div>
    </footer>
  );
}

export default Footer;
