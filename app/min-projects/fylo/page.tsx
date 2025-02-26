import EarlyAccess from './early-access';
import Features from './features';
import Footer from './footer';
import Header from './header';
import Hero from './hero';
import Productive from './productive';
import Testimonial from './testimonial';

function page() {
  return (
    <div className="h-full dark:bg-slate-900 dark:text-white">
      <Header />
      <Hero />
      <Features />
      <Productive />
      <Testimonial />
      <EarlyAccess />
      <Footer />
    </div>
  );
}

export default page;
