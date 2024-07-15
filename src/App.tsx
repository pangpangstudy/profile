import { lazy, useRef } from "react";
import ImageFollowMouse from "./components/ImageFollowMouse";
import Hero from "./components/hero";
import { gsap, ScrollTrigger, Draggable } from "gsap/all";
import zhizhu from "./assets/images/zhizhu.png";
import Audio from "./components/audio";
import PageCover from "./components/hero/PageCover";
import Loading from "./components/loading";
import { useAnimations } from "./hooks/useAnimation";

gsap.registerPlugin(ScrollTrigger, Draggable);
const EasterEgg = lazy(() => import("./components/EasterEgg"));

function App() {
  const mainRef = useRef<HTMLElement>(null);
  useAnimations({ ref: mainRef });
  return (
    // 从上下落文字 加载页面
    <main
      ref={mainRef}
      className="app relative w-full h-screen overflow-hidden"
    >
      <EasterEgg />
      <ImageFollowMouse />
      <Loading />
      <Hero />
      <PageCover />
      <div className="h-screen w-full bg-red-500"></div>
      <div className="h-screen w-full bg-sky-500"></div>
      <div className="h-screen w-full bg-indigo-500"></div>

      <p className="fixed bottom-0 left-0 text-transparent text-clip bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50">
        键盘：上上下下左左右右：触发彩蛋
      </p>
      <div className="h-fit spider w-[16vw] md:w-[10vw] fixed top-0 right-0 flex justify-center">
        <div className="relative h-full  flex flex-col items-center justify-end">
          <span className="flex-1 bg-white w-[1px] opacity-50"></span>
          <img src={zhizhu} alt="spider" />
        </div>
      </div>
      <Audio />
    </main>
  );
}

export default App;
