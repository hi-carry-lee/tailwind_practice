import Image from "next/image";
import Device from "@/public/clipboard/image-devices.png";

function SectionThree() {
  return (
    <section>
      {/* section container */}
      <div className="w-[80%] mx-auto text-center my-20 pt-20">
        <h2 className="text-3xl font-bold mb-8 md:text-5xl">
          Access Clipboard Anywhere
        </h2>
        <p className="px-6 text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>

        {/* Image */}
        <Image src={Device} alt="computer" className="mx-auto" />
      </div>
    </section>
  );
}

export default SectionThree;
