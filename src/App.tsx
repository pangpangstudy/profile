import { lazy } from "react";
import "./App.css";
import ImageFollowMouse from "./components/ImageFollowMouse";
import Hero from "./components/hero";
const EasterEgg = lazy(() => import("./components/EasterEgg"));

function App() {
  return (
    // 从上下落文字 加载页面
    <main className="overflow-hidden relative w-full min-h-screen bg-[#dcdcdc]">
      <EasterEgg />
      <ImageFollowMouse />
      <Hero />
      <p className="absolute bottom-0 left-0 text-transparent text-clip bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50">
        键盘：上上下下左左右右：触发彩蛋
      </p>
    </main>
  );
}

export default App;
