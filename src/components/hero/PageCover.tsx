import MaxWidthContainer from "../MaxWidthContainer";
import { Button } from "../ui/button";
import profileImg from "../../assets/images/profile.jpg";
import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
// import { ScrollTrigger } from "gsap/all";
type Props = {};

function PageCover({}: Props) {
  const pageCover = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pageCover.current,
          start: "top center+=200",
          end: "top top",
          scrub: true,
        },
      });
      tl.from("img", {
        opacity: 0,
        duration: 0.5,
      })
        .from("h1", {
          opacity: 0,
          x: "-50%",
        })
        .from("p", {
          opacity: 0,
          x: "50%",
          duration: 0.5,
        })
        .from(".allButton", {
          opacity: 0,
          duration: 0.5,
        });
    }, pageCover);
    return () => ctx.revert();
  }, []);
  return (
    <section
      id="about"
      ref={pageCover}
      className="w-screen h-screen relative md:h-screen text-white rounded-tl-3xl rounded-tr-3xl overflow-hidden border-t-2 border-white flex items-center
      "
    >
      <MaxWidthContainer>
        <div className="w-full md:w-[65%] flex flex-col justify-center items-center mx-auto text-center">
          <div className="h-44 w-44">
            <img
              src={profileImg}
              alt="头像"
              className="w-full h-full rounded-full"
            />
          </div>
          <h1 className="font-semibold text-4xl py-4 leading-[3.5rem] md:leading-[4.5rem] md:text-7xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 ">
              I'm Pang Pang,
            </span>
            frontend developer based in China.
          </h1>
          <p className="md:px-10 lg:px-18 md:py-6 lg:py-10 lg:text-xl">
            I am a blockchain and front-end developer skilled in Solidity and
            EVM optimization, proficient with Hardhat. I excel in
            TypeScript/JavaScript, React, and Next.js, with extensive Web3
            experience.
          </p>
          <div className="allButton w-full flex flex-col items-center justify-center md:flex-row gap-4 py-4 px-20 lg:px-32">
            <Button className="min-w-[80%]rounded-xl md:rounded-full bg-gradient-to-br  from-indigo-500 to-pink-500  hover:from-pink-500 hover:to-indigo-500 text-white font-bold text-base">
              <Link
                to={"https://t.me/zreoza"}
                className="w-full h-full flex justify-center items-center"
              >
                Connect with me
              </Link>
            </Button>
            <Button
              variant="destructive"
              className="min-w-[80%] rounded-xl md:rounded-full text-white font-bold text-base"
            >
              <a
                href="../../assets/resume.pdg"
                download="张正华-前端开发工程师-本科.pdf"
                className="w-full h-full flex justify-center items-center  "
              >
                Resume -&gt;
              </a>
            </Button>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export default PageCover;
