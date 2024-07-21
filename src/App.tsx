import { lazy, useEffect, useLayoutEffect, useRef } from "react";
import ImageFollowMouse from "./components/ImageFollowMouse";
import Hero from "./components/hero";
import PageCover from "./components/hero/PageCover";
import Loading from "./components/loading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "./components/footer";
const EasterEgg = lazy(() => import("./components/EasterEgg"));
const About = lazy(() => import("./components/about"));
const Skills = lazy(() => import("./components/skill"));
const Hobby = lazy(() => import("./components/Hobby"));
const Audio = lazy(() => import("./components/audio"));
const Spider = lazy(() => import("./components/spider"));
function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });
    return () => {
      window.removeEventListener("resize", () => {
        ScrollTrigger.refresh();
      });
      window.removeEventListener("load", () => {
        ScrollTrigger.refresh();
      });
    };
  });
  useLayoutEffect(() => {
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
      <Hobby />
      <Footer />
      <Audio />
      <p className="fixed bottom-0 left-0 text-transparent text-clip bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50">
        键盘：上上下下左左右右：触发彩蛋
      </p>
    </main>
  );
}

export default App;
