function EarlyAccess() {
  return (
    <section className="mb-72">
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute -top-24 flex flex-col items-center bg-gray-200 p-10">
          <h2 className="mb-6 text-3xl font-bold">Get early access today</h2>
          <p className="mb-6">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div className="flex flex-col items-center gap-4 space-x-8 md:flex-row">
            <input
              type="text"
              placeholder="email@example.com"
              className="w-2/3 rounded-full px-40 py-4 placeholder:text-left"
            />
            <button className="max-w-full rounded-full bg-cyan-400 px-6 py-4">
              Get Started For Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EarlyAccess;
