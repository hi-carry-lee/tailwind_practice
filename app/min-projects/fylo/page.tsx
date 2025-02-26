import Features from "./features";
import Header from "./header";
import Hero from "./hero";
import Productive from "./productive";

function page() {
  return (
    <div className="dark:bg-slate-900 dark:text-white h-full">
      <Header />
      <Hero />
      <Features />
      <Productive />
    </div>
  );
}

export default page;
