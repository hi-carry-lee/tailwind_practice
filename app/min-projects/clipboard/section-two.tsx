import Image from "next/image";
import Computer from "@/public/clipboard/image-computer.png";

// 1️⃣ md:w-1/2: 响应式宽度属性，它的含义是：当屏幕宽度大于或等于768px时，元素的宽度为父元素的一半

function SectionTwo() {
  return (
    <section>
      {/* section container */}
      <div className="w-[80%] mx-auto text-center my-20 ">
        <h2 className="text-3xl font-bold mb-8 md:text-5xl">
          Keep track of your snippets
        </h2>
        <p className="px-6 text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        {/* FEATURES */}
        <div className="flex flex-col items-center md:items-center md:flex-row space-y-10 md:space-y-0 md:space-x-32  px-4 mt-24">
          {/* Image */}
          <Image src={Computer} alt="computer" className="md:w-1/2" />
          {/* description */}
          <div className="md:text-left text-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Quick Search</h3>
              <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">iCloud Sync</h3>
              <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Completely History</h3>
              <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
