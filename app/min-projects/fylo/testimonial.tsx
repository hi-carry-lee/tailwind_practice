import Image from 'next/image';
import bgQuote from '@/public/fylo/bg-quotes.png';
import profile1 from '@/public/fylo/profile-1.jpg';
import profile2 from '@/public/fylo/profile-2.jpg';
import profile3 from '@/public/fylo/profile-3.jpg';

function Testimonial() {
  return (
    <section className="bg-gray-50 pb-72">
      <div className="relative mx-auto max-w-[1500px] px-16 py-12">
        <Image
          src={bgQuote}
          alt="a quote background image"
          className="absolute left-12 top-2"
        />
        {/* testimonials container */}
        <div className="flex flex-col gap-6 md:flex-row">
          {/* box1 */}
          <div className="max-w-1/3 bg-gray-100 p-10">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={profile1}
                alt="avatar"
                className="size-10 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-md font-bold">Satish Patel</span>
                <span className="text-xs">Founder & CEO, Huddle</span>
              </div>
            </div>
          </div>

          {/* box2 */}
          <div className="max-w-1/3 bg-gray-100 p-10">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={profile2}
                alt="avatar"
                className="size-10 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-md font-bold">Bruce McKenzie</span>
                <span className="text-xs">Founder & CEO. Huddle 2</span>
              </div>
            </div>
          </div>

          {/* box3 */}
          <div className="max-w-1/3 bg-gray-100 p-10">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={profile3}
                alt="avatar"
                className="size-10 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-md font-bold">Eva Boyd</span>
                <span className="text-xs">Founder & CEO. Huddle 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
