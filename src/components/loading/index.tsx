import { useEffect, useState } from "react";
import hreobg from "../../assets/images/herobg.gif";
import sunwukong from "../../assets/images/sunwukong.png";
// import { gsap } from "gsap/all";
// import { useGSAP } from "@gsap/react";
type Props = {};

function Loading({}: Props) {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((state) => {
        if (state < 100) {
          return state + 1;
        } else {
          clearInterval(id);
          return 100;
        }
      });
    }, 19);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="loading h-screen  fixed top-0 right-0 w-full z-[999] overflow-hidden">
      <div
        className="w-full h-full  relative flex flex-col justify-center items-center  bg-cover bg-right z-20 overflow-hidden"
        style={{
          backgroundImage: `url('${hreobg}')`,
        }}
      >
        <div className="text-red-600 my-20 text-[10vw] cursor-pointer">
          {count} %
        </div>
        <div className="load h-20  w-full flex items-center mb-10 absolute bottom-0 ">
          <div className="line h-px bg-white flex items-end justify-end">
            <img
              src={sunwukong}
              className="w-20 h-20 -mr-4  flex-wrap-reverse "
              style={{ transform: "rotateY(180deg)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
