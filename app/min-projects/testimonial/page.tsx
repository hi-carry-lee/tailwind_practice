import Image from "next/image";
import bgQuotation from "@/public/testimonial/bg-pattern-quotation.svg";
import Box from "./box";
import daniel from "@/public/testimonial/image-daniel.jpg";
import jonathan from "@/public/testimonial/image-jonathan.jpg";
import kira from "@/public/testimonial/image-kira.jpg";
import jeanette from "@/public/testimonial/image-jeanette.jpg";
import patrick from "@/public/testimonial/image-patrick.jpg";

function Testimonial() {
  return (
    // background
    <div className="bg-gray-200">
      {/* global  */}
      <div className="max-w-[1280px] mx-auto p-2 md:p-10">
        {/* grid container */}
        <div className="text-white grid grid-cols-1 md:grid-rows-2 md:grid-cols-4 gap-6">
          {/* box 1 */}
          <Box
            className="relative p-10 rounded-xl bg-purple-700 md:col-span-2"
            avatar={daniel}
            name="Daniel Clifford"
            title="Verified Graduate"
            description="I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth."
            testimonial="I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup. Lorem ipsum dolor sit amet consectetur"
          >
            <Image
              src={bgQuotation}
              alt="quotate"
              className="absolute top-3 right-10 scale-125 md:top-8 md:right-24 md:scale-150 opacity-35"
            />
          </Box>

          {/*box 2 */}
          <Box
            className=" p-10 rounded-xl bg-gray-700 "
            avatar={jonathan}
            name="Jonathan Walters"
            title="Verified Graduate"
            description="The team was very supportive and kept me motivated."
            testimonial="I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made"
          />
          {/*box 3 */}
          <Box
            className=" p-10 rounded-xl bg-white md:row-span-2 text-gray-900"
            avatar={kira}
            name="Kira Whittle"
            title="Verified Graduate"
            description="Such a life-changing experience. Highly recommended!"
            testimonial={`"Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"`}
          />
          {/*box 4 */}
          <Box
            className=" p-10 rounded-xl bg-white text-gray-900"
            avatar={jeanette}
            name="Jeanette Harmon"
            title="Verified Graduate"
            description="An overall wonderful and rewarding experience"
            testimonial={`"Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."`}
          />
          {/*box 5 */}
          <Box
            className=" p-10 rounded-xl text-white md:col-span-2 bg-gray-800"
            avatar={patrick}
            name="Patrick Abrams"
            title="Verified Graduate"
            description="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
            testimonial={`"The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."`}
          />
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
