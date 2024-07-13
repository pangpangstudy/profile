import React, {
  lazy,
  startTransition,
  Suspense,
  useCallback,
  useState,
} from "react";
import useKonamiCheatCode from "./hook";
const HotAirBalloons = lazy(() => import("./HotAirBalloons"));

export interface FallingHotAirBalloonsProps {
  endHandle: () => void;
  size?: number;
  count?: number;
  iterations?: number;
  duration?: number;
}

const EasterEgg: React.FC<React.PropsWithChildren> = () => {
  const [show, setShow] = useState(false);
  const startEasterEgg = useCallback(
    () =>
      startTransition(() => {
        console.log("-------彩蛋开始喽--------");
        setShow(true);
      }),
    [setShow]
  );
  const endHandle = useCallback(
    () =>
      startTransition(() => {
        console.log("-------彩蛋结束喽--------");
        setShow(false);
      }),
    [setShow]
  );
  useKonamiCheatCode(startEasterEgg);
  if (show) {
    return (
      <div
      // 因为监听的是css动画事件 而不是js动画
      // onAnimationEnd={() => {
      //   console.log("zhixing donghua jishu ");
      //   setShow(false);
      // }}
      >
        <HotAirBalloons endHandle={endHandle} />
      </div>
    );
  }
  return null;
};

export default EasterEgg;
