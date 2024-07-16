import { useRef, useLayoutEffect } from "react";

import img1 from "../../assets/images/fengjing.jpg";
import img2 from "../../assets/images/preview.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

function About({}: Props) {
  const aboutRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about1",
          start: "top center+=300",
          end: "bottom bottom",
          scrub: true,
        },
      });
      tl1
        .from(".about1 .title", {
          opacity: 0,
          x: "-50%",
        })
        .from(".about1 .about-text-box p", {
          opacity: 0,
          x: "-50%",
        })
        .from(".about1 img", {
          opacity: 0,
          x: "50%",
        });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about2",
          start: "top center+=300",
          end: "bottom bottom",
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
        })
        .from(".about2 img", {
          opacity: 0,
          x: "50%",
        });
    }, aboutRef);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={aboutRef} className="mb-10">
      <section className="about1 relative container flex flex-col w-full rounded-tl-3xl py-14 lg:py-20 overflow-hidden">
        <h1 className="title text-center text-[#c4429e] text-5xl font-bold italic py-4 uppercase">
          Blockchain Technology:
        </h1>
        <div className="flex flex-col lg:flex-row w-full flex-1 justify-center items-center">
          <div className="about-text-box flex-1   flex flex-col  text-white  text-start px-4 md:px-10 gap-4 ">
            <p className="xl:text-2xl">
              <span className="text-xl xl:text-3xl text-red-500">1. </span>
              Proficient in Solidity with experience in writing upgradable smart
              contracts.
            </p>
            <p className="xl:text-2xl">
              <span className="text-xl xl:text-3xl text-red-500">2. </span>{" "}
              Familiar with the basic workings of EVM and capable of using
              Inline Assembly.
            </p>
            <p className="xl:text-2xl">
              <span className="text-xl xl:text-3xl text-red-500">3. </span>{" "}
              Excellent engineering practices and code style, adept at gas
              consumption optimization techniques.
            </p>
            <p className="xl:text-2xl">
              <span className="text-xl xl:text-3xl text-red-500">4. </span>{" "}
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
      </section>
      <section className="about2 relative container flex flex-col w-full  rounded-3xl  border-2 border-white py-10 lg:py-20 ">
        <h1 className="title text-center text-[#c4429e] text-5xl font-bold italic py-4 uppercase">
          Frontend Technology:
        </h1>
        <div className="flex flex-col lg:flex-row w-full flex-1 justify-center items-center">
          <div className="about-text-box flex-1 flex flex-col  py-10 text-white  text-start px-4 md:px-10 gap-4">
            <p>
              <span className="text-xl text-red-500">1.</span> Proficient in
              TypeScript/JavaScript and modern frontend frameworks such as React
              and Next.js.
            </p>
            <p>
              <span className="text-xl text-red-500">2.</span> Mastery of global
              state management with zustand, and able to achieve lightweight
              state management using Context.
            </p>
            <p>
              <span className="text-xl text-red-500">3.</span> Experienced in
              frontend performance optimization and familiar with webpack
              configuration.
            </p>
            <p>
              <span className="text-xl text-red-500">4.</span> Practical
              experience with Web3 libraries such as ethers.js, viem, and wagmi.
            </p>
            <p>
              <span className="text-xl text-red-500">5.</span> Experienced with
              toolchains like Rainbowkit and web3Modal.
            </p>
            <p>
              <span className="text-xl text-red-500">6.</span> Familiar with
              common frontend development component libraries such as Schdcn UI
              and Next UI, as well as animation libraries like Framer Motion and
              GSAP.
            </p>
            <p>
              <span className="text-xl text-red-500">7.</span> Proficient in
              querying GraphQL interfaces and integrating subgraph data.
            </p>
            <p>
              <span className="text-xl text-red-500">8.</span> Basic knowledge
              of backend development with the Nest.js framework.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src={img1}
              alt="img1"
              className="about-image object-cover object-center "
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
