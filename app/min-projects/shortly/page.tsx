import { Poppins } from "next/font/google";
import Header from "./header";
import Hero from "./hero";
import ShortlyForm from "./shortly-form";
import Advance from "./advance";
import CallToAction from "./cta";
import Footer from "./footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const container =
  "2xl:max-w-[1536px] xl:max-w-[1280px] lg:max-w-[1024px] md:max-w-[768px] max-w-[640px] w-full mx-auto ";

function Shortly() {
  return (
    <div className={poppins.className}>
      <Header container={container} />
      <Hero container={container} />
      <ShortlyForm />
      <Advance container={container} />
      <CallToAction />
      <Footer container={container} />
    </div>
  );
}

export default Shortly;
