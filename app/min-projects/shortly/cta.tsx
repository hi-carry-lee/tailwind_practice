function CallToAction() {
  return (
    <section className=" py-24 bg-violet-950 bg-[url('/shortly/bg-boost-desktop.svg')]  bg-no-repeat bg-cover">
      <div className="flex flex-col justify-center items-center gap-8">
        <h2 className="text-white text-4xl font-bold text-center">
          Boost your links today
        </h2>
        <button className="px-8 py-3 bg-cyan-400 rounded-full hover:bg-cyan-500 duration-200 text-white text-xl font-bold">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
