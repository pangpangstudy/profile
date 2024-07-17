import { lazy, useLayoutEffect, useRef } from "react";
import ImageFollowMouse from "./components/ImageFollowMouse";
import Hero from "./components/hero";
import Audio from "./components/audio";
import PageCover from "./components/hero/PageCover";
import Loading from "./components/loading";
import About from "./components/about";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "./components/footer";
import Spider from "./components/spider";
import Skills from "./components/skill";
const EasterEgg = lazy(() => import("./components/EasterEgg"));
gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({});
      tl.to(".load .line", { width: "100%", duration: 2, ease: "none" })
        .to(".loading", { opacity: 0, y: "-100%", duration: 1 })
        .to(".loading", { display: "none" })
        .from(".textBox span", {
          opacity: 0,
          ease: "Expo.easeInOut",
          stagger: 0.1,
        })
        .from(".heroContainer .eyes", { opacity: 0, duration: 1 })
        .then(() => {
          window.scrollTo(0, 0);
          document.body.classList.add("loading-complete");
        });
    }, mainRef);
    return () => ctx.revert();
  }, []);
  return (
    <main ref={mainRef} className="relative h-full">
      <EasterEgg />
      <ImageFollowMouse />
      <Spider ref={mainRef} />
      <Loading />
      <Hero />
      <PageCover />
      <About />
      <Skills />
      <Footer />
      <Audio />
      <p className="fixed bottom-0 left-0 text-transparent text-clip bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50">
        键盘：上上下下左左右右：触发彩蛋
      </p>
    </main>
  );
}

export default App;
