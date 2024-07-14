import { useEffect } from "react";
import { gsap } from "gsap";
import followImg from "../assets/images/xiaoxiongmao.png";
const ImageFollowMouse = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      let targets = gsap.utils.toArray(".imgContainer img");

      gsap.to(targets, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        opacity: 1,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.15,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="imgContainer">
      {new Array(2).fill(null).map((_, index) => {
        return (
          <img
            key={index}
            src={followImg}
            alt="Follow Mouse"
            className="fixed top-4 left-4 h-12  opacity-0  z-[999]"
          />
        );
      })}
    </div>
  );
};

export default ImageFollowMouse;
