import { lazy } from "react";
import "./App.css";
import ImageFollowMouse from "./components/ImageFollowMouse";
import Hero from "./components/hero";
import { gsap, ScrollTrigger, Draggable } from "gsap/all";
import { useGSAP } from "@gsap/react";
import zhubajie from "./assets/images/zhubajie.png";
const EasterEgg = lazy(() => import("./components/EasterEgg"));
gsap.registerPlugin(ScrollTrigger, Draggable);
function App() {
  useGSAP(
    () => {
      gsap.to(".spider", {
        height: "100vh", // 最终高度为整个页面高度
        ease: "none",
        scrollTrigger: {
          trigger: "main", // 触发器元素
          start: "top top", // 开始位置
          end: "bottom bottom", // 结束位置
          scrub: true, // 滚动时同步动画
        },
      });
    },
    { scope: "main" }
  );
  return (
    // 从上下落文字 加载页面
    <main className="overflow-hidden relative w-full min-h-screen bg-[#dcdcdc] overflow-hidden">
      <EasterEgg />
      <ImageFollowMouse />
      <Hero />
      <p className="fixed bottom-0 left-0 text-transparent text-clip bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50">
        键盘：上上下下左左右右：触发彩蛋
      </p>
      <div className="h-fit spider w-[16vw] md:w-[10vw] fixed top-0 right-0 flex justify-center">
        <div className="relative h-full  flex flex-col items-center justify-end">
          <img src={zhubajie} alt="spider" />
        </div>
      </div>
    </main>
  );
}

export default App;
