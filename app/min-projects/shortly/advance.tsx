import { AiOutlineDashboard, AiOutlineBarChart } from "react-icons/ai";
import { LuPencilRuler } from "react-icons/lu";

interface Props {
  container: string;
}

/* 
1. why the horizontal line appear underneath the three boxes?
  in the absolute positioning, the back elements will appear on top of the front elements;

2. after using absolute, you can't use mx-auto to center it.
  since it's out of document flow.

3. in the beginning, I intended to use one div as the horizontal and vertical line,
  rotate it when in the different screen size;
  but actually using two line is easier.

4. 

*/

function Advance({ container }: Props) {
  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className={`${container} px-3`}>
          <h2 className="text-4xl font-bold text-center mb-6">
            Advanced Statistics
          </h2>
          <p className="md:max-w-md mx-auto text-center">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>

          {/* Features */}
          <div className="relative flex flex-col md:flex-row items-start px-6 md:gap-7 mt-20">
            {/* horizontal line */}
            <div className="hidden absolute top-24 w-10/12 ml-16 h-3 bg-cyan-500 md:block"></div>
            {/* vertical line */}
            {/* 🌻🌼 here, h-full means it will has the same height with its parent. */}
            <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan-500 md:hidden"></div>

            {/* box 1 */}
            <div className="relative flex flex-col p-6 gap-6 bg-white rounded-lg md:w-1/3">
              {/* image position */}
              <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                {/* image container */}
                <div className="flex items-center justify-center size-20 p-4 rounded-full bg-violet-950">
                  <AiOutlineBarChart size={40} className="text-cyan-500" />
                </div>
              </div>
              <h3 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
                Brand Recognition
              </h3>
              <p className="text-center text-gray-400 md:text-left">
                Boost your brand recognition with each click. Generic links
                don&apos;t mean a thing. Branded links help instil confidence in
                your content.
              </p>
            </div>

            {/* box 2 */}
            <div className="relative flex flex-col mt-24 md:mt-8 p-6 gap-6 bg-white rounded-lg md:w-1/3">
              {/* image position */}
              <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                {/* image container */}
                <div className="flex items-center justify-center size-20 p-4 rounded-full bg-violet-950">
                  <AiOutlineDashboard size={40} className="text-cyan-500" />
                </div>
              </div>
              <h3 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
                Detailed records
              </h3>
              <p className="text-center text-gray-400 md:text-left">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>

            {/* box 3 */}
            <div className="relative flex flex-col mt-24 md:mt-16 p-6 gap-6 bg-white rounded-lg md:w-1/3">
              {/* image position */}
              <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                {/* image container */}
                <div className="flex items-center justify-center size-20 p-4 rounded-full bg-violet-950">
                  <LuPencilRuler size={40} className="text-cyan-500" />
                </div>
              </div>
              <h3 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
                Fully customizable
              </h3>
              <p className="text-center text-gray-400 md:text-left">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Advance;
