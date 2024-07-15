import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navRef = useRef(null);
  useGSAP(() => {
    if (isNavVisible) {
      gsap.to(navRef.current, { y: 0, duration: 0.5, ease: "power2.inOut" });
    } else {
      gsap.to(navRef.current, {
        y: "-100%",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [isNavVisible]);
  return (
    <div
      ref={navRef}
      className="mx-auto navbar fixed flex justify-center items-center  w-full text-black bg-transparent pt-4 text-xs md:text-base lg:text-lg"
    >
      <ul className="relative flex justify-around items-center border border-black px-10 rounded-full backdrop-blur-lg backdrop-brightness-75 border-r-red-600 border-l-red-600 border-r-2 border-l-2">
        <li
          className="bg-white opacity-85 px-10 py-2  md:px-20 flex justify-center items-center cursor-pointer absolute top-full left-1/2 transform -translate-x-1/2 "
          style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)" }}
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          MENU
        </li>

        {["Home", "About", "Skill", "Hobby"].map((item) => {
          return (
            <li
              key={item}
              className="uppercase cursor-pointer  relative overflow-hidden "
              onMouseEnter={() => {
                gsap;
              }}
            >
              <Link to="/" className="flex flex-col  py-2 px-4 text-white">
                <span>{item}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
