import Image from "next/image";
import blacklistIcon from "@/public/clipboard/icon-blacklist.svg";
import textIcon from "@/public/clipboard/icon-text.svg";
import previewIcon from "@/public/clipboard/icon-preview.svg";
import googleLogo from "@/public/clipboard/logo-google.png";
import ibmLogo from "@/public/clipboard/logo-ibm.png";
import microSoftLogo from "@/public/clipboard/logo-microsoft.png";
import hpLogo from "@/public/clipboard/logo-hp.png";
import vgLogo from "@/public/clipboard/logo-vector-graphics.png";

function SectionFour() {
  return (
    <section>
      {/* section container */}
      <div className="w-[80%] mx-auto text-center my-20 ">
        <h2 className="text-3xl font-bold mb-8 md:text-5xl">
          Supercharge your workflow
        </h2>
        <p className="px-6 text-xl text-gray-500 mb-16 max-w-3xl text-center mx-auto">
          We&apos;ve got the tools to boost your productivity.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
          <div className="text-center flex flex-col justify-center items-center">
            <Image src={blacklistIcon} alt="icon" className="mx-auto mb-10" />
            <h3 className="mb-4 text-xl font-bold">Create Blacklists</h3>
            <p className="w-80">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <Image src={textIcon} alt="icon" className="mx-auto mb-10" />
            <h3 className="mb-4 text-xl font-bold">Plain Text Snippets</h3>
            <p className="w-80">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <Image src={previewIcon} alt="icon" className="mx-auto mb-10" />
            <h3 className="mb-4 text-xl font-bold">Sneak Preview</h3>
            <p className="w-80">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row space-y-4 md:space-y-0 gap-8 md:gap-16 mt-12">
          <Image src={googleLogo} alt="google logo" />
          <Image src={ibmLogo} alt="ibm logo" />
          <Image src={microSoftLogo} alt="microsoft logo" />
          <Image src={hpLogo} alt="hp logo" />
          <Image src={vgLogo} alt="vg logo" />
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
