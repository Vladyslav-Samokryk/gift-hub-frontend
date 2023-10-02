import type { RefObject } from "react";
import { useRef, useEffect } from "react";

export const useHorizontalScroll = (): RefObject<HTMLDivElement> => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();

        el.scrollBy({
          left: e.deltaY < 0 ? -30 : 30,
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [elRef]);

  return elRef;
};
