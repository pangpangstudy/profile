import { useEffect } from "react";

const useKonamiCheatCode = (handler: () => void): void => {
  useEffect(() => {
    const pattern = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowLeft",
      "ArrowRight",
      "ArrowRight",
    ];
    //   记录按键次序 每一次都应该和pattern的索引按键相同
    let currentIndex = 0;
    const onKeyUpHandler = (e: KeyboardEvent) => {
      const { key } = e;
      if (key !== pattern[currentIndex]) {
        currentIndex = 0;
        return;
      }
      currentIndex += 1;
      if (pattern.length == currentIndex) {
        currentIndex = 0;
        handler();
      }
    };
    document.addEventListener("keyup", onKeyUpHandler);
    return () => document.removeEventListener("keyup", onKeyUpHandler);
  }, [handler]);
};
export default useKonamiCheatCode;
