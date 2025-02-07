// existing problem:
// 1. when shrink the brower window to some extend, the bottom of card 2 and 3 will become double wide, I don't know why

function PriceCards() {
  return (
    <div className="bg-slate-800 min-h-screen flex justify-center items-center ">
      {/* cards container */}
      <div className="flex flex-col my-8 space-y-6 md:flex-row md:space-y-0 md:space-x-6 md:my-0">
        {/* card 1 */}
        <div className="bg-slate-700 rounded-xl text-white ">
          <div className="bg-slate-800 mx-4 mt-4 p-8 text-center rounded-t-xl">
            <h3 className="uppercase text-xl ">basic</h3>
            <h2 className="text-6xl mt-8 font-serif">100GB</h2>
            <p className="text-2xl mt-2">$1.99/Month</p>
            <div className="flex justify-center items-center mt-6">
              <button className="px-10 py-4 rounded-lg text-xl border border-violet-500 hover:bg-violet-500 duration-300">
                Purchase
              </button>
            </div>
          </div>
          <div className="border border-slate-700 mx-4"></div>
          <div className="flex flex-col space-y-2 text-xl bg-slate-800 mx-4 mb-4 p-8 rounded-b-xl">
            <div className="flex items-center  space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              <span>100 GB of storage</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              <span>Option to add members</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              <span>Extra member benefits</span>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="bg-violet-600 rounded-xl text-white ">
          <div className="bg-slate-800 mx-4 mt-4 p-8 text-center rounded-t-xl">
            <h3 className="uppercase text-xl ">Standard</h3>
            <h2 className="text-6xl mt-8 font-serif">200GB</h2>
            <p className="text-2xl mt-2">$3.99/Month</p>
            <div className="flex justify-center items-center mt-6">
              <button className="px-10 py-4 rounded-lg text-xl bg-violet-500 hover:bg-violet-900 duration-300">
                Purchase
              </button>
            </div>
          </div>
          <div className="border border-slate-700 mx-4"></div>
          <div className="flex flex-col space-y-2 text-xl bg-slate-800 mx-4 mb-4 p-8 rounded-b-xl">
            <div className="flex items-center  space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              <span>200 GB of storage</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              <span>Option to add members</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              <span>Extra member benefits</span>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="bg-slate-700 rounded-xl text-white ">
          <div className="bg-slate-800 mx-4 mt-4 p-8 text-center">
            <h3 className="uppercase text-xl ">Premium</h3>
            <h2 className="text-6xl mt-8 font-serif">2 TB</h2>
            <p className="text-2xl mt-2">$8.99/Month</p>
            <div className="flex justify-center items-center mt-6">
              <button className="px-10 py-4 rounded-lg text-lg border border-violet-500 hover:bg-violet-500 duration-300">
                Purchase
              </button>
            </div>
          </div>
          <div className="border border-slate-700 mx-4"></div>
          <div className="flex flex-col space-y-2 text-xl bg-slate-800 mx-4 mb-4 p-8 ">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>

              <span>2 TB of storage</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>
              <span>Option to add members</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>Extra member benefits</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCards;
