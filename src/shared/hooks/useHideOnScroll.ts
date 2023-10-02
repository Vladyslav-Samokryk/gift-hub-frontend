import { useEffect, useState } from "react";

export const useHideOnScroll = (heightToHideFrom = 500): boolean => {
  const [isVisible, setIsVisible] = useState(true);

  const listenToScroll = (): void => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    setIsVisible(winScroll < heightToHideFrom);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return isVisible;
};
