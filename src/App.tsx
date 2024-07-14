import { lazy } from "react";
import "./App.css";
import ImageFollowMouse from "./components/ImageFollowMouse";
import Hero from "./components/hero";
import { gsap, ScrollTrigger, Draggable } from "gsap/all";
import { useGSAP } from "@gsap/react";
import zhizhu from "./assets/images/zhizhu.png";
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
    <main className=" relative w-full min-h-screen bg-[#dcdcdc] overflow-hidden">
      <EasterEgg />
      <ImageFollowMouse />
      <Hero />
      <p className="fixed bottom-0 left-0 text-transparent text-clip bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50">
        键盘：上上下下左左右右：触发彩蛋
      </p>
      <div className="h-fit spider w-[16vw] md:w-[10vw] fixed top-0 right-0 flex justify-center">
        <div className="relative h-full  flex flex-col items-center justify-end">
          <span className="flex-1 bg-black w-[1px]"></span>
          <img src={zhizhu} alt="spider" />
        </div>
      </div>
      <svg
        width="800"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 100"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#ff7e5f", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#feb47b", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M20 40 Q40 20 60 40 T100 40"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
        />
        {/* Replace the above path data with the actual path data for each character */}
        {/* More path elements go here... */}
      </svg>
    </main>
  );
}

export default App;
