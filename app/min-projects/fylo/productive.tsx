import Image from 'next/image';
import stayProductive from '@/public/fylo/illustration-stay-productive.png';

function Productive() {
  return (
    <section>
      <div className="mx-auto max-w-[1550px] px-6 py-20">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-40 xl:justify-between">
          <Image src={stayProductive} alt="stay productive" />
          <div>
            <h2 className="max-w-md text-4xl font-bold text-slate-900 dark:text-white">
              Stay productive, wherever you are
            </h2>
            <p className="my-8 text-lg">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="mb-6 text-lg">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a
              href="#"
              className="text-cyan-500 underline decoration-cyan-500 underline-offset-4"
            >
              See how Flyo works
            </a>
          </div>
        </div>
      </div>
      ;
    </section>
  );
}

export default Productive;
