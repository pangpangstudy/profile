import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import eggImg from "../../assets/images/xiaoxiongmao.png";
import { FallingHotAirBalloonsProps } from ".";

const HotAirBalloons: React.FC<
  React.PropsWithChildren<FallingHotAirBalloonsProps>
> = ({ endHandle, count = 50, size = 100, duration = 3 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  let count1 = window.innerWidth > 1140 ? 50 : 30;
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const hotAirBalloons = containerRef.current?.children;
      gsap.to(hotAirBalloons!, {
        x: "-120vw",
        opacity: 0,
        transform: "rotate(-20deg)",
        stagger: {
          each: duration / count,
        },
        duration,
        ease: "linear",
        onStart: () => {
          gsap.to(hotAirBalloons!, {
            // rotation: 20,
            duration: 1,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          });
        },
        onComplete: endHandle,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);
  const hotAirBalloonElements = [...Array(count1)].map((_, index) => (
    <div
      key={String(index)}
      style={{
        position: "fixed",
        right: 0,
        bottom: `${Math.random() * 100}vh`,
        transform: "translateX(100%)",
        pointerEvents: "none",
        zIndex: 99999,
      }}
    >
      <img src={eggImg} alt="egg" width={size} height={size} />
    </div>
  ));

  return <div ref={containerRef}>{hotAirBalloonElements}</div>;
};

export default HotAirBalloons;
