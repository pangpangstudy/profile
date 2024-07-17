import { useRef, useLayoutEffect } from "react";

import img1 from "../../assets/images/fengjing.jpg";
import img2 from "../../assets/images/preview.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

function About({}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(containerRef.current?.children!);
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "power1",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          // snap: 1 / (panels.length - 1),
          end: () => "+=" + containerRef.current!.offsetWidth,
        },
      });
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about1",
          start: "top bottom-=100",
          end: "bottom bottom",
          scrub: true,
        },
      });
      tl1
        .from(".about1 .title", {
          opacity: 0,
          x: "-50%",
          ease: "power3.in",
        })
        .from(".about1 .about-text-box p", {
          opacity: 0,
          x: "-50%",
          stagger: 0.3,
        })
        .from(".about1 img", {
          opacity: 0,
          x: "50%",
        });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about2",
          start: `top center-=${containerRef.current!.offsetWidth / 2}`,
          end: `bottom bottom-=${containerRef.current!.offsetWidth}`,
          scrub: true,
        },
      });
      tl2
        .from(".about2 .title", {
          opacity: 0,
          x: "-50%",
        })
        .from(".about2 .about-text-box p", {
          opacity: 0,
          x: "-50%",
          stagger: 0.3,
        })
        .from(".about2 img", {
          opacity: 0,
          x: "50%",
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);
  return (
    <section
      id="skills"
      ref={containerRef}
      className="lg:py-20  flex  w-[200vw] min-h-screen "
    >
      <div className="w-1/2 flex justify-center">
        <div className="about1  w-full lg:w-[80%]  flex flex-col rounded-3xl  border-2 border-white py-10 lg:py-20 bg-[#C684D0]">
          <h1 className="title text-center text-black text-3xl md:text-5xl font-bold  py-4 uppercase px-4 bg-sky-600 rounded-full ">
            Blockchain Technology:
          </h1>
          <div className="flex flex-col lg:flex-row w-full flex-1 justify-center items-center ">
            <div className="about-text-box flex-1 flex flex-col  py-10 text-black  text-start px-4 md:px-10 gap-4 text-[2vh]">
              <p>
                <span className="text-xl xl:text-2xl text-red-500">1. </span>
                Proficient in Solidity with experience in writing upgradable
                smart contracts.
              </p>
              <p>
                <span className="text-xl xl:text-2xl text-red-500">2. </span>{" "}
                Familiar with the basic workings of EVM and capable of using
                Inline Assembly.
              </p>
              <p>
                <span className="text-xl xl:text-2xl text-red-500">3. </span>{" "}
                Excellent engineering practices and code style, adept at gas
                consumption optimization techniques.
              </p>
              <p>
                <span className="text-xl xl:text-2xl text-red-500">4. </span>{" "}
                Proficient in developing, testing, and deploying smart contracts
                using the Hardhat framework with practical project experience.
              </p>
            </div>
            <div className="flex-1 flex  justify-center items-center ">
              <img
                src={img2}
                alt="img2"
                className="about-image object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="about2 w-full lg:w-[80%] mt-2 relative flex flex-col  rounded-3xl  border-2 border-white py-10 lg:py-20 bg-[#C684D0] ">
          <h1 className="title text-center text-black text-2xl md:text-5xl  font-bold  py-2 uppercase px-4 bg-sky-600 rounded-full ">
            Frontend Technology:
          </h1>
          <div className="flex flex-col lg:flex-row w-full flex-1 justify-center items-center">
            <div className="about-text-box flex-1 flex flex-col  py-10 text-black  text-start px-4 md:px-10 text-[2vh]">
              <p>
                <span className="text-base text-red-500 xl:text-2xl">1.</span>
                Proficient in TypeScript/JavaScript and modern frontend
                frameworks such as React and Next.js.
              </p>
              <p>
                <span className=" text-red-500 xl:text-2xl">2.</span> Mastery of
                global state management with zustand, and able to achieve
                lightweight state management using Context.
              </p>
              <p>
                <span className=" text-red-500 xl:text-2xl">3.</span>{" "}
                Experienced in frontend performance optimization and familiar
                with webpack configuration.
              </p>
              <p>
                <span className=" text-red-500 xl:text-2xl">4.</span> Practical
                experience with Web3 libraries such as ethers.js, viem, and
                wagmi.
              </p>
              <p>
                <span className=" text-red-500 xl:text-2xl">5.</span>{" "}
                Experienced with toolchains like Rainbowkit and web3Modal.
              </p>
              <p>
                <span className=" text-red-500 xl:text-2xl">6.</span> Familiar
                with common frontend development component libraries such as
                Schdcn UI and Next UI, as well as animation libraries like
                Framer Motion and GSAP.
              </p>
              <p>
                <span className=" text-red-500 xl:text-2xl">7.</span> Proficient
                in querying GraphQL interfaces and integrating subgraph data.
              </p>
              <p>
                <span className=" text-red-500 xl:text-2xl">8.</span> Basic
                knowledge of backend development with the Nest.js framework.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <img
                src={img1}
                alt="img1"
                className="about-image object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
