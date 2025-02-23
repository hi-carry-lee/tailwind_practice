function ShortlyForm() {
  return (
    <section className="bg-gray-100 pb-20">
      <div className="max-w-4xl mx-auto w-full space-y-4 relative -top-10">
        <div className="mx-6 p-10 flex flex-col md:flex-row gap-4 bg-violet-950 rounded-xl">
          <input
            type="text"
            className="rounded-lg px-4 py-4 w-full  placeholder:text-yellow-600"
            placeholder="Shorten a link here"
          />
          <button className="py-4 px-4 md:w-40 text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 duration-200">
            Shorten It!
          </button>
        </div>
        <div className="bg-white p-6 flex  flex-col md:flex-row justify-between items-center rounded-xl">
          <p className="text-lg font-semibold text-gray-500">
            https://frontendmentor.io
          </p>
          <div className="flex  flex-col md:flex-row justify-between items-center  gap-2 md:p-8">
            <p className="font-bold text-cyan-500">https://rel.ink/k4IKyk</p>
            <button className="px-6 py-2 rounded-lg bg-cyan-500 text-white text-lg hover:bg-cyan-600 duration-200">
              Copy
            </button>
          </div>
        </div>
        <div className="bg-white p-6 flex flex-col md:flex-row justify-between items-center rounded-xl">
          <p className="text-lg font-semibold text-gray-500">
            https://twitter.com/frontendmentor
          </p>
          <div className="flex  flex-col md:flex-row justify-between items-center gap-2 md:p-8">
            <p className="font-bold text-cyan-500">https://rel.ink/gxOXp9</p>
            <button className="px-6 py-2 rounded-lg bg-violet-950 text-white text-lg hover:bg-violet-900 duration-200">
              Copy
            </button>
          </div>
        </div>
        <div className="bg-white p-6 flex  flex-col md:flex-row justify-between items-center rounded-xl">
          <p className="text-lg font-semibold text-gray-500">
            https://linkedin.com/frontend-mentor
          </p>
          <div className="flex  flex-col md:flex-row justify-between items-center gap-2 md:p-8">
            <p className="font-bold text-cyan-500">https://rel.ink/gob3X9</p>
            <button className="px-6 py-2 rounded-lg bg-cyan-500 text-white text-lg hover:bg-cyan-600 duration-200">
              Copy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShortlyForm;
