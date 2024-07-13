import { useEffect } from "react";
import { gsap } from "gsap";
import pixelMan from "../assets/images/pixelman.png";
const ImageFollowMouse = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      let targets = gsap.utils.toArray(".imgContainer img");

      gsap.to(targets, {
        x: clientX,
        y: clientY,
        duration: 0.5,
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
      {new Array(7).fill(null).map((_, index) => {
        return (
          <img
            key={index}
            src={pixelMan}
            alt="Follow Mouse"
            className="fixed top-0 left-0 h-[4vw]  opacity-0"
          />
        );
      })}
    </div>
  );
};

export default ImageFollowMouse;
