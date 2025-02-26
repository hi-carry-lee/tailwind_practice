import Features from './features';
import Header from './header';
import Hero from './hero';
import Productive from './productive';

function page() {
  return (
    <div className="h-full dark:bg-slate-900 dark:text-white">
      <Header />
      <Hero />
      <Features />
      <Productive />
    </div>
  );
}

export default page;
