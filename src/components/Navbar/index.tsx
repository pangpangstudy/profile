import gsap from "gsap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => {
      setIsNavVisible(true);
    }, 5500);
    return () => clearTimeout(id);
  }, []);
  return (
    <div
      className={`mx-auto navbar fixed flex justify-center items-center  w-full text-black bg-transparent pt-4 text-xs md:text-base lg:text-lg ${
        isNavVisible ? "" : "-translate-y-full"
      } duration-700 transition-all`}
    >
      <ul className="relative flex justify-around items-center border border-black px-10 rounded-full backdrop-blur-lg backdrop-brightness-75 border-r-red-600 border-l-red-600 border-r-2 border-l-2">
        <li
          className="bg-white opacity-85 px-10 py-2  md:px-20 flex justify-center items-center cursor-pointer absolute top-full left-1/2 transform -translate-x-1/2 "
          style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)" }}
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          MENU
        </li>

        {["Home", "About", "Skills", "Hobby"].map((item) => {
          return (
            <li
              key={item}
              className="uppercase cursor-pointer  relative overflow-hidden "
              onMouseEnter={() => {
                gsap;
              }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="flex flex-col  py-2 px-4 text-white"
              >
                <span>{item}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
