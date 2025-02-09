import Link from "next/link";
import Header from "./_components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap gap-8 mt-8 p-6">
        <div>
          <Link
            href="/min-projects/subscribe-card"
            className="text-xl font-semibold bg-amber-200 p-4 rounded hover:bg-amber-400 transition duration-300"
          >
            Subscribe Card
          </Link>
        </div>
        <div>
          <Link
            href="/min-projects/price-card"
            className="text-xl font-semibold bg-amber-200 p-4 rounded hover:bg-amber-400 transition duration-300"
          >
            Price Card
          </Link>
        </div>
        <div>
          <Link
            href="/min-projects/product-model"
            className="text-xl font-semibold bg-amber-200 p-4 rounded hover:bg-amber-400 transition duration-300"
          >
            Product Model
          </Link>
        </div>
        <div>
          <Link
            href="/min-projects/image-gallery"
            className="text-xl font-semibold bg-amber-200 p-4 rounded hover:bg-amber-400 transition duration-300"
          >
            Image Gallery
          </Link>
        </div>
        <div>
          <Link
            href="/min-projects/login-modal"
            className="text-xl font-semibold bg-amber-200 p-4 rounded hover:bg-amber-400 transition duration-300"
          >
            Login Modal
          </Link>
        </div>
      </div>
    </div>
  );
}
