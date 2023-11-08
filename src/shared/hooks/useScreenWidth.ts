import type { RefObject } from "react";
import { useEffect, useState } from "react";

export const useScreenWidth = (ref?: RefObject<HTMLElement>): number => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const updateWidth = (): void => {
      if (ref?.current) {
        setWindowWidth(ref.current.offsetWidth);
      } else {
        setWindowWidth(window.innerWidth);
      }
    };

    // Initial width calculation
    updateWidth();

    const handleResize = (): void => {
      updateWidth();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return windowWidth;
};
