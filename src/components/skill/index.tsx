import { skillsData } from "@/lib/utils";
import gsap from "gsap/all";
import { useEffect, useRef } from "react";

export default function Skills() {
  const skillRef = useRef<HTMLDivElement>(null);
  const skillRefL = useRef<HTMLDivElement>(null);
  const skillRefR = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(skillRefL.current?.querySelectorAll("ul")!, {
        x: "100%",
        ease: "none",
        duration: 10,
        repeat: -1,
      });
      gsap.to(skillRefR.current?.querySelectorAll("ul")!, {
        x: "-100%",
        ease: "none",
        duration: 10,
        repeat: -1,
      });
    }, skillRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={skillRef}
      className="w-screen -mt-20 h-screen flex flex-col justify-center items-center py-4 text-black mb-20 relative"
    >
      <h1 className="uppercase  text-center absolute top-0 py-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 text-[5vw] z-10 ">
        my skills
      </h1>

      <div
        ref={skillRefL}
        className="flex items-center h-1/6 md:h-1/4  overflow-hidden rotate-[45deg] md:rotate-[35deg] lg:rotate-[25deg]"
      >
        <ul className="flex w-[200%] h-full items-center gap-8 px-4 py-4 bg-yellow-400 ">
          {skillsData.slice(0, 10).map((skill, index) => {
            return (
              <li
                className="flex flex-row h-full items-center gap-4 min-w-max" // 添加 min-w-max
                key={index}
              >
                <p className="text-2xl whitespace-nowrap">{skill.text}</p>
                <img
                  src={skill.logo}
                  alt={skill.text}
                  className="object-cover h-full" // 确保图片大小合理
                />
              </li>
            );
          })}
        </ul>
        <ul className="flex w-[200%] h-full items-center gap-8 px-4 py-4 bg-yellow-400 ">
          {skillsData.slice(0, 10).map((skill, index) => {
            return (
              <li
                className="flex flex-row h-full items-center gap-4 min-w-max" // 添加 min-w-max
                key={index}
              >
                <p className="text-2xl whitespace-nowrap">{skill.text}</p>
                <img
                  src={skill.logo}
                  alt={skill.text}
                  className="object-cover h-full" // 确保图片大小合理
                />
              </li>
            );
          })}
        </ul>
        <ul className="flex w-[200%] h-full items-center gap-8 px-4 py-4 bg-yellow-400 ">
          {skillsData.slice(0, 10).map((skill, index) => {
            return (
              <li
                className="flex flex-row h-full items-center gap-4 min-w-max" // 添加 min-w-max
                key={index}
              >
                <p className="text-2xl whitespace-nowrap">{skill.text}</p>
                <img
                  src={skill.logo}
                  alt={skill.text}
                  className="object-cover h-full" // 确保图片大小合理
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div
        ref={skillRefR}
        className="flex items-center h-1/6 md:h-1/4  overflow-hidden rotate-[-45deg] md:rotate-[-35deg] lg:rotate-[-25deg] absolute"
      >
        <ul className="flex w-[200%] h-full items-center gap-8 px-4 py-4 bg-yellow-400 ">
          {skillsData.slice(10).map((skill, index) => {
            return (
              <li
                className="flex flex-row h-full items-center gap-4 min-w-max" // 添加 min-w-max
                key={index}
              >
                <p className="text-2xl whitespace-nowrap">{skill.text}</p>
                <img
                  src={skill.logo}
                  alt={skill.text}
                  className="object-cover h-full" // 确保图片大小合理
                />
              </li>
            );
          })}
        </ul>
        <ul className="flex w-[200%] h-full items-center gap-8 px-4 py-4 bg-yellow-400 ">
          {skillsData.slice(10).map((skill, index) => {
            return (
              <li
                className="flex flex-row h-full items-center gap-4 min-w-max" // 添加 min-w-max
                key={index}
              >
                <p className="text-2xl whitespace-nowrap">{skill.text}</p>
                <img
                  src={skill.logo}
                  alt={skill.text}
                  className="object-cover h-full" // 确保图片大小合理
                />
              </li>
            );
          })}
        </ul>
        <ul className="flex w-[200%] h-full items-center gap-8 px-4 py-4 bg-yellow-400 ">
          {skillsData.slice(10).map((skill, index) => {
            return (
              <li
                className="flex flex-row h-full items-center gap-4 min-w-max" // 添加 min-w-max
                key={index}
              >
                <p className="text-2xl whitespace-nowrap">{skill.text}</p>
                <img
                  src={skill.logo}
                  alt={skill.text}
                  className="object-cover h-full" // 确保图片大小合理
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
