import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Eyes from "../Eyes";

type Props = {};

function Hero({}: Props) {
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".drop-text",
        {
          y: "-50vh",
          duration: 2,

          ease: "bounce.out",
        },
        { color: "transparent" }
      );
    },
    { scope: ".hero" }
  );
  return (
    <div className="hero   w-full h-screen bg-black flex justify-center items-center">
      <Eyes />
    </div>
  );
}

export default Hero;
