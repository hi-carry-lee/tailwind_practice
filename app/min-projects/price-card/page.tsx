import {
  HiCircleStack,
  HiUser,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
/*
1️⃣ Dividing line
    using an empty div, add border to it.
    if the width of border is thick, you can add border to one side, for example: border-b or border-t

2️⃣ 

*/

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
            <div className="flex items-center  space-x-2">
              <HiCircleStack />
              <span>100 GB of storage</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiUser />
              <span>Option to add members</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiOutlineCurrencyDollar />
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
            <div className="flex items-center  space-x-2">
              <HiCircleStack />
              <span>200 GB of storage</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiUser />
              <span>Option to add members</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiOutlineCurrencyDollar />
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
              <HiCircleStack />
              <span>2 TB of storage</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiUser />
              <span>Option to add members</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiOutlineCurrencyDollar />
              <span>Extra member benefits</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCards;
