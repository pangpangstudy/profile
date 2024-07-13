import Eyes from "../Eyes";
import Loading from "../Eyes/Loading";
import { useEffect, useState } from "react";
import bg from "../../assets/images/heishenhuayasuo.png";
type Props = {};

function Hero({}: Props) {
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
    }, 45);
    () => clearInterval(id);
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url('${bg}')`,
      }}
      className="hero  w-full h-screen relative flex flex-col justify-center items-center  bg-cover bg-center"
    >
      <Eyes />
      <div className="text-white my-20 text-[6vw] cursor-pointer">
        {count} %
      </div>
      <Loading />
    </div>
  );
}

export default Hero;
