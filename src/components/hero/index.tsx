import video from "../../assets/nanhe.mp4";
import Eyes from "../Eyes";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="panel heroContainer relative h-screen flex items-center overflow-hidden">
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 z-[100] bg-black opacity-45"></div> */}
      <div className=" absolute top-0 left-0 right-0 bottom-0  flex flex-col justify-center items-center">
        <Eyes />
        <div className="textBox uppercase text-white font-serif">
          {"hello,world".split("").map((item, index) => {
            return (
              <span
                key={index}
                className="text-[9vw] lg:text-9xl text-transparent text-outline"
                // bg-clip-text bg-gradient-to-r from-indigo-500  to-pink-500 stroke-current text-shadow-3d
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <video
        src={video}
        className="w-full h-full object-cover object-center"
        autoPlay
        muted
        loop
      />
    </div>
  );
}

export default Hero;
