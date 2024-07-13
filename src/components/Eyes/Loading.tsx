import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import sunwukong from "../../assets/images/sunwukong.png";
type Props = {};

const Loading = (props: Props) => {
  useGSAP(() => {
    gsap.to(".load .line", {
      width: "100%",
      duration: 5,
    });
  });
  return (
    <div className="load h-20  w-full flex items-center mb-10 absolute bottom-0 ">
      <div className="line h-px bg-white flex items-end justify-end">
        <img
          src={sunwukong}
          className="w-20 h-20 -mr-4  flex-wrap-reverse"
          style={{ transform: "rotateY(180deg)" }}
        />
      </div>
    </div>
  );
};

export default Loading;
