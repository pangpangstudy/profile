import Eyes from "../Eyes";
import { useEffect, useState } from "react";
import hreobg from "../../assets/images/herobg.gif";
import sunwukong from "../../assets/images/sunwukong.png";
import { gsap, Expo } from "gsap/all";
import { useGSAP } from "@gsap/react";
import video from "../../assets/nanhe.mp4";
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
  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {},
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
        .to(".hero", {
          display: "none",
          duration: 0.3,
        })
        .from(".textBox span", {
          opacity: 0,
          ease: Expo.easeInOut,
          stagger: 0.1,
        })
        .from(".heroContainer .eyes", {
          opacity: 0,
          duration: 1,
        });
    },
    { scope: ".heroContainer" }
  );

  return (
    <div className="heroContainer relative h-screen flex items-center overflow-hidden">
      <div className="h-screen hero absolute top-0 right-0 w-full ">
        <div
          className=" w-full h-full  relative flex flex-col justify-center items-center  bg-cover bg-center z-20 overflow-hidden"
          style={{
            backgroundImage: `url('${hreobg}')`,
          }}
        >
          <div className="text-red-600 my-20 text-[10vw] cursor-pointer">
            {count} %
          </div>
          <div className="load h-20  w-full flex items-center mb-10 absolute bottom-0 ">
            <div className="line h-px bg-white flex items-end justify-end">
              <img
                src={sunwukong}
                className="w-20 h-20 -mr-4  flex-wrap-reverse "
                style={{ transform: "rotateY(180deg)" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-black opacity-45"></div>
      <div className=" absolute top-0 left-0 right-0 bottom-0  z-10 flex flex-col justify-center items-center">
        <Eyes />
        <div className="textBox uppercase text-white font-serif">
          {"hello,world".split("").map((item, index) => {
            return (
              <span
                key={index}
                className="text-[9vw] lg:text-9xl text-transparent text-outline"
                // bg-clip-text bg-gradient-to-r from-indigo-500  to-pink-500 stroke-current text-shadow-3d
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <video
        src={video}
        className="w-full h-full object-cover object-center"
        autoPlay
        muted
        loop
      />
    </div>
  );
}

export default Hero;
