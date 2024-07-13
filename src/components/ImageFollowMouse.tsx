import { useEffect } from "react";
import { gsap } from "gsap";
import sunwukong from "../assets/images/sunwukong.png";
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
      {new Array(8).fill(null).map((_, index) => {
        return (
          <img
            key={index}
            src={sunwukong}
            alt="Follow Mouse"
            className="fixed top-0 left-0 h-12  opacity-0  z-[999]"
          />
        );
      })}
    </div>
  );
};

export default ImageFollowMouse;
