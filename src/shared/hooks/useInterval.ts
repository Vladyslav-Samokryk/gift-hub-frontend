import { useEffect, useRef } from "react";

type CallbackFunction = () => void;

export function useInterval (callback: CallbackFunction, delay: number): void {
  const savedCallback = useRef<CallbackFunction | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = (): void => savedCallback.current?.();
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
