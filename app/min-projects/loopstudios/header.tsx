import Navigation from "./navigation";

function Header() {
  return (
    <header className=" bg-[url('/loopstudios/mobile/image-hero.jpg')] md:bg-[url('/loopstudios/desktop/image-hero.jpg')] bg-no-repeat bg-cover bg-center md:bg-cover md:bg-no-repeat">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-12  ">
        <Navigation
          navParam="flex items-center justify-between"
          ulParam="space-x-8 text-white font-bold h-10 hidden md:flex"
        />

        {/* TODO Mobile Mene here */}

        {/* text, leading-snug md:leading-snug看起来重复，但是不能省略，因为它们用在不同的字体大小上 */}
        {/* 当屏幕宽度小于p元素的宽度时，因为父容器的padding，让p元素看起来像是设置了居中 */}
        <p className="text-2xl sm:text-4xl md:text-5xl uppercase border-2 font-thin tracking-wider text-white border-white max-w-lg p-4 md:p-10 md:mx-0 my-32 leading-snug md:leading-snug">
          Impressive Experiences That Deliver
        </p>
      </div>
    </header>
  );
}

export default Header;
