import Image from "next/image";
import illustration from "@/public/fylo/illustration-intro.png";

function Hero() {
  return (
    <section className="bg-[url('/fylo/bg-curvy-light-mode.svg')] dark:bg-[url('/fylo/bg-curve-dark-mode.svg')] bg-cover bg-no-repeat">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-20 mb-20">
        <div className="flex flex-col gap-6 items-center px-6">
          <Image src={illustration} alt="illustration inro" />
          <h1 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto text-center mt-10 text-slate-950 dark:text-white">
            All your files in one secure location, assessible anywhere.
          </h1>
          <p className="max-w-lg text-center text-lg mt-4">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="bg-cyan-400 text-lg px-6 md:px-16 py-2 md:py-4 text-gray-700 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
