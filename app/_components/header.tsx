import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-32 p-4 bg-gray-100">
      <Logo />

      <ul className="flex space-x-4 text-2xl font-semibold">
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>Dark Mode</li>
      </ul>
    </header>
  );
}
