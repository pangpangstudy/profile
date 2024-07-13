import { useRef, useState } from "react";
import { useEffect } from "react";
import { angleC } from "../../utils";

function Eyes() {
  const [rotateL, setRotateL] = useState(0);
  const [rotateR, setRotateR] = useState(0);
  const refL = useRef<HTMLDivElement>(null);
  const refR = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleL = (event: MouseEvent) => {
      const angle = angleC(refL, event);
      setRotateL(angle - 180);
    };
    const handleR = (event: MouseEvent) => {
      const angle = angleC(refR, event);
      setRotateR(angle - 180);
    };
    if (refL.current) {
      window.addEventListener("mousemove", handleL);
    }
    if (refR.current) {
      window.addEventListener("mousemove", handleR);
    }
    return () => {
      window.removeEventListener("mousemove", handleL);
      window.removeEventListener("mousemove", handleR);
    };
  }, []);

  return (
    <div className="eyes flex flex-col items-center w-full overflow-hidden py-20 opacity-75">
      <div className="flex items-center gap-x-10 md:gap-x-20">
        <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-[#746870]">
          <div className="relative w-2/3 h-2/3  rounded-full bg-[#c73d1f] flex items-center justify-center">
            <div
              ref={refL}
              style={{
                transform: `rotate(${rotateL}deg)`,
              }}
              className="line  w-full h-15  z-10 "
            >
              <div className="w-10 h-10  rounded-full bg-[#0d0602]"></div>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
          <div className="relative w-2/3 h-2/3  rounded-full bg-zinc-900 flex items-center justify-center">
            <div
              ref={refR}
              style={{
                transform: `rotate(${rotateR}deg)`,
              }}
              className="line  w-full h-15  z-10 "
            >
              <div className="w-10 h-10  rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div> */}
        <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-[#746870]">
          <div className="relative w-2/3 h-2/3  rounded-full bg-[#c73d1f] flex items-center justify-center">
            <div
              ref={refR}
              style={{
                transform: `rotate(${rotateR}deg)`,
              }}
              className="line  w-full h-15  z-10 "
            >
              <div className="w-10 h-10  rounded-full bg-[#0d0602]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
