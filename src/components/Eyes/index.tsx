import { useRef, useState } from "react";
import { useEffect } from "react";
import { angleC } from "../../utils";
import eye from "../../assets/images/eye.png";

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
    <div className="eyes flex flex-col items-center w-full overflow-hidden opacity-50 ">
      <div className="flex items-center gap-x-10 md:gap-x-14">
        <div
          className="flex relative  w-[18vw] h-[15vw] rounded-full bg-cover bg-center "
          style={{ backgroundImage: `url('${eye}')` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22%] h-[22%] rounded-full bg-black  flex items-center justify-center">
            <div
              ref={refL}
              style={{
                transform: `rotate(${rotateL}deg)`,
              }}
              className="line  w-full h-15  z-10 "
            >
              <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
        <div
          className="flex relative  w-[18vw] h-[15vw] rounded-full bg-cover bg-center "
          style={{ backgroundImage: `url('${eye}')` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22%] h-[22%] rounded-full bg-black  flex items-center justify-center">
            <div
              ref={refR}
              style={{
                transform: `rotate(${rotateR}deg)`,
              }}
              className="line  w-full h-15  z-10 "
            >
              <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
