import Link from "next/link";
import Image from "next/image";
import logo from "@/public/loopstudios/logo.svg";

interface Props {
  navParam: string;
  ulParam: string;
  children?: React.ReactNode;
}

function Navigation({ navParam, ulParam, children }: Props) {
  return (
    <nav className={navParam}>
      <Image src={logo} alt="logo" />
      <ul className={ulParam}>
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
      {children}
    </nav>
  );
}

export default Navigation;
