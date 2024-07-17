import { forwardRef, RefObject, useEffect } from "react";
import zhizhu from "../../assets/images/zhizhu.png";
import gsap from "gsap/all";

type Props = {};
const Spider = forwardRef<HTMLDivElement, Props>(
  (
    //@ts-ignore
    props,
    ref
  ) => {
    useEffect(() => {
      if (!ref || !(ref as RefObject<HTMLDivElement>).current) return;

      const context = gsap.context(() => {
        gsap.to(".spider", {
          height: "100vh",
          ease: "none",
          scrollTrigger: {
            trigger: (ref as RefObject<HTMLDivElement>).current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      });

      return () => {
        if (context) context.revert();
      };
    }, [ref]);
    return (
      <div className="h-fit spider w-[16vw] md:w-[10vw] fixed top-0 right-0 flex justify-center z-[999]">
        <div className="relative h-full  flex flex-col items-center justify-end">
          <span className="flex-1 bg-white w-[1px] opacity-50"></span>
          <img src={zhizhu} alt="spider" />
        </div>
      </div>
    );
  }
);

export default Spider;
