import Image from 'next/image';
import Link from 'next/link';
import iconPhone from '@/public/fylo/icon-phone.svg';
import iconEmail from '@/public/fylo/icon-email.svg';
import iconFb from '@/public/fylo/facebook.svg';
import iconTwitter from '@/public/fylo/twitter.svg';
import iconIns from '@/public/fylo/instagram.svg';

function Footer() {
  return (
    <footer className="bg-slate-950">
      <div className="mx-auto max-w-[1500px] p-16">
        <div className="flex flex-col items-start gap-16 text-lg text-white md:flex-row md:justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex gap-6">
              <Image src={iconPhone} alt="phone icon" className="w-6" />
              <span>+1-543-123-4567</span>
            </div>
            <div className="flex gap-6">
              <Image src={iconEmail} alt="email icon" className="w-6" />
              <span>example@fylo.com</span>
            </div>
          </div>
          <div className="flex flex-col gap-10 md:flex-row md:gap-16">
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Jobs</Link>
              </li>
              <li>
                <Link href="#">Press</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Terms</Link>
              </li>
              <li>
                <Link href="#">Privacy</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 self-center">
            <div className="rounded-full bg-slate-800 p-2 hover:bg-green-600 hover:text-green-400">
              <Image src={iconFb} alt="facebook icon" />
            </div>
            <div className="rounded-full bg-slate-800 p-2 hover:bg-green-600 hover:text-green-400">
              <Image src={iconTwitter} alt="twitter icon" />
            </div>
            <div className="rounded-full bg-slate-800 p-2 hover:bg-green-600 hover:text-green-400">
              <Image src={iconIns} alt="instagram icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
