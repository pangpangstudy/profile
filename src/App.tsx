import { lazy, useLayoutEffect, useRef } from "react";
import ImageFollowMouse from "./components/ImageFollowMouse";
import Hero from "./components/hero";

import zhizhu from "./assets/images/zhizhu.png";
import Audio from "./components/audio";
import PageCover from "./components/hero/PageCover";
import Loading from "./components/loading";

import About from "./components/about";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "./components/footer/inde";
const EasterEgg = lazy(() => import("./components/EasterEgg"));
gsap.registerPlugin(ScrollTrigger);
function App() {
  const mainRef = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".load .line", { width: "100%", duration: 2, ease: "none" })
        .to(".loading", { opacity: 0, y: "-100%", duration: 1 })
        .to(".loading", { display: "none", duration: 0.3 })
        .from(".textBox span", {
          opacity: 0,
          ease: "Expo.easeInOut",
          stagger: 0.1,
        })
        .from(".heroContainer .eyes", { opacity: 0, duration: 1 })
        .to(".app", { height: "100%" })
        .then(() => {
          gsap.to(".spider", {
            height: "100vh",
            ease: "none",
            scrollTrigger: {
              trigger: mainRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          });
        });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={mainRef}
      className="app relative w-full h-screen overflow-hidden "
    >
      <EasterEgg />
      <ImageFollowMouse />
      <Loading />
      <Hero />
      <PageCover />
      <About />
      <Footer />
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
