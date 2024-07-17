import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import HardhatLogo from "../assets/images/skill/Hardhat.svg";
import MySQLLogo from "../assets/images/skill/MySQL.svg";
import NestLogo from "../assets/images/skill/Nest.svg";
import NextLogo from "../assets/images/skill/Next.svg";
import SolidityLogo from "../assets/images/skill/Solidity.svg";
import htmlLogo from "../assets/images/skill/css.svg";
import cssLogo from "../assets/images/skill/CSS3.svg";
import graphqlLogo from "../assets/images/skill/graphql.svg";
import jsLogo from "../assets/images/skill/js.svg";
import nodejsLogo from "../assets/images/skill/nodejs.svg";
import prismaLogo from "../assets/images/skill/prisma.svg";
import reactLogo from "../assets/images/skill/react.svg";
import tailwindcssLogo from "../assets/images/skill/tailwindcss.svg";
import tsLogo from "../assets/images/skill/ts.svg";
import zusttandLogo from "../assets/images/skill/zustand.svg";
import gsapLogo from "../assets/images/skill/gsap.svg";
import rainbowLogo from "../assets/images/skill/rainbow.svg";
import ethersLogo from "../assets/images/skill/ethers.svg";
import viemLogo from "../assets/images/skill/viem.png";
import siweLogo from "../assets/images/skill/siwe.png";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const angleC = (ref: any, event: MouseEvent) => {
  const rect = ref.current!.getBoundingClientRect();
  // 这里不需要添加滚动偏移量，因为getBoundingClientRect()提供的是相对于视口的位置
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  let deltaX = mouseX - centerX;
  let deltaY = mouseY - centerY;
  let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  return angle;
};

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData: { text: string; logo?: any }[] = [
  { text: "HTML", logo: htmlLogo },
  { text: "CSS", logo: cssLogo },
  { text: "JavaScript", logo: jsLogo },
  { text: "TypeScript", logo: tsLogo },
  { text: "React", logo: reactLogo },
  { text: "Next.js", logo: NextLogo },
  { text: "Nest.js", logo: NestLogo },
  { text: "Node.js", logo: nodejsLogo },
  { text: "Tailwind", logo: tailwindcssLogo },
  { text: "Prisma", logo: prismaLogo },
  { text: "zustand", logo: zusttandLogo },
  { text: "GraphQL", logo: graphqlLogo },
  { text: "GSAP", logo: gsapLogo },
  { text: "Hardhat", logo: HardhatLogo },
  { text: "MySQL", logo: MySQLLogo },
  { text: "Solidity", logo: SolidityLogo },
  { text: "Viem", logo: viemLogo },
  { text: "Ethers", logo: ethersLogo },
  { text: "Rainbowkit", logo: rainbowLogo },
  { text: "siwe", logo: siweLogo },
] as const;
