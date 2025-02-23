import Image from "next/image";
import illustrationWorking from "@/public/shortly/illustration-working.svg";

interface Props {
  container: string;
}

function Hero({ container }: Props) {
  return (
    <section>
      <div
        className={`${container} p-6 flex flex-col-reverse lg:flex-row mb-40 `}
      >
        <div className="mt-20 flex flex-col justify-center items-center lg:justify-start w-full lg:max-w-1/2 lg:items-start">
          <h1 className="text-6xl font-bold w-full text-center lg:text-left lg:max-w-md mb-10">
            More than just shorter links
          </h1>
          <p className="text-2xl w-full text-center text-gray-400 font-medium lg:text-left lg:max-w-sm mb-6">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <div>
            <button className="px-8 py-4 rounded-full bg-cyan-500 text-2xl text-white font-bold hover:bg-cyan-400 duration-200 ">
              Get Started
            </button>
          </div>
        </div>
        <div className="mb-2 mx-auto w-3/4 lg:mb-0 lg:w-1/2">
          <Image src={illustrationWorking} alt="illustration working image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
