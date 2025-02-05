import Logo from "./logo";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Logo />
      <ul>
        <li>
          <Link href="#projects" />
        </li>
        <li>Dark</li>
      </ul>
    </header>
  );
}
