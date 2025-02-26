import Image from 'next/image';
import illustration from '@/public/fylo/illustration-intro.png';

function Hero() {
  return (
    <section className="bg-[url('/fylo/bg-curvy-light-mode.svg')] bg-cover bg-no-repeat dark:bg-[url('/fylo/bg-curve-dark-mode.svg')]">
      <div className="mx-auto mb-20 mt-20 max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center gap-6 px-6">
          <Image src={illustration} alt="illustration inro" />
          <h1 className="mx-auto mt-10 max-w-3xl text-center text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
            All your files in one secure location, assessible anywhere.
          </h1>
          <p className="mt-4 max-w-lg text-center text-lg">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="rounded-full bg-cyan-400 px-6 py-2 text-lg text-gray-700 md:px-16 md:py-4">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
