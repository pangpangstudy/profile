import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HotAirBalloonImg from "../../assets/images/hot-air-balloon.png";
import { FallingHotAirBalloonsProps } from ".";
import { useGSAP } from "@gsap/react";

const HotAirBalloons: React.FC<
  React.PropsWithChildren<FallingHotAirBalloonsProps>
> = ({ endHandle, count = 10, size = 100, iterations = 2, duration = 5 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const hotAirBalloons = containerRef.current?.children;
    gsap.to(hotAirBalloons!, {
      y: "-100vh",
      opacity: 0,
      stagger: {
        each: duration / count,
      },
      duration,
      ease: "linear",
      onStart: () => {
        gsap.to(hotAirBalloons!, {
          rotation: 20,
          duration: 1,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      },
      onComplete: endHandle,
    });
  });
  const hotAirBalloonElements = [...Array(count)].map((_, index) => (
    <div
      key={String(index)}
      style={{
        position: "fixed",
        bottom: 0,
        left: `${Math.random() * 100}vw`,
        transform: "rotate(-20deg)",
        pointerEvents: "none",
        zIndex: 99999,
      }}
    >
      <img src={HotAirBalloonImg} alt="" width={size} height={size} />
    </div>
  ));

  return <div ref={containerRef}>{hotAirBalloonElements}</div>;
};

export default HotAirBalloons;
