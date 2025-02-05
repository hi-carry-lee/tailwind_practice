import Image from "next/image";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <div className="h-full flex items-center">
      <Image
        src={logo}
        alt="logo image"
        height={64}
        width={0}
        className="h-full w-auto object-contain rounded-lg"
        priority
      />
    </div>
  );
}
