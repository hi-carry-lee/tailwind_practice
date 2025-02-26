import Image from "next/image";
import stayProductive from "@/public/fylo/illustration-stay-productive.png";

function Productive() {
  return (
    <section>
      <div className="max-w-[1550px] mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-40 xl:justify-between items-center">
          <Image src={stayProductive} alt="stay productive" />
          <div>
            <h2 className="max-w-md text-4xl font-bold text-slate-900 dark:text-white">
              Stay productive, wherever you are
            </h2>
            <p className="text-lg my-8">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-lg mb-6">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a
              href="#"
              className="text-cyan-500 underline underline-offset-4 decoration-cyan-500"
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
