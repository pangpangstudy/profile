import Eyes from "../Eyes";

import { useEffect, useState } from "react";
import bg from "../../assets/images/heishenhuayasuo.png";
import sunwukong from "../../assets/images/sunwukong.png";
import { gsap, Expo } from "gsap/all";
import { useGSAP } from "@gsap/react";
type Props = {};

function Hero({}: Props) {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((state) => {
        if (state < 100) {
          return state + 1;
        } else {
          clearInterval(id);
          return 100;
        }
      });
    }, 19);
    () => clearInterval(id);
  }, []);
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        console.log("加载页面完成喽");
      },
    });
    tl.to(".load .line", {
      width: "100%",
      duration: 2,
      ease: "none",
    })
      .to(".hero", {
        opacity: 0,
        y: "-100%",
        duration: 1,
      })
      .to(".hero", { display: "none", duration: 0.3 })
      .to(".content", { x: 0, ease: Expo.easeInOut, duration: 1.5 });
  });

  return (
    <div className="h-screen relative">
      <div className="absolute top-0 right-0 w-full h-full ">
        <div
          className="hero w-full h-full  relative flex flex-col justify-center items-center  bg-cover bg-center z-20 overflow-hidden"
          style={{
            backgroundImage: `url('${bg}')`,
          }}
        >
          <Eyes />
          <div className="text-white my-20 text-[6vw] cursor-pointer">
            {count} %
          </div>
          <div className="load h-20  w-full flex items-center mb-10 absolute bottom-0 ">
            <div className="line h-px bg-white flex items-end justify-end">
              <img
                src={sunwukong}
                className="w-20 h-20 -mr-4  flex-wrap-reverse"
                style={{ transform: "rotateY(180deg)" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="content w-full h-screen overflow-hidden ">
        <p className="title-lines">The greatest glory in living lies</p>
        <p className="title-lines">not in never falling,</p>
        <p className="title-lines">but in rising every time we fall.</p>
        <p className="title-lines">-Nelson Mandela</p>
      </div>
    </div>
  );
}

export default Hero;
