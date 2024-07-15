import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { MutableRefObject } from "react";
import { useGSAP } from "@gsap/react";

export interface IUseAnimations {
  ref: MutableRefObject<HTMLElement | null>;
}

export const useAnimations = ({ ref }: IUseAnimations) => {
  useGSAP(() => {
    if (ref.current) {
      const tl = gsap.timeline();

      tl.to(".load .line", { width: "100%", duration: 2, ease: "none" })
        .to(".hero", { opacity: 0, y: "-100%", duration: 1 })
        .to(".hero", { display: "none", duration: 0.3 })
        .from(".textBox span", {
          opacity: 0,
          ease: "Expo.easeInOut",
          stagger: 0.1,
        })
        .from(".heroContainer .eyes", { opacity: 0, duration: 1 })
        .to(".app", { height: "100%" })
        .to(".spider", {
          height: "100vh",
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .then(() => {
          gsap.utils.toArray(".panel").forEach((panel: any) => {
            ScrollTrigger.create({
              trigger: panel,
              start: () =>
                panel.offsetHeight < window.innerHeight
                  ? "top top"
                  : "bottom bottom",
              pin: true,
              scrub: true,
              pinSpacing: false,
              markers: true,
            });
          });
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".pageCover",
              start: "top center+=200",
              end: "bottom bottom",
              //   markers: true,
            },
          });
          tl.from(".pageCover img", {
            opacity: 0,
            duration: 0.5,
          })
            .from(".pageCover h1", {
              opacity: 0,
              x: "-50%",
            })
            .from(".pageCover p", {
              opacity: 0,
              x: "50%",
              duration: 0.5,
            })
            .from(".pageCover .allButton", {
              opacity: 0,
              duration: 0.5,
            });
        });
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [ref]);
};
