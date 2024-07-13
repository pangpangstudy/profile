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
      <p className="absolute bottom-0 left-0 text-white">
        键盘：上上下下左右右：触发彩蛋
      </p>
    </main>
  );
}

export default App;
